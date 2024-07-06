import { getAllMovies } from "../../data/movie";
import SingleMovieCard from "./SingleMovieCard";

const MovieListSection = () => {
  const movieData = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movieData.map((movieData) => (
          <SingleMovieCard key={movieData.id} movieData={movieData} />
        ))}
      </div>
    </div>
  );
};

export default MovieListSection;
