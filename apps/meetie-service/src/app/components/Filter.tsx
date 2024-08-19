import type { DetailedHTMLProps, HTMLAttributes } from "react";

function Filter({
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <>
      <div {...rest}>
        <div className="inset-0 absolute w-full h-full bg-black opacity-50"></div>
        <div className="z-10 absolute bottom-0 left-0 w-full h-auto bg-white rounded-t-lg p-4">
          {children}
        </div>
      </div>
    </>
  );
}
export default Filter;
