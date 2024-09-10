import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import googleLogo from "../assets/google-logo.svg"


const Login = () => {
    const{login, loginwithGoogle} = useContext(AuthContext);
    const [error, serError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("login successful")
            navigate(from,{replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            serError(errorMessage)
          });
       
        
    }

    //signup using google account
    const handleRegister = () =>{
            loginwithGoogle().then((result)=>{
                const user=result.user;
                alert("Sign-up successfully")
                navigate(from, {replace: true})
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                serError(errorMessage)
                // ..
              });
    }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
        BOOKIFY  
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login into your Account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                {error ? <p  className='text-red-700'>"Email or Pass incorrect is not correct": </p>: ""}
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account? <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</Link>
                </p>
            </form>
        </div>
        <hr/>
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
            <button className='block' onClick={handleRegister}><img src={googleLogo} className='w-12 h-12 inline-block'/>login with Google</button>
        </div>
    </div>
</div>
  )
}

export default Login