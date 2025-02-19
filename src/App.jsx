import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from "react";
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {
  // bien nay dua vao react de quan ly
  const [todoList, setTodoList] = useState([
    // {id:1, name: "Hieu dep trai"},
    // {id:2, name: "Hieu "},
    // {id:3, name: "Hieu bui"}
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }

    // array.push
    setTodoList([...todoList, newTodo]); // cai nay can xem lai ...todoList là copy lại cái data của todolist
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);                              
  }
  return (
    <>
    <Header/>
    <div className="Todo-Container">
      <div className="todo-title">Todo List</div>
      <TodoNew
       // đặt tên như nào giá trị như vậy va cai duoi la dang truyen tham chieu thoi (nhu this trong c,java) thêm () dang sau moi la goi ham
       addNewTodo={addNewTodo}
      />
      {/* // toán tử điều kiện */}
      {todoList.length>0 ?
        <TodoData
        todoList = {todoList}
        deleteTodo={deleteTodo}
      />
      :
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
      }
    </div>
    <Footer/>
  </>
  )
}

export default App
