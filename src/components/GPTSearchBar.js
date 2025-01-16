import React from "react";
import { useSelector } from "react-redux";
import language from "./Utils/language";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].placeHolder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-500 text-white rounded-lg">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
