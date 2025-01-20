import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "./Utils/userSlice";
import { Logo_URL, Supported_lang } from "./Utils/constants";
import { toggleGptShow } from "./Utils/gptSlice";
import { changeLang } from "./Utils/configSlice";

const Header = () => {
  const showGPTSEarch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleLang = (e) => {
    console.log(e.target.value);
    dispatch(changeLang(e.target.value));
  };
  const handleGTPToggle = () => {
    dispatch(toggleGptShow());
  };
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
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 md:mx-0 mx-auto" src={Logo_URL} alt="logo" />
      {user && (
        <div className="flex p-4 justify-between">
          {showGPTSEarch && (
            <select
              className="m-2 p-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLang}
            >
              {Supported_lang.map((e) => (
                <option key={e.identifier} value={e.identifier}>
                  {e.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-500 rounded-lg text-white"
            onClick={handleGTPToggle}
          >
            {showGPTSEarch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="userIcon"
          ></img>
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
