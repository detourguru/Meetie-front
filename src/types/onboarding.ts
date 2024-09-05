export interface OnboardingFormType {
  position: string;
  purposes: string[];
  styles: string[];
  period: string;
}

export interface OnboardingStepProps {
  clicked: string | string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface OnboardingTitleDataType {
  title: string[];
  sub: string[];
}
