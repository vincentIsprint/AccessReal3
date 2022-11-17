import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    preAuth: '',
    productInfo: '',
    loginInfo: '',
    innerHeight: 0,
    innerWidth: 0,
  },
  reducers: {
    setAuth: (state,{payload}) =>{
      state.preAuth = payload.preAuth
    },
    setProductInfo: (state,{payload}) =>{
      state.productInfo = payload.productInfo
    },
    setLoginInfo: (state,{payload}) =>{
      state.loginInfo = payload.loginInfo
    },
    setMeasure: (state,{payload}) => {
      state.innerHeight = payload.innerHeight
      state.innerWidth = payload.innerWidth
      console.log(state,{payload})
    }
  }
});

// Action creators are generated for each case reducer function
export const { setAuth,setProductInfo, setLoginInfo, setMeasure } = settingSlice.actions;

export default settingSlice.reducer;
