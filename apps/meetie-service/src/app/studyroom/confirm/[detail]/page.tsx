import Header from "@/components/common/Header/Header";
import ConfirmComment from "@/components/StudyRoom/ConfirmComment/ConfirmComment";
import ConfirmEmoji from "@/components/StudyRoom/ConfirmEmoji/ConfirmEmoji";
import Image from "next/image";
import UserImg from "/public/img/img-user-profile.png";

export default function ConfirmDetail() {
  return (
    <>
      <Header>
        <Header.Title hasButton={true}>과제 인증</Header.Title>
        <Header.LeftButton />
      </Header>
      <section className="px-4 pt-14 pb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={UserImg} alt="user Imges" width={42} height={42} />
            <p className="text-bold-16">김서희</p>
          </div>
          <div className="flex items-center">
            <span className="text-regular-14 text-[#525257] mr-2">사진으로 인증됨</span>
            <Image src="/svg/ic-calendar-check-pri.svg" alt="icon" width={13} height={14} />
            <Image
              src="/svg/ic-calendar-more.svg"
              alt="icon"
              width={20}
              height={4}
              className="ml-4"
            />
          </div>
        </div>
      </section>
      <section className="relative px-5 py-[70px] bg-[#FAFAFA] border-t border-b border-[#E6E6E6]">
        <div className="absolute top-[-24px] w-[90%] flex justify-between items-center pl-5 pr-4 py-3 bg-[#F7F3FF] border border-[#CAB4FF] rounded-lg">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full">
              <Image src={UserImg} alt="user image" width={20} height={20} />
            </div>
            <div className="w-5 h-5 rounded-full ml-[-8px]">
              <Image src={UserImg} alt="user image" width={20} height={20} />
            </div>
            <span className="ml-2 text-medium-12 text-[#41364A]">2명이 읽었습니다.</span>
          </div>
          <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
        </div>
        <div className="text-regular-14 text-[#41364A]">
          <p>
            강의 듣기 끝! 실습 과정에서 어려움이 있었어요 🤔
            <br />
            피그마 링크 공유합니다 ~ 피드백 환영 :)
          </p>
          <br />
          <div className="w-[1024px] max-w-full h-[180px] bg-gray-100">image</div>
          <div className="h-[110px] flex mt-9 mb-10 border border-[#EBE9F5] bg-[#FAFAFA] rounded-lg overflow-hidden drop-shadow-md">
            <div className="relative">
              <div className="bg-gray-100 w-[110px] h-full"></div>
              <p className="absolute text-white top-1 left-1">서희의 피그마</p>
            </div>
            <div className="flex flex-col justify-between pl-6 py-5">
              <div>
                <p className="text-semibold-14">서희의 피그마에 초대합니다.</p>
                <span className="text-regular-12 text-[#82829B]">링크를 눌러보세요.</span>
              </div>
              <a className="text-[#5F5F5F] text-medium-12 underline">www.link.co.kr/figma</a>
            </div>
          </div>
        </div>
        <span className="absolute bottom-4 text-regular-12 text-[#636363]">
          오전 9:00 ･ 2024.6.4 ･ 14일차 과제
        </span>
      </section>
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
        <ConfirmComment />
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
}
