import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.contex';
import { Spin } from 'antd';

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext)

  useEffect(() => {

    fetchUserInfo();
  }, [])
  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
      // console.log("check user data",res.data);
    }
    setIsAppLoading(false)
  }
  return (
    <>
      {isAppLoading === true ?
        <div style={{
          // position: "fixed",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%,-50%)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
        >
          <Spin />
        </div>
        :
        <>
          <Header />
          {/* Nested Routes với outlet */}
          <Outlet />
          <Footer /></>
      }


    </>
  )
}

export default App
