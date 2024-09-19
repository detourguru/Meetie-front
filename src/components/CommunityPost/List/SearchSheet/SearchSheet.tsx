import Image from "next/image";

import React, { useEffect, useState } from "react";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import Tag from "@/components/common/Tag/Tag";

import { getLocalStorage, setLocalStorage } from "@/utils/storage";

import type { CommonSheetProps } from "@/types/common";
import type { UpdateFilterSelectedTypeHandlerType } from "@/types/filter";

interface SearchSheetProps extends CommonSheetProps {
  searchValue: string;
  handleClose: () => void;
  updateFilterOption: UpdateFilterSelectedTypeHandlerType;
  subject?: string;
}

const SearchSheet = ({
  isOpen,
  searchValue,
  handleClose,
  updateFilterOption,
  subject,
}: SearchSheetProps) => {
  const savedSearchKeyWords = getLocalStorage<string[]>("savedSearchKeyWords", []);

  const [search, setSearch] = useState(searchValue);
  const [searchKeywords, setSearchKeywords] = useState(savedSearchKeyWords);

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement | HTMLImageElement>) => {
    e?.preventDefault();

    const newsearchKeyword = [search].concat(searchKeywords);
    setSearchKeywords(newsearchKeyword.filter((t, index) => newsearchKeyword.indexOf(t) === index));

    handleSearch();
  };

  const handleSearch = (keyword?: string) => {
    if (keyword === "") {
      setSearch(keyword);
    }
    updateFilterOption("search", keyword ?? search);
    handleClose();
  };

  const handleClickSearchTag = (keyword: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();

      setSearchKeywords(searchKeywords.filter((t) => keyword !== t));
    }
  };

  useEffect(() => {
    setLocalStorage<string[]>("savedSearchKeyWords", searchKeywords);
  }, [searchKeywords]);

  return (
    <Sheet open={isOpen}>
      <SheetContent className="pb-8 h-full overflow-scroll hidden-scrollbar w-[375px]">
        <SheetHeader className="h-10 flex justify-center px-3">
          <CustomImage
            src="/svg/ic-header-left-arrow.svg"
            alt="leftButtonIcon"
            className="w-[24px] h-[24px]"
            handleClick={() => handleSearch("")}
          />
        </SheetHeader>

        {/* TODO: 공통 컴포넌트로 변경 */}
        <div className="px-4 pt-4 pb-1 sticky top-0 bg-white z-20">
          <form className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3" onSubmit={handleSubmit}>
            <input
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
              placeholder={`관심있는 ${subject !== undefined ? subject : "주제"}를 검색해보세요`}
            />
            <Image
              src="/svg/ic-community-search.svg"
              alt="search"
              width={24}
              height={24}
              onClick={handleSubmit}
            />
          </form>
        </div>

        <div className="flex flex-col mx-4 gap-2 mt-8">
          <h5>최근 검색어</h5>
          <div className="flex gap-3 flex-wrap">
            {searchKeywords.map((keyword, index) => (
              <Tag
                key={`search_keyword_${index}`}
                id={keyword}
                text={keyword}
                handleDeleteTag={(e) => handleClickSearchTag(keyword, e)}
                onClick={(e) => setSearch(e.currentTarget.id)}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
