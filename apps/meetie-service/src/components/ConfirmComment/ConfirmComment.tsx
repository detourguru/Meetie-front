import Image from "next/image";
import UserImg from "/public/img/img-user-profile.png";

const ConfirmComment = () => {
  return (
    <section className="flex px-4 py-5 bg-[#FAFAFA] border-t border-b border-[#EFEFEF]">
      <div className="relative w-9 h-9 rounded-full mr-3">
        <Image src={UserImg} alt="user image" width={36} height={36} />
      </div>
      <div>
        <h4 className="text-bold-14 inline mr-2">테디</h4>
        <span className="text-medium-12 text-[#898989]">6월 5일 오후 8:04</span>
        <p className="text-regular-14 text-[#1F1F1F]">
          처음부터 끝까지 봤는데, 정말 꼼꼼하게 잘하셨네요! <br />
          피드백 할 부분이 없는데요! 잘 보고 가요 :)
        </p>
        <div className="flex mt-5">
          <div className="flex gap-2 px-2 py-1.5 h-8 bg-[#F3F3F3] border border-[#DDD] rounded-lg">
            <span className="text-medium-14">😊</span>
            <span className="text-medium-12">1</span>
          </div>
          <button>
            <div className="flex items-center justify-center w-8 h-8 ml-2 bg-[#F3F3F3] border border-[#ddd] rounded-lg">
              <Image src="/svg/ic-calendar-emoji.svg" alt="icon" width={18} height={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmComment;
