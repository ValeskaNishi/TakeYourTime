import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'


function Menu() {
  return (
    <div ontouchstart="" class="divpai">
      <div class="button3">
        <a href="/">Home</a>
    </div>
      <div class="button1">
        <a href="/todo">To Do List</a>
      </div>
      <div class="button2">
        <a href="/pomodoro">Pomodoro Timer</a>
      </div>
    </div>
  );
}

export default Menu;