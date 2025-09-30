import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton,
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    ...otherProps

  } = props;

  return (
    <button
      className={classNames(style.button, {}, [style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;