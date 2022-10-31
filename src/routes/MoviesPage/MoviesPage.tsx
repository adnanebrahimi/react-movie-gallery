import { useAuthContext, useMovieContext } from "../../contexts";

export default function MoviesPage() {
   
   const movieContext = useMovieContext();
   movieContext.dispatch({'type':'load movies', 'payload':[]})
    return <>
    Movies PAGE
    </>;
  }
  