import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: false, error: "", pokemonsList: [] };

const getPokemons = createAsyncThunk("products/getPokemons", async () => {
  const totalData = [];
  for (let index = 1; index < 27; index++) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await res.data;
    const price = Math.floor(Math.random() * 100) + 1;
    const rarity = price < 30 ? "Common" : price < 70 ? "Rare" : "Legendary";
    totalData.push({
      name: data.forms[0].name,
      id: nanoid(),
      img: data.sprites.other.home.front_default,
      price,
      rarity,
    });
  }
  return totalData;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemonsList = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { getPokemons };
