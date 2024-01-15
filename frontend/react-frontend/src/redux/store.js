import { configureStore } from '@reduxjs/toolkit';

import nodeReducer from  './nodeSlice'

export const store = configureStore({
  reducer: {
    // Add your reducers here
    nodes: nodeReducer
  },
});
