import Image from "next/image";

import React, { useState } from "react";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import Tag from "@/components/common/Tag/Tag";

import type { CommonSheetProps } from "@/types/common";
import type { UpdateFilterSelectedTypeHandlerType } from "@/types/community";

interface SearchSheetProps extends CommonSheetProps {
  searchValue: string;
  handleClose: () => void;
  updateFilterOption: UpdateFilterSelectedTypeHandlerType;
}

const SearchSheet = ({
  isOpen,
  searchValue,
  handleClose,
  updateFilterOption,
}: SearchSheetProps) => {
  const [search, setSearch] = useState(searchValue);

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    updateFilterOption("search", search);
    handleClose();
  };

  return (
    <Sheet open={isOpen}>
      <SheetContent className="pb-8 h-full overflow-scroll hidden-scrollbar w-[375px]">
        <SheetHeader className="h-10 flex justify-center px-3" onClick={handleClose}>
          <CustomImage
            src="/svg/ic-header-left-arrow.svg"
            alt="leftButtonIcon"
            className="w-[24px] h-[24px]"
          />
        </SheetHeader>

        {/* TODO: 공통 컴포넌트로 변경 */}
        <div className="px-4 pt-4 pb-1 sticky top-0 bg-white z-20">
          <form className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3" onSubmit={handleSearch}>
            <input
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
              placeholder="관심있는 주제를 검색해보세요"
            />
            <Image
              src="/svg/ic-community-search.svg"
              alt="search"
              width={24}
              height={24}
              onClick={() => handleSearch()}
            />
          </form>
        </div>

        <div className="flex flex-col mx-4 gap-2 mt-8">
          <h5>최근 검색어</h5>
          <div className="flex gap-3 flex-wrap">
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
            <Tag text="test" handleDeleteTag={() => console.log("h")} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
