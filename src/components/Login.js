import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [toggleSignInBtn, settoggleSignInBtn] = useState(true);
  const toggleSignIn = () => {
    settoggleSignInBtn(!toggleSignInBtn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute bg-black opacity-100 p-12 my-36 mx-auto right-0 left-0 rounded-md text-white ">
        <h2 className="text-3xl py-4">
          {toggleSignInBtn ? "Sign In" : "Sign Up"}
        </h2>
        {!toggleSignInBtn && (
          <input
            type="text"
            placeholder="Full Name"
            className=" bg-gray-700 p-2  my-2 w-full "
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-2  my-2 w-full
           "
        />

        <input
          type="password"
          placeholder="Password"
          className=" bg-gray-700 p-2  my-2 w-full "
        />
        <button className="bg-red-700 p-4 my-4 mx-1 w-full rounded-md ">
          {toggleSignInBtn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignIn}>
          {toggleSignInBtn
            ? "New to Netflix? Sign Up now"
            : "Already Registered? Sign In now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
