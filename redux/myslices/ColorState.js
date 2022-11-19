import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    
    name:'themestate', 

    initialState:{
        value:['white' , '#111' , 'white', 'white' ,   '#111', 'white' , '#111', '#111' ], 
        

    },

    reducers:{
      
        first:(state)=>{
          state.value[0] = '#111'; 
          state.value[1] = 'white'; 
          state.value[2] = 'white';
          state.value[3] = 'white';

          state.value[4] = 'white';
          state.value[5] = '#111'; 
          state.value[6] = '#111'; 
          state.value[7] = '#111'; 
        }, 

        second:(state)=>{
            state.value[0] = 'white'; 
            state.value[1] = '#111'; 
            state.value[2] = 'white';
            state.value[3] = 'white';
           
            state.value[4] = '#111';
            state.value[5] = 'white'; 
            state.value[6] = '#111'; 
            state.value[7] = '#111'; 
        }, 

        third:(state)=>{
            state.value[0] = 'white'; 
            state.value[1] = 'white'; 
            state.value[2] = '#111';
            state.value[3] = 'white';

            state.value[4] = '#111';
            state.value[5] = '#111'; 
            state.value[6] = 'white'; 
            state.value[7] = '#111'; 
        }, 
        fourth:(state)=>{
            state.value[0] = 'white'; 
            state.value[1] = 'white'; 
            state.value[2] = 'white';
            state.value[3] = '#111';


            state.value[4] = '#111';
            state.value[5] = '#111'; 
            state.value[6] = '#111'; 
            state.value[7] = 'white';
        }, 




    }

});


export const {first ,second , third, fourth} = themeSlice.actions; 
export default themeSlice.reducer ;
export const getThemeState = state  => state.confState.value;