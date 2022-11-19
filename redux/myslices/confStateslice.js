import { createSlice } from "@reduxjs/toolkit";

export const confStateslice = createSlice({ 
   name :'confState' , 

   initialState:{
    value:null,
   },
   
   reducers : {
      set_visible: (state )=>{
         
         state.value = true;
         
      }, 
      
      set_hide: (state )=>{
        state.value = false;
     }
       
   }
}); 

export const {set_hide ,set_visible} = confStateslice.actions;


export const getConfState = state  => state.confState.value;
export default confStateslice.reducer;