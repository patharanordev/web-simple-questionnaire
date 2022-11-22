import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './info/infoSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    players: infoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})