import { type PropsWithChildren } from "react";

interface checkboxProps extends PropsWithChildren {
  onClick: () => void;
}
const CheckBox = ({ onClick, children }: checkboxProps) => {
  return (
    <>
      <div className="inline-block align-middle">
        <input
          className="inline-block align-middle accent-[#262626] mr-1 w-[18px] h-[18px]"
          type="checkbox"
          onClick={onClick}
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
