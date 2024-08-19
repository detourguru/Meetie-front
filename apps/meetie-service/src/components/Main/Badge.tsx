interface ISpanProps {
  children: string;
  close?: boolean;
  className: string;
}

export default function Badge({ close, children, ...rest }: ISpanProps) {
  const spanStyle = rest.className;
  return (
    <span
      className={`inline-block align-middle mb-2 rounded-[5px] border px-[11px] py-[2px] mr-2 text-medium-14 ${spanStyle}`}
    >
      {children}
      {close && (
        <button
          type="button"
          className="inline-flex items-center p-1 ms-2 text-sm text-primary-500 bg-transparent rounded-sm"
          aria-label="Remove"
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
