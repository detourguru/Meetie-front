import { type PropsWithChildren } from "react";

interface CheckBoxProps extends PropsWithChildren {
  onClick?: () => void; // FIXME: 작업하지 않은 페이지에서의 에러 잡기위해 임의로 optional 추가
}
const CheckBox = ({ onClick, children }: CheckBoxProps) => {
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
