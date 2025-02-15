import { useState } from "react";
const TodoNew =(props) => {
    // UseState hook
    // const valueInput = "hieu";
    const [valueInput,setValueInput] = useState("hieu");
    // hoặc viết như này const [valueInput,setValueInput] = React.useState("hieu");

    const {addNewTodo} = props;

    const handleClick = () => {
        addNewTodo(valueInput); 
        setValueInput("");
    }
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input type="text" 
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={
                {cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is : {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;