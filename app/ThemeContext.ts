import { createContext } from "react";

export const ThemeContext = createContext<"left" | "center" | "right">("left");
