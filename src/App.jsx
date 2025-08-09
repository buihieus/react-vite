import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const ParentComponent = (props) => {
  console.log("check props parent", props)
  return (
    <>

      <div>parent component</div>
      {props.children}
    </>
  )
}

const ChildComponent = (props) => {
  return (
    <div>child component</div>
  )
}

const App = () => {

  return (
    <>
      {/* <ParentComponent/> */}
      <ParentComponent>
        <ChildComponent/>
      </ParentComponent>
      <Header />
      {/* Nested Routes với outlet */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
