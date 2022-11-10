import { createSlice } from "@reduxjs/toolkit";

const favortiesSlice = createSlice({
    name:'favorites',
    initialState: [],
    reducers:{
        toggleFavorite: (favorites,action) => {
            if(favorites.includes(action.payload)){
                return favorites.filter((favorite)=> favorite !== action.payload)
            } else{
                 favorites.push(action.payload);
            }

        }
    }
})

export const {toggleFavorite} = favortiesSlice.actions;
export const favoritesReducer = favortiesSlice.reducer