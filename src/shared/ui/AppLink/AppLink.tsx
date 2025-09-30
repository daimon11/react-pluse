import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: string,
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={
        classNames(
          style.applink,
          {},
          [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;