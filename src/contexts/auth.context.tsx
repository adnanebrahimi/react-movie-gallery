import * as React from "react";
import { User } from "../models";

type Action = { type: "login"; username: string } | { type: "logout" };
type Dispatch = (action: Action) => void;
type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<
  { state: User; dispatch: Dispatch } | undefined
>(undefined);

function authReducer(state: User, action: Action) {
  switch (action.type) {
    case "login": {
      localStorage.setItem("username", action.username);
      return { username: action.username };
    }

    case "logout": {
      localStorage.removeItem("username");

      return { username: "" };
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = React.useReducer(authReducer, { username: localStorage.getItem('username') || '' });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  );
}

function useAuthContext() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
