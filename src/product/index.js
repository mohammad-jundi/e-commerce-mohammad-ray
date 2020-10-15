import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const Product = (obj) => {
    const [like, setLike] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${like} times`;
      });
    return (
        <div>
            <Link to={`/product/${obj.id}`}>
                <img src={obj.img} width="150px"/>
             </Link>
            <h3>{obj.title}</h3>
            <p id="product-description">{obj.description}</p>
            <p id="">{obj.id}</p>
            <button id="addBtn">Add To Cart {obj.like} </button>
            <button id="likeBtn" onClick= {() => setLike(like + 1)}>Like {like} </button>
        </div>
    )
}
export default Product