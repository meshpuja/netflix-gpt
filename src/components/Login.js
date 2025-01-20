import React, { useRef, useState } from "react";
import Header from "./Header";
import checkFormValidation from "./Utils/util";
import { auth } from "./Utils/firebase";
import { updateProfile } from "firebase/auth";
import { adduser } from "./Utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { BG_URL, Photo_URL } from "./Utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [toggleSignInBtn, settoggleSignInBtn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignIn = () => {
    settoggleSignInBtn(!toggleSignInBtn);
  };
  const handleBtnClick = () => {
    const errorMessage = checkFormValidation(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMessage);
    if (errorMessage) return;
    if (!toggleSignInBtn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: { Photo_URL },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              setErrorMsg(error.message);
              // An error occurred
              // ...
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={BG_URL} alt="bg" />
      </div>
      <form
        className="w-full md:w-3/12 absolute bg-black opacity-100 p-12 my-36 mx-auto right-0 left-0 rounded-md text-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl py-4">
          {toggleSignInBtn ? "Sign In" : "Sign Up"}
        </h2>
        {!toggleSignInBtn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" bg-gray-700 p-2  my-2 w-full "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-2  my-2 w-full
           "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" bg-gray-700 p-2  my-2 w-full "
        />
        <p className="text-red-500">{errorMsg}</p>
        <button
          className="bg-red-700 p-4 my-4 mx-1 w-full rounded-md "
          onClick={handleBtnClick}
        >
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
