const Topics = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-secondary font-semibold text-lg">This degree:</h2>
      <p className="text-content-100">During the time of study I got to work with various topics such as:</p>
      <ul className="text-content-100 list-disc pl-4 mt-2 flex flex-col gap-2">
        <li>Computer science/programming.</li>
        <li>Java (platform).</li>
        <li>System analysis and design.</li>
        <li>System architecture.</li>
        <li>Software development processes (processes, methods, frameworks).</li>
        <li>Relational databases, SQL and data modelling.</li>
        <li>Script languages and frontend technologies (Swing, JavaFX, JavaScript, XML, CSS, HTML etc).</li>
        <li>Backend frameworks and technologies (Java/Jakarta EE, Spring etc.).</li>
        <li>Software development tools (IDE, version handling, build automation etc).</li>
      </ul>
    </div>
  );
};

export default Topics;
