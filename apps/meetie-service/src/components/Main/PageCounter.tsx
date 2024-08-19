const PageConter = ({ current, total }: { current: number; total: number }) => {
  return (
    <>
      <div>
        <h2 className="inline-block text-medium-14 align-middle text-primary-500 mr-1">
          {current}
        </h2>
        <h2 className="inline-block text-medium-14 align-middle">/ {total}</h2>
      </div>
    </>
  );
};

export default PageConter;
