import React from 'react';
import {useState, useEffect} from 'react'



const Product = (obj) => {
    const [addToCart, setAddToCart] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${addToCart} times`;
      });
    return (
        <>
            <img src={obj.img} />
            <h3>{obj.title}</h3>
            <p id="product-description">{obj.description}</p>
            <p id=""></p>
            <button id="addBtn">Like {obj.like} </button>
            <button id="likeBtn" onClick= {() => setAddToCart(addToCart + 1)}>Add to Cart {addToCart} </button>
        </>
    )
}
export default Product