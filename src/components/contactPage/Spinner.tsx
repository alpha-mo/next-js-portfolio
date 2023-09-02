const Spinner = () => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        id="spinner"
        width={16}
        height={16}
        className="animate-spin m-auto"
      >
        <path
          d="M12 0A12 12 0 1 1 0 12"
          fill="none"
          strokeWidth="2.3"
          transform="translate(-.4 -.4) matrix(.87933 0 0 .87933 1.4 1.4)"
          className="stroke-primary "
        />
      </svg>
    </>
  );
};

export default Spinner;
