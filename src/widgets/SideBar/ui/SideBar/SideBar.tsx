import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './SideBar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SideBarProps {
    className?: string,
}

const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    console.log('collapsed', collapsed);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}
        >
            <button
                onClick={onToggle}
            >toggle</button>

            <div
            className={style.switchers}
            >
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default SideBar;