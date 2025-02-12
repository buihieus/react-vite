// props là properties và là 1 biến object khi muốn truy xuất dlieu can phai theo cú pháp : props.tenthuotinh
// props là 12 object 
const TodoData =(props) => {
    // const {name,age,data}=props;
    console.log(">> check props: ",props);
    return (
        <div className="todo-data">
            <div>My name is {props.name}</div>
            <div>Learning react</div>
            <div>watch video</div>
        </div>
    )
}

export default TodoData;