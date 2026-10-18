import { configureStore } from "@reduxjs/toolkit";

import quoteReducer from "./features/quotes/quotesSlices";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
