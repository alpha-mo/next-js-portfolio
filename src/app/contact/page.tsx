import ContactForm from "@/components/contactPage/ContactForm";
import HomeButtons from "@/components/homePage/ui/Buttons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact form",
  keywords: ["Max Ojail", "fullstack developer", "java developer", "contact"],
};

const ContactPage = () => {
  return (
    <main className="">
      <ContactForm />
      <div className="bg-divider-300 w-11/12 max-w-md h-[2px] my-4 m-auto" />
      <div className="w-fit m-auto">
        <HomeButtons />
      </div>
    </main>
  );
};

export default ContactPage;
