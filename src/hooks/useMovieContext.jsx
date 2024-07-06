import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContextProvider";

export default function useMovieContext() {
  return useContext(MovieContext);
}
