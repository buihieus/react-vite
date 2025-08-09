import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, message } from 'antd';
import { UserOutlined, HomeOutlined, BookOutlined, LoginOutlined, LogoutOutlined, DoubleRightOutlined, SettingOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.contex';
import { logoutAPI } from '../../services/api.service';
const Header = () => {
  const [current, setCurrent] = useState('mail');

  const { user, setUser } = useContext(AuthContext)
  // console.log("check data :", user)
 const navigate = useNavigate();
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  const handleLogout = async () => {
    const res = await logoutAPI();
    if (res.data) {
      // clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
      })
      message.success("Logout thanh cong");

      // redirect to home
      navigate("/")
    }
  }
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/user"}>User</Link>,
      key: 'users',
      icon: <UserOutlined />
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: 'books',
      icon: <BookOutlined />,
    },
    ...(!user.id ? [{
      label: <Link to={"/login"}>Đăng nhập</Link>,
      key: 'login',
      icon: <LoginOutlined />,
    }] : []),

    ...(user.id ? [{
      label: `Welcome ${user.fullName}`,
      key: 'setting',
      icon: <AliwangwangOutlined />,
      children: [
        {
          label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
          key: 'logout',
        },
      ],
    }] : []),

    // {
    //   label: `welcome ${user.fullName}`,
    //   key: 'SubMenu',
    //   icon: <SettingOutlined />,
    //   children: [
    //     {
    //       label: <Link to={"/register"}>Register</Link>,
    //       key: 'users',
    //       icon: <DoubleRightOutlined />
    //     },
    //     {
    //       label: <Link to={"/logout"}>Logout</Link>,
    //       key: 'users',
    //       icon: <LogoutOutlined />
    //     },
    //   ]
    // }
  ];
  //anchor
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items} />
  )
}

export default Header;