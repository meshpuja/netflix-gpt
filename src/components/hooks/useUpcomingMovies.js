import { useDispatch, useSelector } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addUpcoming } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);

  const getupcomingData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const data = await fetch(url, SPI_OPtions);
    const upcoming = await data.json();
    dispatch(addUpcoming(upcoming.results));
  };

  useEffect(() => {
    !upcoming && getupcomingData();
  }, []);
};
export default useUpcomingMovies;
