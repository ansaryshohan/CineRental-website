const getMovieCoverImageURL = (movieName) => {
  return new URL(`../assets/movie-covers/${movieName}`, import.meta.url).href;
};

export { getMovieCoverImageURL };
