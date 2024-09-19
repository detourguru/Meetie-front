import Filter from "@/components/common/Filter/Filter";
import MemberList from "@/components/Study/Member/MemberList";

import { JOB_OPTION_DATA, STYLES_OPTION_DATA } from "@/constants/member";

import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/filter";
import type { GetAllUserInfoResponseType } from "@/types/userInfo";

interface MemberFilteredListProps {
  data: GetAllUserInfoResponseType;
  filterOption: FilterSelectedType;
  updateFilterOption: UpdateFilterSelectedTypeHandlerType;
}

const MemberFilteredList = ({
  data,
  filterOption,
  updateFilterOption,
}: MemberFilteredListProps) => {
  return (
    <>
      <div className="p-4 -mx-3">
        <Filter>
          <Filter.FilterOption totalCount={data.data ? data.data.length : 0}>
            <Filter.FilterOptionSelect
              options={STYLES_OPTION_DATA}
              name="styles"
              value={filterOption.styles}
              onChange={(e) => updateFilterOption("styles", e.target.value)}
            />
            <Filter.FilterOptionSelect
              options={JOB_OPTION_DATA}
              name="position"
              value={filterOption.position}
              onChange={(e) => updateFilterOption("position", e.target.value)}
            />
          </Filter.FilterOption>
        </Filter>
      </div>
      <div className="p-4 mb-10 h-full bg-[#F5F5FF]">
        <MemberList />
      </div>
    </>
  );
};

export default MemberFilteredList;
