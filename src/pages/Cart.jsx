import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import empty_cart from "/empty_cart.jpg";

function Cart() {
  const { items, totalSum } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  if (!items.length) {
    return (
      <div className="m-auto flex flex-col items-center w-fit mt-10">
        <div className="empty-cart text-2xl">
          You haven't added anything to the cart yet :(
        </div>
        <img className="rounded-sm max-h-40 mt-2" src={empty_cart} alt="" />
      </div>
    );
  }

  return (
    <div className="flex w-screen m-4 text-center justify-center">
      <div>
        <table className="text-center">
          <thead>
            <tr>
              <th className="pr-6"></th>
              <th className="pr-6">Item name</th>
              <th className="pr-6">Amount</th>
              <th className="pr-6">Price</th>
              <th className="pr-6">Total</th>
              <th className="pr-6"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.img} alt="" className="w-24" />
                </td>
                <td>{item.name[0].toUpperCase() + item.name.slice(1)}</td>
                <td>{item.amount}</td>
                <td>${item.price}</td>
                <td>${item.total}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="bg-gray-300 px-2 font-mono rounded-md"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="ml-1 rounded-md bg-gray-300 px-2 font-mono"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col items-end">
          <div>
            Total: <span className="font-bold">${totalSum}</span>
          </div>
          <button className="text-center font-bold bg-purple-950 text-white px-3 rounded-sm w-16">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
