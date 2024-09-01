"use client";

import Image from "@/components/common/Image/Image";
import HashTag from "@/components/Study/StudyRoomList/HashTag";

import type { SelectOptionType } from "@/types/filter";

interface FilterButtonPropsType {
  handleButtonClick?: () => void;
}

interface FilterProps extends React.PropsWithChildren {}

interface FilterTagProps extends React.PropsWithChildren {}

interface FilterTagSelectProps {
  tags: string[];
  selected: string[];
  close?: boolean;
  handleClickTotal?: () => void;
  handleClick: (tag: string) => void;
}

interface FilterOptionProps extends React.PropsWithChildren {
  totalCount: number;
  isPeople?: boolean;
}

interface FilterOptionSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionType[];
}

const Filter = ({ children }: FilterProps) => {
  return <div className="flex flex-col gap-5 px-4">{children}</div>;
};

const FilterTag = ({ children }: FilterTagProps) => {
  return <div className="flex justify-between">{children}</div>;
};

const FilterTagLeftButton = ({ handleButtonClick }: FilterButtonPropsType) => {
  return (
    <div className="m-1" onClick={handleButtonClick}>
      <Image src="/svg/ic-refresh.svg" alt="icon" className="w-[17px] h-[17px]" />
    </div>
  );
};

const FilterTagSelect = ({
  tags,
  selected,
  close,
  handleClick,
  handleClickTotal,
}: FilterTagSelectProps) => {
  const isSelectAll = selected.length === 0;

  const tagClassName = "border-gray-100 text-[#82829B]";
  const selectedTagClassName = "border-primary-500 text-primary-500";

  return (
    <div className="text-nowrap overflow-x-auto no-scrollbar">
      {handleClickTotal && (
        <HashTag
          className={isSelectAll ? selectedTagClassName : tagClassName}
          close={close}
          onClick={handleClickTotal}
        >
          전체
        </HashTag>
      )}
      {tags.map((tag, index) => (
        <HashTag
          key={`filter_${index}`}
          className={selected.includes(tag) || close ? selectedTagClassName : tagClassName}
          close={close}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </HashTag>
      ))}
    </div>
  );
};

const FilterTagRightButton = ({ handleButtonClick }: FilterButtonPropsType) => {
  return (
    <div className="m-1" onClick={handleButtonClick}>
      <Image src="/svg/ic-filter.svg" alt="icon" className="w-[19px] h-[19px]" />
    </div>
  );
};

const FilterOption = ({ totalCount, isPeople, children }: FilterOptionProps) => {
  return (
    <div className="flex justify-between">
      <span className="text-medium-12">
        총 {totalCount.toLocaleString()}
        {isPeople ? "명" : "건"}
      </span>
      <div className="flex gap-1">{children}</div>
    </div>
  );
};

const FilterOptionSelect = ({ options, ...props }: FilterOptionSelectProps) => {
  return (
    <select className="text-regular-12 text-end" {...props}>
      {options.map((option) => (
        <option key={`sort_${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Filter.FilterTag = FilterTag;
Filter.FilterTagLeftButton = FilterTagLeftButton;
Filter.FilterTagSelect = FilterTagSelect;
Filter.FilterTagRightButton = FilterTagRightButton;
Filter.FilterOption = FilterOption;
Filter.FilterOptionSelect = FilterOptionSelect;

export default Filter;
