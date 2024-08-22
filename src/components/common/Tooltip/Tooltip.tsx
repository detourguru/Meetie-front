import { type PropsWithChildren } from "react";

interface TooltipProps extends PropsWithChildren {
  message: string;
}

const Tooltip = ({ children, message }: TooltipProps) => {
  return (
    <div className="group relative w-[70%]">
      <div className="flex items-center">{children}</div>
      <span className="absolute top-5 left-0 scale-0 rounded bg-gray-500 p-2 text-regular-14 text-white whitespace-nowrap group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
