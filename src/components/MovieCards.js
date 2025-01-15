import React from "react";
import { CDN_URL } from "./Utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="poster" src={CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCards;
