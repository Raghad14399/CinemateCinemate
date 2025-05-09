import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div className="border border-border p-1 hover:scale-95 transition relative rounded-2xl overflow-hidden">
      <Link to={`/movie/${movie?.name}`} className="w-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/Movies/${movie?.image}`}
          alt={movie?.name || "Movie"}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
        <h3 className="font-semibold truncate">{movie?.name}</h3>
        <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-subMain rounded-2xl bg-beige3 text-white">
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default Movie;
