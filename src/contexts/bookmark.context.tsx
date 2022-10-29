import * as React from "react";
import { Bookmark } from "../models";

type Action = { type: "bookmark movie", payload:Bookmark } | { type: "remove bookmark", payload:Bookmark };
type Dispatch = (action: Action) => void;
type BookmarkProviderProps = { children: React.ReactNode };

const BookmarkStateContext = React.createContext<
  { state: Bookmark[]; dispatch: Dispatch } | undefined
>(undefined);

function BookmarkReducer(state: Bookmark[], action: Action) {
  switch (action.type) {
    case "bookmark movie": {
      return [ ...state, {
        Title: action.payload.Title,
        Poster: action.payload.Poster,
        Type: action.payload.Type,
        Year: action.payload.Year,
        imdbID: action.payload.imdbID,
      } ];
    }

    case "remove bookmark": {
      return state.filter(bookmark => bookmark.imdbID !== action.payload.imdbID);
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [state, dispatch] = React.useReducer(BookmarkReducer, []);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <BookmarkStateContext.Provider value={value}>
      {children}
    </BookmarkStateContext.Provider>
  );
}

function useBookmarkContext() {
  const context = React.useContext(BookmarkStateContext);
  if (context === undefined) {
    throw new Error("useBookmarkContext must be used within a BookmarkProvider");
  }
  return context;
}

export { BookmarkProvider, useBookmarkContext };
