import React, { Suspense, useCallback, useContext, useState } from 'react';
import Counter from "./components/Counter";
import './styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { MainAsync } from './pages/Main/Main.async';
import { AboutAsync } from './pages/About/About.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;

    return (
        <div
            className={classNames('app', {}, [theme])}>
            <button
                onClick={toggleTheme}
            >Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        path='/'
                        element={<MainAsync />} />
                    <Route
                        path='about'
                        element={<AboutAsync />} />
                </Routes>
            </Suspense>
            {/* <Counter /> */}
        </div>
    );
};

export default App;
