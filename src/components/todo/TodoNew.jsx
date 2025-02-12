const TodoNew =(props) => {
    console.log(">>> check point: ",props)
    const {addNewTodo} = props;
    // addNewTodo("Hieu");

    const handleClick = () => {
        alert("click me");
    }
    const handleOnChange = (name) => {
        console.log(">>> handleOnChange",name);
        // event.target là trỏ đến cái input ( dòng 14) .value là gtri của ô input
    }
    // const handleOnChange = (event) => {
    //     console.log(">>> handleOnChange",event.target.value);
    //     // event.target là trỏ đến cái input ( dòng 14) .value là gtri của ô input
    // }
    return (
        <div className='todo-new'>
            <input type="text" 
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={
                {cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;