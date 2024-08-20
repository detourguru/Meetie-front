interface ProgressBarProps {
  width: string;
}

const ProgressBar = ({ width }: ProgressBarProps) => {
  return (
    <div className="w-full h-0.5 bg-[#DEE2E6]">
      <div className={`${width} h-0.5 bg-primary-500`} />
    </div>
  );
};

export default ProgressBar;
