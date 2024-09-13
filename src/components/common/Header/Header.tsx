import Image from "@/components/common/Image/Image";

interface HeaderButtonPropsType {
  handleButtonClick?: () => void;
}

interface HeaderProps extends React.PropsWithChildren {
  hasButton?: boolean;
  backgroundColor?: string;
}

interface HeaderLeftButtonProps extends HeaderButtonPropsType {
  isCloseIcon?: boolean;
}

interface HeaderRightButtonProps extends HeaderButtonPropsType {
  icon: string;
}

interface HeaderRightTextButtonProps extends HeaderButtonPropsType {
  isComplete?: boolean;
  children?: React.ReactNode;
}

const Header = ({ children, backgroundColor }: HeaderProps) => {
  return (
    <div
      className={`w-[375px] h-[56px] flex justify-center items-center fixed top-0 left-[50%] translate-x-[-50%] px-4 z-50 ${backgroundColor ? backgroundColor : "bg-white"}`}
    >
      {children}
    </div>
  );
};

const HeaderTitle = ({ children, hasButton }: HeaderProps) => {
  return (
    <h1 className={`text-bold-20 text-[#212529] ${hasButton ? "mr-0" : "mr-auto"}`}>{children}</h1>
  );
};

const HeaderLeftButton = ({ isCloseIcon, handleButtonClick }: HeaderLeftButtonProps) => {
  return (
    <button className="absolute left-4" onClick={handleButtonClick}>
      <Image
        src={isCloseIcon ? "/svg/ic-header-close.svg" : "/svg/ic-header-left-arrow.svg"}
        alt="leftButtonIcon"
        className="w-[28px] h-[28px]"
      />
    </button>
  );
};

const HeaderRightButton = ({ icon, handleButtonClick }: HeaderRightButtonProps) => {
  return (
    <button className="absolute right-4" onClick={handleButtonClick}>
      <Image src={icon} alt="rightButtonIcon" className="w-[28px] h-[28px]" />
    </button>
  );
};

const HeaderRightText = ({ nowStep }: { nowStep: number }) => {
  return (
    <p className="text-medium-16 absolute right-4 text-gray-250">
      <span className="text-[#313131]">{nowStep}</span> / 2
    </p>
  );
};

const HeaderRightTextButton = ({
  isComplete,
  children,
  handleButtonClick,
}: HeaderRightTextButtonProps) => {
  return (
    <button className="absolute right-4" onClick={handleButtonClick}>
      {children ? (
        children
      ) : (
        <p className={`text-medium-16 ${isComplete ? "text-primary-500" : "text-black"}`}>
          {isComplete ? "완료" : "취소"}
        </p>
      )}
    </button>
  );
};

Header.Title = HeaderTitle;
Header.LeftButton = HeaderLeftButton;
Header.RightButton = HeaderRightButton;
Header.RightText = HeaderRightText;
Header.RightTextButton = HeaderRightTextButton;

export default Header;
