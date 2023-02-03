import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        facebookID: '',
        name: '',
        email: '',
        flight: []
    }
};

export const getUser = createAsyncThunk('flightSlice/create', async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/getuser', requestOptions);
    return response.json();

});

const flightSlice = createSlice({
    name: 'flightSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.pending]: ()=>{
            console.log('pending')
        },
        [getUser.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.currentUser = action.payload.data;
        },
        [getUser.rejected]: ()=>{
            console.log('rejected');
        }
    }
});

export default flightSlice.reducer;