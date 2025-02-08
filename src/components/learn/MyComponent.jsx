//JSX
// Fragment
import './style.css';

const MyComponent = () => {
  //biến số với jsx
  // const hieu = "dep trai"; // string
  // const hieu = "25"; // number
  // const hieu = true; // boolean
  // const hieu = null; // null
  // const hieu = undefined; // undefined
  const hieu = [1,2,3];
  // const hieu = {name: "Bùi Hiếu",age : 21};
  return (
    <>
      <h1>Hello world & {JSON.stringify(hieu)} </h1> 
      {/* cai nay dung de convert chuỗi và object sang string */}
      <div>Bùi Hiếu update</div>
      <div className="test">test</div>
    </>
    // hoac <>  </>
  );
};

const fakeComponent = () => {
  return <div>Bùi Hiếu update</div>;
};

export default MyComponent;
// dùng để import duy nhất 1 hàm MyComponent