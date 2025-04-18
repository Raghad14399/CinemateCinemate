import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import "swiper/css";
import "swiper/css/navigation";

function SingleMovie() {
  const { id } = useParams();

  // تعديل مسار الصور باستخدام %PUBLIC_URL%
  const updatedMovies = Movies.map((movie) => ({
    ...movie,
    image: `${process.env.PUBLIC_URL}/images/movies/${movie.image}`,
  }));

  const movie = updatedMovies.find((movie) => movie.name === id);

  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className="container mx-auto min-h-screen px-2 my-6 animate-fadeIn">
        <MovieCasts />
      </div>
    </Layout>
  );
}

export default SingleMovie;
