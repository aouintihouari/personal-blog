const BodyContainer = ({ children }) => {
  return (
    <section className="mx-auto flex h-auto w-[calc(90%)] border-2 border-t-0 border-neutral-200 p-4 md:w-[calc(80%-10px)] xl:w-[calc(35%-12px)] dark:border-neutral-700">
      <div className="mt-12">{children}</div>
    </section>
  );
};

export default BodyContainer;
