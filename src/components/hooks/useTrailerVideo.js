import { useDispatch, useSelector } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addTrailer } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getVideoAPI = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US";
    const data = await fetch(url, SPI_OPtions);
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((e) => e.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    !trailerVideo && getVideoAPI();
  }, []);
};
export default useTrailerVideo;
