import React, { useState } from "react";
import classes from "./AddProduct.module.css";
import { useContext } from "react";
import { UserContext } from "../../Store";

const AddProduct = () => {
  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name: event.target.name.value,
      desc: event.target.desc.value,
      price: event.target.price.value,
      qty: 0
      // 0parseInt(event.target.qty.value)
    };

    user.addProduct(obj);
    console.log("Hi", user);
  };
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <span>
        <label htmlFor="name">Name </label>
        <input type="text" id="name" name="name" />
        </span>
       <span>
       <label htmlFor="desc">Desc</label>
        <input type="text" id="desc" name="desc" />
       </span>
       <span>
       <label htmlFor="price">Price </label>
        <input type="number" id="price" name="price" />
       </span>
       {/* <span className={classes.hiddenspan}>
       <label htmlFor="quantity">Quantity</label>
        <input type="number" id="qty" name="qty" value="0" />
       </span> */}
      <span>
      <button type="submit" className={classes.button}>
          {" "}
          Add Product
        </button>
      </span>
      </form>
    </div>
  );
};
export default AddProduct;
