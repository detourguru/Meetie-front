import Link from "next/link";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

interface FooterBtnProps {
  joinMemberCount: number;
  recruitMemberCount: number;
}

const FooterBtn = ({ joinMemberCount, recruitMemberCount }: FooterBtnProps) => {
  return (
    <div className="fixed bottom-0 bg-white px-4 py-6 flex gap-5 items-center border-t border-[#dddddd]">
      <div className="flex flex-col items-center">
        <p className="text-medium-12 text-blue-300">참여가능인원</p>
        <p className="text-medium-18">
          <span className="text-primary-500">{joinMemberCount}명</span> /{" "}
          <span className="text-[#707070]">{recruitMemberCount}명</span>
        </p>
      </div>
      {/* // 테스트용 */}
      <Link href={PATH.STUDY_REQUEST(1)} scroll={false}>
        <Button variant="disabled" size="md">
          <p className="text-bold-16 text-white">아직 대기 인원이 없습니다</p>
        </Button>
      </Link>
    </div>
  );
};

export default FooterBtn;
