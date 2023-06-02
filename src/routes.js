import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./componentes/Home";
import TodoWrapper from "./componentes/TodoWrapper";
import PomodoroWrapper from "./componentes/Pomodoro/PomodoroWrapper";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route component = {Home} path="/" exact/>
            <Route component = {TodoWrapper} path="/todo"/>
            <Route component = {PomodoroWrapper} path="/pomodoro"/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;
