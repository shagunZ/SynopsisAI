import {configureStore} from '@reduxjs/toolkit';

import { articleApi } from './article';

//configuring a store which is a global state that saves entire info of our application
//but dont need whole state we need slice of the part

export const store = configureStore({
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})