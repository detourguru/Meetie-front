import Image from "next/image";

function StudyCard() {
  return (
    <div className="mb-4 max-w-full border-2 border-[#F5F5F5] block px-4 py-5 bg-white rounded-lg">
      <div className="flex justify-between">
        <span className="text-regular-12 mb-2">개발</span>
        <Image src="/svg/ic-bookmark.svg" alt="icon" width={24} height={24} />
      </div>
      <h2 className="text-bold-14 text-gray-500 mb-3">자바 중급 스터디 모집</h2>
      <div className="mb-8">
        {/* TODO: 공통 컴포넌트로 변경예정 */}
        <span className="bg-[#EBE9F5] text-[#41364A] text-medium-12 me-2 px-2.5 py-0.5 rounded">
          북 스터디
        </span>
        <span className="bg-[#EBE9F5] text-[#41364A] text-medium-12 me-2 px-2.5 py-0.5 rounded">
          Javascript
        </span>
        <span className="bg-[#EBE9F5] text-[#41364A] text-medium-12 me-2 px-2.5 py-0.5 rounded">
          백엔드 개발자
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-[12px] text-primary-500">D-13</span>
        <div className="flex justify-between">
          <div>
            <Image src="/svg/ic-calandar.svg" alt="icon" width={15} height={15} />
          </div>
          <span className="ml-1 text-regular-12 text-gray-400">
            2024.05.29 (토) - 2024.06.29 (금)
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            <Image src="/svg/ic-eye.svg" alt="icon" width={14} height={14} />
          </div>
          <span className="ml-1 text-regular-12 text-gray-200">823</span>
        </div>
      </div>
    </div>
  );
}
export default StudyCard;
