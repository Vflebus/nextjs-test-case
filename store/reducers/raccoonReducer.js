import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchRaccoon = createAsyncThunk(
  'raccoon/getRaccoon',
  async () => {
    let response = await axios.get("https://some-random-api.ml/animal/raccoon");
    const newRaccoon = response.data;
    return newRaccoon
  }
)

const initialState = {
    raccoon: {
        image: '',
        fact: ''
    },
    loadingRaccoon: true
};

const raccoonSlice = createSlice({
  name: 'raccoon',
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRaccoon.fulfilled, (state, action) => {
      console.log('raccoon !!!');
      console.log(action.payload);
      state.raccoon.image = action.payload.image;
      state.raccoon.fact = action.payload.fact;
      state.loadingRaccoon = false;
    })
  }

})

// Action creators are generated for each case reducer function
export const { getRaccoonAction } = raccoonSlice.actions

export default raccoonSlice.reducer