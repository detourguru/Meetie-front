import Avatar from "@/components/common/Avatar/Avatar";
import Tag from "@/components/common/Tag/Tag";

interface StudyRequestCardProps {
  date: string;
}

const StudyRequestCard = ({ date }: StudyRequestCardProps) => {
  return (
    <div className="mt-[28px] flex flex-col gap-[18px] mx-4">
      <p className="text-medium-14 text-gray-450">{date}</p>
      <div className="border border-[#e9e9e9] py-5 px-3 rounded-lg">
        {/* todo : 클릭시 오픈 프로필 페이지로 이동 */}
        <div className="flex justify-between">
          <div className="flex items-center gap-[10px]">
            <Avatar src="/img/img-profile-example.png" />
            <div>
              <h2 className="text-semibold-16">제이크</h2>
              <h3 className="text-medium-14 text-gray-250">기획자</h3>
              <p className="text-medium-12 text-gray-250">
                <span className="mr-[14px] after:h-[10px] after:w-[1px] after:bg-gray-250 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]">
                  스터디 <span className="text-[#7876e3]">132회</span>
                </span>
                <span>
                  출석률 <span className="text-[#7876e3]">108%</span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 h-full">
            <button className="rounded-2xl bg-[#f1f1f1] w-[46px] h-[30px]">
              <p className="text-medium-14 text-gray-450">거절</p>
            </button>
            <button className="rounded-2xl bg-primary-400 w-[46px] h-[30px]">
              <p className="text-medium-14 text-white">수락</p>
            </button>
          </div>
        </div>
        <p className="mt-[10px] text-regular-14 text-gray-450">
          안녕하세요, 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고
          싶습니다 화이팅🔥
        </p>
        <div className="flex gap-[10px] mt-3">
          <Tag text="손이 빠름" />
          <Tag text="열정적" />
          <Tag text="동기부여가 필요한" />
        </div>
      </div>
    </div>
  );
};

export default StudyRequestCard;
