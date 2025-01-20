import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-6 md:py-4 md:px-12 text-lg rounded-lg hover:bg-opacity-80 md:my-0 my-2">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-4 px-12 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
