import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
const App = () => {
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
  return (
    <div className="Todo-Container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
      name = {buihieu}
      age = {age}
      data = {data}
      />
      <div className='todo-image'>
      <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
