import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowplaying);
  if (movies == null) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie + "%%%%%%%%%mainMovie");
  return (
    <div className="pt-[20%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;
