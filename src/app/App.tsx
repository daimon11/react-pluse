import React, { Suspense, useCallback, useContext, useState } from 'react';
import 'app/styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Main } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';

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
                        element={<Main />} />
                    <Route
                        path='about'
                        element={<AboutPage />} />
                </Routes>
            </Suspense>
            {/* <Counter /> */}
        </div>
    );
};

export default App;
