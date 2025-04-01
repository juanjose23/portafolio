// src/context/useThemeReducer.js

export const SET_THEME = "SET_THEME";

// Define el estado inicial
export const initialState = {
  theme: localStorage.getItem("theme") || "light",
};


export const themeReducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
