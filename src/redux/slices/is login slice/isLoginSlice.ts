import {createSlice} from '@reduxjs/toolkit';

const isLoginSlice = createSlice({
    name: 'isLogin',
    initialState: {
        value: false,
    },
    reducers: {
        setIsLogin: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setIsLogin} = isLoginSlice.actions;
export default isLoginSlice.reducer;
