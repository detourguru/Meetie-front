import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/common/Tag/Tag";

import { PATH } from "@/constants/path";

const StudyCard = () => {
  return (
    <Link href={PATH.STUDY(1)}>
      <div className="mb-4 max-w-full px-4 py-5 rounded-lg bg-white border-2 border-gray-50">
        <div className="flex justify-between">
          <span className="text-regular-12 mb-2">개발</span>
          <Image src="/svg/ic-bookmark.svg" alt="icon" width={24} height={24} />
        </div>
        <h2 className="text-bold-14 text-gray-500 mb-3">자바 중급 스터디 모집</h2>
        <div className="flex gap-2 mb-8">
          <Tag text="북 스터디" isSmall />
          <Tag text="Javascript" isSmall />
          <Tag text="백엔드 개발자" isSmall />
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
    </Link>
  );
};
export default StudyCard;
