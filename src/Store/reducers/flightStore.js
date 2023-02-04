import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        facebookID: '',
        name: '',
        email: '',
        flight: []
    },
    isLoggedIn: false,
    loader: false
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
    reducers: {
        loggingIn: (state, action) => {
            state.isLoggedIn = action.payload
        },

        currentuser: (state, action) => {
            state.currentUser = action.payload;
            state.token = null
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loader = true;
            console.log('pending')
        },
        [getUser.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.loader = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload.data;
        },
        [getUser.rejected]: () => {
            console.log('rejected');
        }
    }
});

export const {currentuser, loggingIn} = flightSlice.actions;
export default flightSlice.reducer;