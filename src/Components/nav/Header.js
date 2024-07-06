import * as React from 'react';
import { useState } from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, 
  LogoutOutlined, 
  SettingOutlined,
  CalendarOutlined, 
  UserOutlined, 
  UserAddOutlined,
  PhoneFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../pages/username/Dashboard';
import { useNavigate, useHistory} from 'react-router-dom';


const { SubMenu, Item } = Menu;




const Header = () => {
  // let history = useHistory();


  const [current, setCurrent] = useState('home');
  // const[dashboard, setDashboard] = useState('');
  let dispatch = useDispatch();
  let {user} = useSelector((state) => ({...state}));
  console.log(user)
// console.log(user.role)
let navigate = useNavigate();

// let history = useHistory();

  const handleClick = (e) => {
    console.log('click', e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "LOGOUT",
      payload: null,
   
    });
   navigate("/login");
  //  history.push("/login");
  };




  return (


     
    
    <Menu           
    onClick={handleClick} selectedKeys={[current]} mode="horizontal"
    style={{backgroundColor: "#F92454"}}
         > 
    
      <Item 
      key="home" 
      icon={<AppstoreOutlined />}
      >
        <a href="/" >  Home </a>
      </Item>
         
      <Item key="aboutus" icon={<AppstoreOutlined />} >
        <a href="/aboutus" >
          About Us
          </a>
        </Item>
     
        <Item key="Contact" icon={<AppstoreOutlined />} >
        <a href="/contactus" >
          Contact Us
          </a>
        </Item>

        <Item key="Mobile" icon={<PhoneFilled />} className="float-right">
        <a href="/contactus" >
           9120818119
          </a>
        </Item>




        {!user && (
  <Item
        key="register"
        icon={<UserAddOutlined />}
        className="float-right">
        
        <Link to="/register" >register</Link>
      </Item>
       )} 
  
  {!user && (
      <Item
        key="login"
        icon={<UserOutlined />}
        className="float-right">
        <a href="/login" >
          Login
        </a>
      </Item>
       )} 




     
      {user && ( 
<SubMenu 
icon={<UserOutlined />} 
title={user.email && user.email.split('@')[0]} 
className="float-right"
>





{user && user.role === "subscriber" && (
  <Item>
    <Link to="/user/history">
       Dashboard
       </Link>
  </Item>
)}






{user && user.role === "admin" && (       
<Item>
        <a href="/admin/dashboard" >
         Reves Dashboard
          </a>
        </Item>
)} 

        <Item 
        icon={<LogoutOutlined />} 
        onClick={logout}> Logout
         
        </Item>

      </SubMenu>
      )}  




     
      

    </Menu>
  );

};

export default Header;







// <Item key="booking" icon={<CalendarOutlined />}>
//         <a href="/booking" >
//           Tailoring Booking
//         </a>
//       </Item>

//       <Item key="trend" icon={< AppstoreOutlined/>}>
//         <a href="/trend" >
//          Latest Trends
//         </a>
//       </Item>


    
 
