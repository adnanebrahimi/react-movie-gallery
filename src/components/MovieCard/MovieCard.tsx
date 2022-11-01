import Paper from "@mui/material/Paper";
import { Movie } from "../../models";

export default function MovieCard(props: {movie:Movie}) {

    return(
        <>
        
        <Paper elevation={2} className="flex flex-col gap-2 p-3">
         <img src={props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/100'} alt={props.movie.Title} width='100px' />
         <ul className="list-none">
            <li>ID: {props.movie.imdbID}</li>
            <li>Title: {props.movie.Title}</li>
            <li>Type: {props.movie.Type}</li>
            <li>Year: {props.movie.Year}</li>
         </ul>
        </Paper>

        </>
    );
}


