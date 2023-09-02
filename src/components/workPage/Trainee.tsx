const Trainee = () => {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-secondary text-2xl font-bold">Full stack trainee</h1>
      <p className="text-content-100 max-w-xl">
        I chose to do my final trainee period at Jahopp AB which is a leading company in Sweden that creates and manages learning platforms.
      </p>
      <p className="text-content-100 max-w-xl">At Jahopp I got to develop some advanced solutions as a full stack developer.</p>
      <p className="text-content-100 max-w-xl">During this period:</p>
      <ul className="text-content-100 list-disc flex flex-col gap-2 pl-4 max-w-2xl">
        <li>I collaborated with a highly skilled team to deliver high-quality front-end and bck-end solutions.</li>
        <li>Adapted quickly to the company’s routines and frameworks, utilizing technologies such as Svelte, Sveltekit, Tailwin CSS, and headless CMS.</li>
        <li>contributed to the implementation of testing routines with Vitest to ensure that the software qulity is up to the company’s stndrards.</li>
        <li>contact information and references are detailed in my resume.</li>
        <li>The projects I worked on will NOT be posted on my public Github nor Gitlab as they are the company’s property.</li>
      </ul>
    </article>
  );
};

export default Trainee;
