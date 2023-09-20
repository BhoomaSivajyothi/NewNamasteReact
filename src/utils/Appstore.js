import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cartslice"

   export const AppStore= configureStore({
    reducer :{
      cart:Cartreducer,
    }
  })