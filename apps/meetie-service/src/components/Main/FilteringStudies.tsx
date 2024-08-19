import StudyCard from "./StudyCard";

function FilterWithCount({ children }: { children?: React.ReactNode }) {
  const isChildrenExist = children === undefined ? false : true;
  const flex = isChildrenExist ? "justify-between" : "justify-end";
  return (
    <>
      <div className={`flex ${flex} mb-[27px]`}>
        {isChildrenExist && (
          <div className="inline-block align-middle">
            <input
              className="inline-block align-middle accent-[#262626] mr-1 w-[18px] h-[18px]"
              type="checkbox"
              name=""
              id="seekingOnly"
            />
            <label className="text-gray-500 text-bold-14 text-center" htmlFor="seekingOnly">
              {children}
            </label>
          </div>
        )}
        <div>
          <h2 className="inline-block text-medium-14 align-middle text-primary-500 mr-1">1</h2>
          <h2 className="inline-block text-medium-14 align-middle">/ 6</h2>
        </div>
      </div>
      <StudyCard />
    </>
  );
}
export default FilterWithCount;
