import LittleTime2 from "../img/ToDoList.png"
import TodoWrapper from './TodoWrapper';
import Menu from '../menu.js'

function TodoPage(){
    return(
        <div>
            <Menu/>
            <h1>To Do List</h1>
            <p className='vamosIniciar'> Vamos iniciar o dia com quais tarefas?</p>
            <img className="imgTodo" src={LittleTime2} alt="imagem toDolist" />
            <TodoWrapper/>
        </div>
    )
}

export default TodoPage;