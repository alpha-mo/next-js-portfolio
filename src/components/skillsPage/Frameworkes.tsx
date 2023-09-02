import Card from "./ui/Card";
import Group from "./ui/Group";

const Frameworks = () => {
  return (
    <section className="text-content-100">
      <h2 className="text-secondary text-xl font-bold">Tools & Frameworks</h2>
      <p className="text-content-100">This list will be always growing</p>
      <Group>
        <Card variant="git" />
        <Card variant="github" />
        <Card variant="gitlab" />
      </Group>
      <Group>
        <Card variant="java" />
        <Card variant="javascript" />
        <Card variant="typescript" />
      </Group>
      <Group>
        <Card variant="spring" />
        <Card variant="maven" />
      </Group>
      <Group>
        <Card variant="svelte" />
        <Card variant="react" />
        <Card variant="next js" />
      </Group>
      <Group>
        <Card variant="HTML" />
        <Card variant="CSS" />
        <Card variant="tailwind" />
      </Group>
      <Group>
        <Card variant="databases" />
        <Card variant="hibernate" />
        <Card variant="directus" />
      </Group>
    </section>
  );
};

export default Frameworks;
