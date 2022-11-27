import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { satelliteAPI } from "./services/SatelliteService";

const rootReducer = combineReducers({
  [satelliteAPI.reducerPath]: satelliteAPI.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(satelliteAPI.middleware)
})