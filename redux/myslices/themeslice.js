import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    
    name:'themestate', 

    initialState:{
        value:['white' , '#111' , 'none', 'flex' , 'none'], 
    },

    reducers:{
        set_to_white:(state )=>{
         
            state.value[0] = 'white';
            state.value[1] = '#111';
            
        }, 
        set_to_black:(state )=>{
         
            state.value[0] = '#111';
            state.value[1] = 'white';
            
        }, 
        activer:(state)=>{
            state.value[2] = 'flex'; 
            state.value[3] = 'none'; 
            state.value[4] = 'none';
        },
        desactiver:(state)=>{
            state.value[2] = 'none'; 
            state.value[3] = 'flex'; 
            state.value[4] = 'none';
        }, 
        systeme:(state)=>{
            state.value[2] = 'none'; 
            state.value[3] = 'none'; 
            state.value[4] = 'flex';
        }, 


    }

});


export const {set_to_white , set_to_black ,activer , desactiver ,systeme} = themeSlice.actions; 
export default themeSlice.reducer ;
export const getThemeState = state  => state.confState.value;