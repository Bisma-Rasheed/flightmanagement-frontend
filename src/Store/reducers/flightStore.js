import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        facebookID: '',
        name: '',
        email: '',
        flight: []
    }
};

export const addUser = createAsyncThunk('flightSlice/create', async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/adduser', requestOptions);
    return response.json();

});

const flightSlice = createSlice({
    name: 'flightSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [addUser.pending]: ()=>{
            console.log('pending')
        },
        [addUser.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.currentUser = action.payload.data;
        },
        [addUser.rejected]: ()=>{
            console.log('rejected');
        }
    }
});

export default flightSlice.reducer;