import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ThemeSwitch.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from '../Button/Button';

interface ThemeSwitchProps {
  className?: string,
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(
        style.themeSwitch,
        {},
        [className])}
        theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  );
};

export default ThemeSwitch;