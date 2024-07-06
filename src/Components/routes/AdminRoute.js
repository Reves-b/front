import React, {useEffect, useState} from "react";
// import items from "antd/lib/list/Item";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../../functions/auth";

const AdminRoute = ({item, ...rest}) => {
    const{user} = useSelector((state) => ({...state}));
    const[ok, setOk] = useState(false);

useEffect(() => {
if (user && user.token){
    currentAdmin(user.token)
    .then(res =>{
        console.log('current admin RES', res)
        setOk(true)
    })
    .catch(err=>{
        console.log('ADMIN ROUTE ERR', err);
        setOk(false);
    })
}


}, [user]);





return (ok ? (
//  <Route {...rest} render ={() => children}/> 
<Outlet/> 
) : (
<LoadingToRedirect/>

)
)
}

export default AdminRoute;