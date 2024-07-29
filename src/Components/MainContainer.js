import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import MovieTrailer from "./MovieTrailer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const MainMovie = movies[3];
  const { title, overview, id } = MainMovie;
  {
  }
  return (
    <div className="w-full overflow-hidden h-full">
      <VideoTitle title={title} overview={overview} />
      <MovieTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;