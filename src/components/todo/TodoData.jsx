// props là properties và là 1 biến object khi muốn truy xuất dlieu can phai theo cú pháp : props.tenthuotinh
// props là 12 object 
const TodoData =(props) => {
    const {name,age,data}=props;
    // hoặc viết như này cũng đc
    //const name = props.name;
    // const age = props.age;
    // const data = props.data;
    
    console.log(">> check props: ",props);
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning react</div>
            <div>watch video</div>
        </div>
    )
}

export default TodoData;