import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/features/productsSlice";
import Pokemon from "../components/Pokemon";

function Products() {
  const { loading, error, pokemonsList } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center text-center w-screen gap-2 md:grid grid-col grid-cols-4 p-2">
      {pokemonsList?.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Products;
