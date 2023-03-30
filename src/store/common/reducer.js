import { createSlice } from "@reduxjs/toolkit";

/**
 * 메모리 공간의 일부분으로 common으로 할당한다. 그 안에 isLoading이라는 공간을 또 쓸 것이다.
 * isLoading에 값을 넣어주기 위해 reducer를 사용하는데 setIsLoading이라는 함수를 이용한다.
 */

/** 초기 값 */
const initialState = {
  isLoading: false,
};

const slice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    // reducers : 메모리에 저장을 하는 역할
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});

/**
 * actions
 * 액션을 할 수 있게 밖으로 내보내준다.
 */
export const { setIsLoading } = slice.actions;

/**
 * common 을 가져다 쓰기 위해 (common에 접근)
 */
export const selectCommon = (state) => state.common;

/**
 * reducer를 스토어에 내보내준다.
 */
export default slice.reducer;
