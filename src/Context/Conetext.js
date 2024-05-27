import { createContext, useContext } from "react";

export const theme = createContext({});

export const theme_context = () => {
  return useContext(theme);
};
