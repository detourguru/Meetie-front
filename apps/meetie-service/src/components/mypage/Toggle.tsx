interface IToggleProps {
  checked: boolean;
  title?: string;
}

const Toggle = ({ checked, title }: IToggleProps) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="hidden peer" checked={checked} />
        <div className="relative w-10 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500" />
        {title && <span className="ms-3 text-medium-14 text-gray-900">{title}</span>}
      </label>
    </>
  );
};

export default Toggle;
