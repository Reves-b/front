import * as React from 'react'
import {
    Routes, // instead of "Switch"
    Route,
    // Redirect
} from "react-router-dom";



///components
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/booking/Booking";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import RegisterComplete from '../pages/auth/RegisterComplete';
import Dashboard from '../pages/username/Dashboard';
// import Logout from './Pages/username/Logout';
import ForgotPassword from '../pages/auth/ForgetPassword';
import History from "../pages/user/History";
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';

import Password from '../pages/user/Password';
import Wishlist from '../pages/user/Wishlist';

import AdminDashboard from '../pages/admin/AdminDashboard';
// import AllAbouts from "../../../pages/aboutUs/AllAbouts"
import ContactUs from "../pages/ContactUs" 
import CategoryCreate from '../pages/admin/category/CategoryCreate';
import CategoryUpdate from '../pages/admin/category/CategoryUpdate';
import SubCategoryCreate from '../pages/admin/subCategory/SubCategoryCreate';
import SubCategoryUpdate from '../pages/admin/subCategory/subCategoryUpdate';
import ProductCreate from "../pages/admin/product/ProductCreate";
// import AllProducts from "../../../Pages/product/AllProducts";
// import ProductUpdate from "./Pages/product/ProductUpdate";
// import Product from "./pages/Product";



const Moves = () => {
    return (
        <>

            <Routes>

{/* regular paths */}

                <Route exact path='/' element={<Home />}/>
                <Route exact path='/contactus' element={<ContactUs />}/>
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/booking' element={<Booking />} />
                <Route exact path='/register/complete' element={<RegisterComplete/>} />
                <Route exact path='/username/dashboard' element={<Dashboard/>} />
                <Route exact path='/forgot/password' element={<ForgotPassword/>} />
                <Route exact path='/aboutus' element={<About/>}/>


 
            {/* protected paths */}


             <Route exact path ='/user/History' element={<UserRoute/>}>          
            <Route exact path ='/user/History' element={<History/>}/>          
            </Route> 

            <Route exact path='/user/Password' element={<UserRoute/>}>
            <Route exact path ='/user/Password' element={<Password/>}/>          
            </Route> 

            <Route exact path='/user/Wishlist' element={<UserRoute/>}>
            <Route exact path ='/user/Wishlist' element={<Wishlist/>}/>          
            </Route> 

            <Route exact path='/admin/dashboard'element={<AdminRoute/>}>
            <Route exact path ='/admin/dashboard' element={<AdminDashboard/>}/>          
            </Route>

            <Route exact path='/admin/category' element={<AdminRoute/>}>
            <Route exact path ='/admin/category' element={<CategoryCreate/>}/>          
            </Route> 

            <Route exact path='/admin/category' element={<AdminRoute/>}>
            <Route exact path ='/admin/category/:slug' element={<CategoryUpdate/>}/>          
            </Route> 
            <Route exact path='/admin/subCategory' element={<AdminRoute/>}>
            <Route exact path ='/admin/subCategory' element={<SubCategoryCreate/>}/>          
            </Route> 

            <Route exact path='/admin/subCategory' element={<AdminRoute/>}>
            <Route exact path ='/admin/subCategory/:slug' element={<SubCategoryUpdate/>}/>          
            </Route>
            




            <Route exact path='/admin/product' element={<AdminRoute/>}>
            <Route exact path ='/admin/product' element={<ProductCreate/>}/>          
            </Route>

            {/* <Route exact path='/admin/aboutus' element={<AdminRoute/>}> */}
            {/* <Route exact path ='/admin/aboutus' element={<AllAbouts/>}/>           */}
            {/* </Route> */}

           

            </Routes>
        </>
    )
}

export default Moves;
