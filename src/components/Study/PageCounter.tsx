interface PageCounterType {
  total: number;
}

const PageConter = ({ total }: PageCounterType) => {
  return (
    <>
      <div>
        <h2 className="inline-block text-medium-14 align-middle mr-1">총</h2>
        <h2 className="inline-block text-medium-14 align-middle text-primary-500 mr-1">{total}</h2>
        <h2 className="inline-block text-medium-14 align-middle">건</h2>
      </div>
    </>
  );
};

export default PageConter;
