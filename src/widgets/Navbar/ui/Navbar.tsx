import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Navbar.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string,

}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div
      className={classNames(style.navbar)}
    >
      <div
        className={style.links}
      >
        <AppLink to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}>О Сайте</AppLink>

      </div>

    </div>
  )
}

export default Navbar;