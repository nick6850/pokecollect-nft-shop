import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/features/productsSlice";
import Pokemon from "../components/Pokemon";
import { calculateTotal } from "../redux/features/cartSlice";

function Products() {
  const { loading, error, pokemonsList } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemonsList.length) {
      dispatch(getPokemons());
    }
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-6xl text-indigo-600">
        PokéCollect NFT Shop
      </h1>
      <div className=" slogan text-center text-2xl text-purple-600">
        Savor the Magic and Collect the Legends
      </div>
      <div className="mx-4 lg:mx-auto bg-indigo-500 rounded-md flex flex-col justify-center items-center text-center max-w-4xl gap-2 lg:grid grid-cols-3 p-4 mb-4">
        {pokemonsList?.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Products;
