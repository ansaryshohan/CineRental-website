import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContextProvider";

export default function useDarkModeContext() {
  return useContext(DarkModeContext);
}
