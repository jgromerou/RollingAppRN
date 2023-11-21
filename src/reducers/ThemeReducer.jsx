import { types } from "../types/types";

export const lightTheme = {
  currentTheme: "light",
  dividerColor: "rgba(0, 0, 0,0.6)",
  colors: {
    primary: "#7aae5e",
    titleColor: "#2A3B47",
    text: "#697477",
    notification: "#A0A7AC",
    background: "#FBFBFE",
    border: "#EFF3F5",
    card: "#FFFFFF",
  },
};

export const darkTheme = {
  currentTheme: "dark",
  dividerColor: "rgba(255, 255, 255,0.8)",
  colors: {
    primary: "#89db75",
    background: "black",
    titleColor: "#EFF3F5",
    card: "black",
    text: "white",
    border: "black",
    notification: "teal",
  },
};

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case types.theme.light:
      return { ...lightTheme };

    case types.theme.dark:
      return { ...darkTheme };

    default:
      return state;
  }
};
