export interface SelectOptionType {
  value: string;
  label: string;
}

export interface FilterSelectedType {
  search: string;
  tags: string[];
  sort: string;
  date: string;
  isRecruit?: boolean;
}

export type UpdateFilterSelectedTypeHandlerType = <Key extends keyof FilterSelectedType>(
  key: Key,
  value: FilterSelectedType[Key],
) => void;
