import { configureStore } from '@reduxjs/toolkit';
import flightStore from './reducers/flightStore';

export default configureStore({
  reducer: {
    flightapp: flightStore
  }
})