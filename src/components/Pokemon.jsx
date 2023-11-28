import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

function Pokemon({ pokemon }) {
  const { name, img, price, rarity } = pokemon;
  const dispatch = useDispatch();

  return (
    <div className="bg-white border flex flex-col h-86 w-60 justify-between items-center p-4">
      <div className="text-3xl font-mono">
        {name[0].toUpperCase() + name.slice(1)}
      </div>
      <img className="w-48" src={img} alt={name + "picture"} />
      <div className="text-xl mt-2">
        Price: <span className="font-bold">${price}</span>
      </div>
      <div className="flex w-full justify-between items-center">
        <button
          className="self-start rounded-full bg-green-600 text-white p-2 font-mono tracking-tighter text-sm mt-4 hover:bg-green-400"
          onClick={() => dispatch(addToCart(pokemon))}
        >
          Buy
        </button>
        <div
          className={`${
            rarity === "Common"
              ? "bg-blue-700"
              : rarity === "Rare"
              ? "bg-indigo-700"
              : "bg-yellow-600"
          } text-white w-min px-2 font-bold rounded-2xl text-sm mt-2`}
        >
          {rarity}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
