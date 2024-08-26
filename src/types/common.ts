export interface CommonSheetProps {
  isOpen: boolean;
  onInteractOutside?: () => void;
}

export interface CommonResponseType {
  message: string;
  status: number;
}
