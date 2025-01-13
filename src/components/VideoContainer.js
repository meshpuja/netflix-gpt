import React from "react";

import { useSelector } from "react-redux";
import useTrailerVideo from "./hooks/useTrailerVideo";

const VideoContainer = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideoKey = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
