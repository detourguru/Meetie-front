import Filter from "@/components/common/Filter/Filter";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { CREATED_AT_OPTION_DATA, SORT_OPTION_DATA } from "@/constants/filter";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import type { UpdateFilterSelectedTypeHandlerType, FilterSelectedType } from "@/types/filter";
import type { GetStudyListResponseType } from "@/types/study";

interface StudyFilteredListProps {
  data: GetStudyListResponseType;
  filterOption: FilterSelectedType;
  handleClickTag: (tag?: string | undefined) => string[];
  updateFilterOption: UpdateFilterSelectedTypeHandlerType;
}

const StudyFilteredList = ({
  data,
  filterOption,
  handleClickTag,
  updateFilterOption,
}: StudyFilteredListProps) => {
  const TAGS_DATA = data.data
    ? Array.from(new Set(data.data.map((study) => study.tagList).flat()))
    : [];

  const { user, userId } = useUserInformationQuery();

  return (
    <div className="p-4 pb-[80px]">
      <div className="relative -mx-4 mb-4">
        <Filter>
          <Filter.FilterTag>
            <Filter.FilterTagSelect
              hashtag
              tags={TAGS_DATA}
              selected={filterOption.tags ?? []}
              handleClick={(tag: string) => updateFilterOption("tags", handleClickTag(tag))}
              handleClickTotal={() => updateFilterOption("tags", handleClickTag())}
            />
          </Filter.FilterTag>

          <Filter.FilterOption totalCount={data.data ? data.data.length : 0}>
            <Filter.FilterOptionSelect
              options={SORT_OPTION_DATA}
              name="sort"
              value={filterOption.sort}
              onChange={(e) => updateFilterOption("sort", e.target.value)}
            />

            <Filter.FilterOptionSelect
              options={CREATED_AT_OPTION_DATA}
              name="date"
              value={filterOption.date}
              onChange={(e) => updateFilterOption("date", e.target.value)}
            />
          </Filter.FilterOption>
        </Filter>
      </div>
      <div className="flex justify-between mb-[27px]">
        <h1 className="text-bold-18">
          {user.name}님과 비슷한 사용자가
          <br />
          방금 지원했어요
        </h1>
      </div>
      {/* TODO: data 없을때 보여줄 UI 필요 */}
      {data.data &&
        data.data.map((studyData) => (
          <StudyCard userId={userId} studyData={studyData} key={studyData.id} />
        ))}
    </div>
  );
};

export default StudyFilteredList;