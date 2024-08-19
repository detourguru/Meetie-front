const ToggleSwitch = ({ children }: { children: React.ReactNode }) => {
  {
    /* TODO: 공통 컴포넌트로 대체예정 */
  }
  return (
    <>
      <div className="flex justify-end mb-6">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <span className="ms-3 text-medium-14 text-gray-500">{children}</span>
          <div className="relative ml-2 w-10 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-1 after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
        </label>
      </div>
    </>
  );
};
export default ToggleSwitch;
