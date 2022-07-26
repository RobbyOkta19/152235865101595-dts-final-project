import { configureStore } from "@reduxjs/toolkit";

import { serviceApi } from "../services/serviceApi";

export const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(serviceApi.middleware);
  },
});
