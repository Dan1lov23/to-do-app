import {configureStore} from "@reduxjs/toolkit";

import isLoginSlice from "../slices/is login slice/isLoginSlice.ts";
import  tasksSlice from "../slices/tasks slice/tasksSlice.ts";

export const store = configureStore({
    reducer: {
        isLogin: isLoginSlice,
        tasks: tasksSlice,
    }
})
