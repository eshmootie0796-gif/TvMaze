import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { addFavoriteReducer, removeFavoriteReducer } from './features/FavoritesSlice.js'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'

export const store = configureStore({
    reducer: {
        addFavorite: addFavoriteReducer,
        removeFavorite: removeFavoriteReducer
    }
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
