import * as React from 'react';
import { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import { toast} from "react-toastify";
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom'
import {  MailOutlined, GoogleOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { createOrUpdateUser } from '../../functions/auth';








const Login = () => {

    const navigate= useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const{user} = useSelector((state)=>({...state}));

    useEffect(()=>{
        if(user && user.token)
        navigate("/")
        }, [user]);

    let dispatch = useDispatch();

    const roleBasedRedirect = (res) => {
        if(res.data.role === 'admin') {
    navigate("/admin/dashboard");
    
        } else{
            navigate("/user/history")
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);
        // console.log("ËNV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL )
        // const config = {
            // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            // url: 'http://localhost:3000/register/complete',

            // handleCodeInApp: true,
        // };

        try{
const result = await auth.signInWithEmailAndPassword(email, password);
// console.log(result);
const { user } = result;
const idTokenResult = await user.getIdTokenResult();

createOrUpdateUser(idTokenResult.token)
.then(
(res) =>{
    dispatch({
        type: "LOGGED_IN_USER",
        payload:{
            name:res.data.name,
            email:res.data.email,
            token: idTokenResult.token,
            role: res.data.role,
            _id: res.data._id,
        },
    });

    roleBasedRedirect(res);
})

.catch(err => console.log(err));


// navigate("/currentUser");



        }catch(error){
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }       
    };



        const googleLogin = async() => {
            auth.signInWithPopup(googleAuthProvider)
            .then(async(result) => {
                const {user} = result;
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                .then(
                (res) =>{
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload:{
                            name:res.data.name,
                            email:res.data.email,
                            token: idTokenResult.token,
                            role: res.data.role,
                            _id: res.data._id,
                        },
                    });

                    roleBasedRedirect(res);
                } 
                )
                .catch(err => console.log(err));
                 
// navigate("/");
            
            
            
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
              });
            
            };



       

    





    const loginForm = () => (
    <form onSubmit={handleSubmit}>
<div className='form-group'>
        <input type="email"
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            autoFocus />
</div>
    <div className='form-group'>
<input type="password"
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
             />

    </div>
    <br/>
        <Button 
        onClick={handleSubmit}
        type = "primary" 
            className='mb-3'
            block
            // type="primary ghost"
            shape="round"
            icon={<MailOutlined/>}
            size="Large"
            disabled={!email || password.length < 6}

        >
                Login with Email/password
        </Button>


    </form>

);


    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                  {loading ? ( 
                    <h4 className='text-danger'>Loading...</h4>
                  ) : (
                  <h4>Login</h4> 
                  ) }  
                    {loginForm()}

     <Button 
        onClick={googleLogin}
        type = "danger" 
            className='mb-3'
            block
            // type="primary ghost"
            shape="round"
            icon={<GoogleOutlined/>}
            size="large"
          

            >Login with Google
        </Button> 


        <a href="/forgot/password" className='float-right text-danger'> 
         Forgot Password 
         </a>
                </div>
            </div>
        </div>
    );
};


export default Login;