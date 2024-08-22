import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";

interface FilterSheetProps {
  isOpen: boolean;
  onInteractOutside?: () => void;
}

const FilterSheet = ({ isOpen, onInteractOutside }: FilterSheetProps) => {
  return (
    <>
      <Sheet open={isOpen}>
        <SheetContent
          className="rounded-tl-lg rounded-tr-lg pb-8"
          onInteractOutside={() => {
            onInteractOutside && onInteractOutside();
          }}
        >
          <SheetHeader className="items-center justify-center pt-[14px] pb-[32px] ">
            <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
          </SheetHeader>
          <div className="px-5">
            <h2 className="text-semibold-18">필터</h2>
            <p className="text-regular-12 text-gray-250">
              상세한 필터로 원하는 스터디를 찾아보세요!
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label htmlFor="manufacturer" className="text-stone-600 text-bold-16">
                  검색어
                </label>
                <input
                  type="manufacturer"
                  id="manufacturer"
                  placeholder="검색어를 입력해주세요"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date" className="text-stone-600 text-bold-16">
                  스터디 시작 일자
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="status" className="text-stone-600 text-bold-16">
                  카테고리
                </label>
                <select
                  id="status"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>개발</option>
                  <option>디자인</option>
                  <option>UIUX</option>
                </select>
              </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                초기화
              </button>
              <button className="active:scale-95 rounded-lg bg-primary-500 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                적용
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default FilterSheet;
