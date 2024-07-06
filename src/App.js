import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import { currentUser} from './functions/auth';
// import {
//   Routes, // instead of "Switch"
//   Route,
//   // Redirect
// } from "react-router-dom";


// import '~antd/dist/antd.less';

//Components
import Moves from './Components/Moves';
import Header from './Components/nav/Header';
// import AdminRoute from './Components/routes/AdminRoute';
// // import History from './Components/Pages/user/History'
// import CategoryCreate from './Components/Pages/admin/category/CategoryCreate';
// import CategoryUpdate from './Components/Pages/admin/category/CategoryUpdate';
// import SubCategoryCreate from './Components/Pages/admin/subCategory/SubCategoryCreate';
// import SubCategoryUpdate from './Components/Pages/admin/subCategory/subCategoryUpdate';
// import ProductCreate from './Components/Pages/admin/product/ProductCreate';







const App = () => {

  const dispatch = useDispatch();
 // to check forebase auth state
 
 useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(async(user) => {
  if(user){
    const idTokenResult = await user.getIdTokenResult();
console.log("user", user);
console.log(" user role: ", user.role);

    
currentUser(idTokenResult.token)
.then((res)=>{
    dispatch({
        type: "LOGGED_IN_USER",
        payload:{
            item: res.data.item,
            email: user.email,
            token: idTokenResult.token,
            role: res.data.role,
            _id: res.data._id
            },
    });
})
.catch(err => console.log(err));

  }
});

//cleanup
return () => unsubscribe();

 }, [dispatch]);
 
 
 
  return (
    <>
         <ToastContainer/>
          <Router>
     
     <Header/>
     <Moves/>

         

  </Router>   
   
   
    </>
  );
}

export default App;
