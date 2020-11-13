import React from "react";

function Product({ name, price, amount, handleChange }) {
  const onAdd = () => {
    handleChange(1);
  };

  const onChange = (event) => {
    handleChange(parseInt(event.target.value));
  };
  return (
    <div>
      <li>
        Name: {name} - ${price}
      </li>
      {amount === 0 ? (
        <button onClick={onAdd}>+</button>
      ) : (
        <input type="number" value={amount} onChange={onChange} />
      )}
    </div>
  );
}

export default Product;
