import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from "react";

const App = () => {
  // bien nay dua vao react de quan ly
  const [todoList, setTodoList] = useState([
    {id:1, name: "Hieu dep trai", age: 25},
    {id:2, name: "Hieu ", age: 22},
    {id:3, name: "Hieu bui", age: 18}
  ]);
  //{key:value}
  const buihieu = "hieu dep trai vai lua";
  const age = 25;
  const data ={
    name: "Bùi Hiếu",
    hobbies: ["reading", "painting", "cooking"],
    address: {
      street: "Nhan Trach, Ha Dong",
      city: "hanoi",
      country: "VIETNAM"
    }
  }
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

  return (
    <div className="Todo-Container">
      <div className="todo-title">Todo List</div>
      <TodoNew
       // đặt tên như nào giá trị như vậy va cai duoi la dang truyen tham chieu thoi (nhu this trong c,java) thêm () dang sau moi la goi ham
       addNewTodo={addNewTodo}
      />
      <TodoData
      name = {buihieu}
      age = {age}
      data = {data}
      todoList = {todoList}
      />
      <div className='todo-image'>
      <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
