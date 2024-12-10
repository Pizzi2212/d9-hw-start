import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouritesReducer'
import jobsReducer from '../reducers/jobReducer'
import buttonReducer from '../reducers/buttonReducer'

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
  showButton: buttonReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
