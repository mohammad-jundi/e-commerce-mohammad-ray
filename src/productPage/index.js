import React from 'react';
import {useState, useEffect} from 'react'
import db from '../firebaseConfig'
// import {Link} from 'react-router-dom'


const ProductPage = (obj) => {
    const [like, setLike] = useState(0);
    const [products, setProducts] = useState([])
    const fetchData = async ()=>{
        const id = obj.match.params.id
        const productsRes = await db.collection('products').doc(`${id}`).get()
        const productsData = await productsRes.data()
        console.log(id)
        setProducts(productsData)
    }
    useEffect(()=>{
        fetchData()
      },[])
    console.log(obj)
    return (
        <div>
               <img src={products.img} width="150px"/>
            
            <h3>{products.title}</h3>
             <p id="product-description">{products.description}</p>
             <p id="">{products.id}</p>
             <button id="addBtn">Add To Cart {products.like} </button>
         <button id="likeBtn" onClick= {() => setLike(like + 1)}>Like {like} </button>
        </div>
    )
}
export default ProductPage