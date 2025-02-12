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
  const addNewTodo = (name) => {
    // dấu backtick ``
    alert (`call me ${name}`); 
  }
  // addNewTodo();
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

      />
      <div className='todo-image'>
      <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
