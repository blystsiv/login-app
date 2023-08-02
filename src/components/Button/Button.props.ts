export type ButtonType = 'primary' | 'close';

export interface IButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
