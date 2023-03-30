import { createSlice } from "@reduxjs/toolkit";

/** 초기 값 */
const initialState = {
  menuList: [],
};

const slice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    setMenuList: (state, actions) => {
      state.menuList = actions.payload;
    },
  },
});

/** actions */
export const { setMenuList } = slice.actions;

// export const selectMenu = (state) => state.menu;
/** reducer */
export default slice.reducer;
