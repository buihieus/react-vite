import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined, HomeOutlined, BookOutlined, LoginOutlined, LogoutOutlined, DoubleRightOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.contex';
const Header = () => {
  const [current, setCurrent] = useState('mail');

  const {user} = useContext(AuthContext)
  console.log ("check data :",user)

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
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
    {
      label: 'Setting',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/register"}>Register</Link>,
          key: 'users',
          icon: <DoubleRightOutlined />
        },
        {
          label: <Link to={"/login"}>Login</Link>,
          key: 'users',
          icon: <LoginOutlined />
        },
        {
          label: <Link to={"/logout"}>Logout</Link>,
          key: 'users',
          icon: <LogoutOutlined />
        },
      ]
    }
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