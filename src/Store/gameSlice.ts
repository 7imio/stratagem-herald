import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface GameState {
  isPlaying: boolean;
}
const initialState: GameState = {
  isPlaying: false,
};

const storeSlice: CreateSliceOptions<
  GameState,
  { setIsPlaying: (state: GameState, action: PayloadAction<boolean>) => void }
> = {
  name: "Stratagem Herald",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
};

const gameSlice = createSlice(storeSlice);
export const { setIsPlaying } = gameSlice.actions;

export default gameSlice.reducer;
