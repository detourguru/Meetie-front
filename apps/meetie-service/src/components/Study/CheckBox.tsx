const CheckBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default CheckBox;
