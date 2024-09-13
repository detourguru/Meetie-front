import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";
import StudyItem from "@/components/StudyRoom/StudyListSheet/StudyItem";

import type { CommonSheetProps } from "@/types/common";

interface StudyListSheetProps extends CommonSheetProps {
  studyList: string[];
  studyRoomId: string;
}

const StudyListSheet = ({
  isOpen,
  onInteractOutside,
  studyList,
  studyRoomId,
}: StudyListSheetProps) => {
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-[14px] pb-5 ">
          <SheetTitle>
            <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
          </SheetTitle>
        </SheetHeader>
        <div className="px-5">
          <h2 className="text-medium-20 text-center">
            진행 중인 스터디 <span className="text-[#697dd4]">{studyList.length}</span>
          </h2>

          <ul className="rounded-lg bg-white border border-[#dfdfdf] mt-6">
            {studyList.map((studyId) => (
              <StudyItem key={studyId} studyId={studyId} studyRoomId={studyRoomId} />
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default StudyListSheet;
