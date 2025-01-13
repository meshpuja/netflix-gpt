import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "./Utils/userSlice";
import { Logo_URL } from "./Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeuser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={Logo_URL} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon"></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-lg text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
