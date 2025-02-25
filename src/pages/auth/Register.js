import * as React from 'react';
import { useState, useEffect  } from 'react';
import { auth } from '../../firebase';
import { toast} from "react-toastify";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
const Register = () => {
    const navigate= useNavigate();

    const [email, setEmail] = useState("");

    const{user} = useSelector((state)=>({...state}));

    useEffect(()=>{
        if(user && user.token)
        navigate("/")
        }, [user]);




    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL )
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            // url: 'http://localhost:3000/register/complete',

            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(
            `Email is sent to ${email}. Click the link to complete your registration.` , 
            {autoClose : 2000,
            theme: 'colored'}
            );
        //save user email in local storage
        window.localStorage.setItem('emailForRegistration', email)
        //clear state

        setEmail("");

    };

    const registerForm = () => (
    <form onSubmit={handleSubmit}>

        <input type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            autoFocus />


        <button type="submit"
            className='btn btn-raised'>
            Register
        </button>


    </form>

);


    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}


export default Register;