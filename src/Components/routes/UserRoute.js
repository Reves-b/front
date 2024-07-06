import React from "react";
// import items from "antd/lib/list/Item";
import {Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";


const UserRoute = ({item, ...rest}) => {
    const{user} = useSelector((state) => ({...state}));

return (user && user.token ? 
 <Outlet/> 

: (<LoadingToRedirect/>)
)
}

export default UserRoute