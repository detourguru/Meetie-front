import Image from "next/image";

interface HashTagPropsType extends React.HTMLAttributes<HTMLSpanElement> {
  close?: boolean;
}

const HashTag = ({ close, children, className, ...props }: HashTagPropsType) => {
  return (
    <span
      className={`inline-block align-middle rounded-[5px] border px-[11px] py-[2px] mr-2 text-medium-14 ${className}`}
      {...props}
    >
      {children}
      {close && (
        <button
          type="button"
          className="inline-flex items-center p-1 ms-2 text-sm text-primary-500 bg-transparent rounded-sm"
          aria-label="Remove"
        >
          <Image src="/svg/ic-down-arrow.svg" alt="down-arrow" width={14} height={14} />
        </button>
      )}
    </span>
  );
};

export default HashTag;
