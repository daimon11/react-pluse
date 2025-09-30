import React, { Suspense, useCallback, useContext, useState } from 'react';
import 'app/styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



const App = () => {
    const { theme} = useTheme();

    return (
        <div
            className={classNames('app', {}, [theme])}>

            <Navbar />
            <AppRouter/>

        </div>
    );
};

export default App;
