import {createSlice} from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {Task} from "../../../interfaces/interfaces.ts";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [] as Task[],
    },
    reducers: {
        setTasks: (state, action) => {
          state.tasks = action.payload;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task:any) => task.taskId !== action.payload);
        }
    }
})

export const {setTasks, addTask, removeTask} = tasksSlice.actions;

export default tasksSlice.reducer;
