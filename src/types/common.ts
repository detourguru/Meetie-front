export interface CommonSheetProps {
  isOpen: boolean;
  onInteractOutside?: () => void;
}

export interface CommonResponseType {
  message: string;
  status: number;
}

export interface ParamIdType {
  params: {
    id: string;
  };
}

export interface DateType {
  year: number;
  month: number;
  date: number;
  day: string;
}

export interface CalendarDateType {
  selectedDate: DateType;
  handleSelectedDate: (date: DateType) => void;
}
