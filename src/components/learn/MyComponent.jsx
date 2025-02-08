//JSX
// Fragment
import './style.css';

const MyComponent = () => {
  return (
    <>
      <h1>Hello world & Bùi Hiếu</h1>
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