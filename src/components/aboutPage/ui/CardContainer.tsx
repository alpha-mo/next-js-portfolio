const Card = ({ children, className }: { children: React.ReactNode; className: string | undefined }) => {
  return (
    <div className={`border border-divider-200 rounded-md p-6 ${className}`}>
      {children}
      {/*  */}
    </div>
  );
};

export default Card;
