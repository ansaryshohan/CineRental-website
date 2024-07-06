import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [cartMovieData, setCartMovieData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartMovieData, setCartMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
