export type ButtonVariant = 'primary' | 'close';

export interface IButtonProps {
  variant: ButtonVariant;
  type?: 'submit';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
