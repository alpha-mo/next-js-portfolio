const Loading = () => {
  return (
    <main>
      <div className="flex mt-6 gap-4 w-full justify-center">
        <div className="w-6 h-3 bg-primary animate-spin duration-200 rounded" />
        <div className="w-6 h-3 bg-secondary animate-spin duration-75 rounded" />
      </div>
    </main>
  );
};

export default Loading;
