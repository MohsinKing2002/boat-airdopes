"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState();

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};
