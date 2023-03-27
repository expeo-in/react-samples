import { useState } from "react";

export default function Cart({ qty, onAddMore }) {
  return (
    <>
      <div>Qty: {qty}</div>
      <button onClick={onAddMore}>Add more</button>
    </>
  );
}
