import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState:[],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload)
        },
        removeFavorite: (state, action) => {
            return state.filter(favorite => favorite.id !== action.payload)
        }
    }
})

export const {addFavoriteReducer,removeFavoriteReducer} = favoriteSlice.actions
export default favoriteSlice.reducer