const TodoData =(props) => {
    const {todoList,deleteTodo}=props;
    const handleClick = (id) => {
        deleteTodo(id)
    }
    return (
        <div className="todo-data">
                {todoList.map((item,index)=>{
                    console.log(">> check item: ",item,index);
                    return(
                    <div className={`todo-item` } key = {index.id}>
                        <div>{item.name}</div>
                        
                        <button onClick={() => handleClick(item.id)} style={{cursor: "pointer"}}>Delete</button>
                    </div>)

                })}
        </div>
    )
}

export default TodoData;