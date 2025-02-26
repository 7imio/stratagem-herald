import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
};

const storeSlice: CreateSliceOptions<
  ThemeState,
  {
    switchTheme: (state: ThemeState) => void;
  }
> = {
  name: "Themes",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      // save theme in local storage
    },
    // retrieve theme from local storage
  },
};

const themeSlice = createSlice(storeSlice);
export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
