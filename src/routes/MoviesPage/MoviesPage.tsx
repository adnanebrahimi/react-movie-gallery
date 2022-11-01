import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useCallback, useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieCardSkeleton from "../../components/MovieCardSkeleton/MovieCardSkeleton";
import { useMovieContext } from "../../contexts";
import { Movie, Movies } from "../../models";

export default function MoviesPage() {
  const movieCtx = useMovieContext();
  const API_URL = "http://www.omdbapi.com";
  const API_KEY = "52dceec";
  const [loadingMovie, setLoadingMovie] = useState(false);

  const getMovie = async (title: string) => {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
    const result: Movies = await response.json();
    movieCtx.dispatch({ type: "load movies", payload: result.Search });
    setLoadingMovie(false);
  };
  const getTheMovie = useCallback((title = "Hulk") => {
    setLoadingMovie(true);
    getMovie(title);
  }, []);

  useEffect(() => {
    getTheMovie();
  }, []);

  useEffect(() => {
    console.log(movieCtx.state);
  }, [movieCtx.state]);

  const Movies = movieCtx.state.map((movie) => {
    return <MovieCard movie={movie} key={movie.imdbID}></MovieCard>;
  });
  const Skeleton = new Array(10).fill(null).map(() => {
    return <MovieCardSkeleton />;
  });

  return (
    <>
     <div className="flex items-center justify-center m-2">
     <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" onClick={() => getTheMovie("Hulk")}>
          Hulk
        </Button>
        <Button variant="contained" onClick={() => getTheMovie("Batman")}>
          Batman
        </Button>
        <Button variant="contained" onClick={() => getTheMovie("Spiderman")}>
          Spiderman
        </Button>
        <Button variant="contained" onClick={() => getTheMovie("Superman")}>
          Superman
        </Button>
      </ButtonGroup>
     </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 m-2">
        {loadingMovie ? Skeleton : Movies}
      </div>
    </>
  );
}
