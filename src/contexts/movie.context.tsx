import * as React from "react";
import { Movie } from "../models";

type Action = { type: "load movies"; payload: Movie[] };
type Dispatch = (action: Action) => void;
type MovieProviderProps = { children: React.ReactNode };

const MovieStateContext = React.createContext<
  { state: Movie[]; dispatch: Dispatch } | undefined
>(undefined);

function MovieReducer(state: Movie[], action: Action) {
  switch (action.type) {
    case "load movies": {
      return action.payload;
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function MovieProvider({ children }: MovieProviderProps) {
  const [state, dispatch] = React.useReducer(MovieReducer, []);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <MovieStateContext.Provider value={value}>
      {children}
    </MovieStateContext.Provider>
  );
}

function useMovieContext() {
  const context = React.useContext(MovieStateContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
}

export { MovieProvider, useMovieContext };
