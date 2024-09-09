import Image from "next/image";

import ConfirmEmoji from "@/components/StudyRoom/ConfirmEmoji/ConfirmEmoji";

import UserImg from "/public/img/img-user-profile.png";

const ConfirmComment = () => {
  return (
    <>
      <section className="mb-[85px]">
        <div className="px-4 pt-3 pb-5">
          <h4 className="text-semibold-14 text-[#434343]">
            표정 <span className="text-[#8655FF]">2</span> ･ 댓글
            <span className="text-[#8655FF]"> 1</span>
          </h4>
          <div className="flex gap-2 mt-4">
            <button>
              <div className="flex items-center justify-center w-10 h-10 bg-[#F3F3F3] border border-[#ddd] rounded-full">
                <Image src="/svg/ic-calendar-emoji.svg" alt="icon" width={22} height={22} />
              </div>
            </button>
            <ConfirmEmoji />
          </div>
        </div>
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
      </section>
      <section className="fixed w-[375px] bottom-0 flex items-center bg-white px-4 pt-5 pb-6 border-t border-[#EFEFEF]">
        <div className="w-8 h-8 rounded-full mr-[10px]">
          <Image src={UserImg} alt="user image" width={32} height={32} />
        </div>
        <input
          className="w-[90%] h-10 bg-[#F3F3F3] text-regular-14 pl-3 placeholder:text-[#82829B] rounded-lg"
          type="text"
          placeholder="스터디원에게 응원의 메세지 보내기"
        />
        <div className="absolute right-6">
          <Image src="/svg/ic-calendar-send.svg" alt="icon" width={20} height={20} />
        </div>
      </section>
    </>
  );
};

export default ConfirmComment;
