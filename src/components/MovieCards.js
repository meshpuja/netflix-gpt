import React from "react";
import { CDN_URL } from "./Utils/constants";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="poster" src={CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCards;
