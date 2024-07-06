import { useState } from "react";
import { getMovieCoverImageURL } from "../../utils/getMovieImageURL";
import MovieDetailModal from "./MovieDetailModal";
import Rating from "./Rating";
import useMovieContext from "../../hooks/useMovieContext";
import tagIcon from "../../assets/tag.svg"

const SingleMovieCard = ({ movieData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {cartMovieData,setCartMovieData} = useMovieContext()

  const handleModalOpen = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };
  const handleCartData=(event,movie)=>{
    event.stopPropagation();
    const isExisting= cartMovieData.find(cartMovie=>cartMovie.id===movie.id)
    if(!isExisting){
      setCartMovieData([...cartMovieData,movie])
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailModal
          selectedMovie={selectedMovie}
          onModalClose={handleModalClose}
          onCartDataAdd={handleCartData}
        />
      )}
      <figure
        key={movieData.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleModalOpen(movieData)}
      >
        <>
          <img
            className="w-full object-cover"
            src={getMovieCoverImageURL(movieData.cover)}
            alt={movieData.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movieData.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movieData.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating starCount={movieData.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e)=>handleCartData(e,movieData)}
            >
              <img src={tagIcon} alt="tag icon" />
              <span>{movieData.price} | Add to Cart</span>
            </a>
          </figcaption>
        </>
      </figure>
    </>
  );
};

export default SingleMovieCard;
