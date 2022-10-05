import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPanda = createAsyncThunk(
  'panda/getPanda',
  async () => {
    let response = await axios.get("https://some-random-api.ml/animal/red_panda");
    const newPanda = response.data;
    return newPanda
  }
)

const initialState = {
    panda: {
        image: '',
        fact: ''
    },
    loadingPanda: true
};

const pandaSlice = createSlice({
  name: 'panda',
  initialState,

  reducers: {
    getPandaAction: (state) => {
        // let response = await axios.get("https://some-random-api.ml/animal/red_panda");
        // const newPanda = response.data;
        // state.panda.image = newPanda.image;
        // state.panda.fact = newPanda.fact;
        // console.log(newPanda);
        // state.loadingPanda = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPanda.fulfilled, (state, action) => {
      console.log('panda !!!');
      console.log(action.payload);
      state.panda.image = action.payload.image;
      state.panda.fact = action.payload.fact;
    })
  }

})

// Action creators are generated for each case reducer function
export const { getPandaAction } = pandaSlice.actions

export default pandaSlice.reducer