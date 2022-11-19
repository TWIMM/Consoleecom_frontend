import { createSlice } from "@reduxjs/toolkit";

export const EachproSlice = createSlice({
    name:'Eachprostate', 

    initialState :{
       value:['hello'], 
    } , 


    reducers:{
        addproduit:(state , action)=>{
            state.value = action.payload; 
            console.log(state.value);
        } ,
    }
})


export const {addproduit} = EachproSlice.actions; 
export const getEachProduct = state  => state.EachproSlice.value;
export default EachproSlice.reducer ; 