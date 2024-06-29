import React, { useState } from 'react';

import Logo from "./Media/KleanUp.png";
import Gmail from "./Media/gmail.png";
import Google from "./Media/google.png";
import Facebook from "./Media/facebook.png";
import AuthTemplate from "./AuthTemplate.jsx";
import { Link } from "react-router-dom";
import GoogleLoginButton from './GoogleLoginButton';

function HelloAdmin() {
  const myCustomColor = "#3DA5EC";

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful', response);
    // Handle user data or authentication token
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
  };


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Make API request to your backend for authentication
    const response = await fetch('https://klean-up-server.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      // Store the token securely, e.g., in localStorage
      localStorage.setItem('react-auth-key', token);
    }
  };

  return (
    <>
      <AuthTemplate />
      <div>
        <div className="absolute -top-0 lg:top-10 h-96 w-[120%] lg:w-[40%] mx-40 -left-[55%] lg:-left-24 p-16 rounded-3xl lg:rounded-md  ">
          <div className="z-50">
            <img className="h-12 w-24 object-contain -my-8" src={Logo} />
            <Link to="/signup">
              <button className="w-32 h-1/6 mx-6 bg-gray-300 font-semibold text-black  float-right -right-10 relative -mt-3 rounded-md p-2">
                Sign Up
              </button>
            </Link>
          </div>
          <div className=" flex-1 items-center relative my-20 bg-white border-gray-500 border-opacity-10 border-2 rounded-md h-[140%] w-[104%] p-8">
            <div className="flex-1 text-center top-5 relative items-center justify-center"></div>
            <div className="my-14 -mt-12">
              <br />
              <br />
              <label className="font-semibold">Username</label>
              <br />
              <input
                type="email"
                className="lg:p-4 p-2 border mt-2 focus:outline-none border-gray-400 rounded-lg w-[100%] bg-gray-50 placeholder:text-black"
                placeholder="piersmorgan@gmail.com"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <label className="font-semibold">Password</label>
              <br />
              <input
                type="password"
                className="lg:p-4 p-2 border mt-2 focus:outline-none border-gray-400 rounded-lg w-[100%] bg-gray-50 placeholder:text-black"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <sub className="font-normal">Forgot password?</sub>
              <br />
              <br />
              {/* <Link to="/LoginPage"> */}
                {" "}
                <button
                  className="w-[100%] h-1/6 mx-6 py-3 font-semibold text-white justify-center relative -left-6 rounded-md p-2"
                  style={{ backgroundColor: myCustomColor }}
                  onClick={handleLogin}
                >
                  Login
                </button>
              {/* </Link> */}
            </div>
            <div className="flex whitespace-nowrap w-96 lgh-0 h-28 lg:h-12 mt-20 lg:mt-0 lg:w-96 relative lg:flex-nowrap flex-wrap -left-8 lg:-left-24 lg:text-base text-sm">
            <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
            <Link to="/signup" className="">
              <button className=" w-36 text-xs flex  h-8 mx-6 bg-gray-300  text-black  float-right lg:-right-2 relative -mt-3 rounded-md p-2">
              <img className="w-4 mr-1" src={Facebook}/>
                Login with Facebook
              </button>
            </Link>
            <Link to="/signup" className="">
              <button className="w-32  flex text-xs h-8 mx-6 bg-gray-300  text-black  float-right right-9 lg:right-6 relative -mt-3 rounded-md p-2">
              <img className="w-4 mr-1" src={Gmail}/>
                Login with Gmail
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelloAdmin;
