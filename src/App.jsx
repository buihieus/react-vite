import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  
  return (
    <>
    <Header/>
    {/* Nested Routes với outlet */}
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App
