import Address from "./ui/Address";
import Card from "./ui/CredCard";

const Issuing = () => {
  return (
    <div className="text-content-100">
      <h2 className="text-secondary text-lg font-semibold">Issuing and recognition</h2>
      <Card type="award" />
      <Address type="award" />
      <Card type="issu" />
      <Address type="issu" />
    </div>
  );
};

export default Issuing;
