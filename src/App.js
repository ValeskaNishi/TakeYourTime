import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./componentes/Home"
import PomodoroWrapper from './componentes/Pomodoro/PomodoroWrapper';
import TodoPage from './componentes/TodoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/todo" element={<TodoPage/>} />
        <Route path="/pomodoro" element={<PomodoroWrapper/>} />
      </Routes>
    </BrowserRouter>
  );
}