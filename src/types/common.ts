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
