import React from 'react';

import { IButtonProps } from './Button.props';

export const Button: React.FC<IButtonProps> = ({
  type,
  disabled,
  children,
  ...props
}) => {
  const buttonClass = {
    primary: 'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded',
    close: 'bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded',
  };

  const disabledButtonClass = {
    primary: 'bg-purple-200 cursor-not-allowed opacity-50',
    close: 'bg-red-200 cursor-not-allowed opacity-50',
  };

  const buttonStyle = buttonClass[type];
  const disabledStyle = disabled ? disabledButtonClass[type] : '';

  return (
    <button
      className={`${buttonStyle} ${disabledStyle}`}
      disabled={disabled}
      onClick={disabled ? undefined : props.onClick}
    >
      {children}
    </button>
  );
};
