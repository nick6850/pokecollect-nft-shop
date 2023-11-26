import React from "react";

function Pokemon({ pokemon }) {
  const { name, img, price, rarity } = pokemon;
  return (
    <div className="border flex flex-col h-80 w-56 justify-between items-center p-4">
      <div className="text-3xl font-mono">
        {name[0].toUpperCase() + name.slice(1)}
      </div>
      <img className="w-48" src={img} alt={name + "picture"} />
      <div className="text-xl mt-2">
        Price: <span className="font-bold">${price}</span>
      </div>
      <div
        className={`${
          rarity === "Common"
            ? "bg-blue-700"
            : rarity === "Rare"
            ? "bg-indigo-700"
            : "bg-yellow-600"
        } text-white w-min self-end px-2 font-bold rounded-2xl text-sm`}
      >
        {rarity}
      </div>
    </div>
  );
}

export default Pokemon;
