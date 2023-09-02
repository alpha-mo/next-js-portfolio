const Own = () => {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-secondary text-2xl font-bold">On my own</h1>
      <p className="text-content-100 max-w-xl">
        Knowing that the work-market requires more than the basics and with the need to create a simple portfolio (this one!) to present myself to possible
        employers I studied parallel with the academy and advanced my skills in various areas such as:
      </p>
      <p className="text-content-100 max-w-xl">At Jahopp I got to develop some advanced solutions as a full stack developer.</p>
      <p className="text-content-100 max-w-xl">During this period:</p>
      <ul className="text-content-100 list-disc flex flex-col gap-2 pl-4 max-w-2xl">
        <li>I needed to host my own portfolio on a self-managed Linux server as a way to teach myself how to work with such environment.</li>
        <li>
          Through the last period of my studies Spring and Spring boot launched new versions which was a perfect opportunity for me to experience real-world
          changes in frameworks so I had to relearn some of the Spring security on my own.
        </li>
        <li>As a full-stack developer I found myself needing to learn some javascipt-based frameworks which is a lot of fun.</li>
      </ul>
      <p className="text-content-100 max-w-lg">To see a bit of my projects please visit my Github profile link in contact page.</p>
    </article>
  );
};

export default Own;
