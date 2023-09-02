"use client";

import { sleep } from "@/utils/service";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrMsg from "./InputError";
import SuccessMsg from "./SuccessMsg";
import Fail from "./FailedMsg";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [showBody, setShowBody] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  useEffect(() => {
    sleep(200).then(() => setShowBody(() => true));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      msg: "",
    },
    onSubmit: async (values) => {
      setIsWaiting(() => true);
      const result = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          person: formik.values.name,
          personMail: formik.values.email,
          personMsg: formik.values.msg,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        setShowSuccess(true);
        setIsWaiting(false);
        formik.resetForm();
        await sleep(2000);
        setShowSuccess(false);
      } else {
        setShowFail(true);
        setIsWaiting(false);
        await sleep(1500);
        setShowFail(false);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "too short").max(25, "max 25 characters").required("cannot be empty"),
      email: Yup.string().email("invalid email").required("cannot be empty"),
      msg: Yup.string().min(30, "minimum 30 characters").required("cannot be empty"),
    }),
  });

  return (
    <form
      className={`flex flex-col gap-4 ${
        showBody && "opacity-100"
      } opacity-0 transition-opacity duration-300 ease-in text-content-100 w-full max-w-md m-auto border border-divider-200 shadow-issuing p-6 rounded-lg`}
      onSubmit={formik.handleSubmit}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder={"Your name"}
        className="py-2 px-4 text-lg rounded-md bg-base-input w-full"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && <ErrMsg>{formik.errors.name}</ErrMsg>}
      <input
        type="email"
        name="email"
        id="email"
        placeholder={"Your email"}
        className="py-2 px-4 text-lg rounded-md bg-base-input w-full"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && <ErrMsg>{formik.errors.email}</ErrMsg>}
      <textarea
        name="msg"
        id="msg"
        placeholder={"your message"}
        className="py-2 px-4 text-lg rounded-md min-h-[10ch] bg-base-input w-full"
        value={formik.values.msg}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.msg && formik.errors.msg && <ErrMsg>{formik.errors.msg}</ErrMsg>}
      <button type="submit" className="bg-base-input p-3 rounded-md hover:bg-base-hover w-full">
        {!isWaiting ? "send" : <Spinner />}
      </button>
      {showSuccess && <SuccessMsg />}
      {showFail && <Fail />}
    </form>
  );
};

export default ContactForm;
