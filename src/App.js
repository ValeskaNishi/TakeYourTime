import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./componentes/Home"
import TodoWrapper from './componentes/TodoWrapper'
import PomodoroWrapper from './componentes/Pomodoro/PomodoroWrapper';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/todo" element={<TodoWrapper/>} />
        <Route path="/pomodoro" element={<PomodoroWrapper/>} />
      </Routes>
    </BrowserRouter>
  );
}