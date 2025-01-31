const Container = ({ children }) => {
  return (
    <div className="flex flex-col gap-20 py-20 sm:px-80 px-10">{children}</div>
  );
};

export default Container;
