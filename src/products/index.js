import React, { useState, useEffect } from 'react';
import Product from '../product'
// const arrOfObj = [{img:"sadsd", title:";fdg", describtion:"sds"}]
import db from '../firebaseConfig'

const Products = () => {
    const [products, setProducts] = useState([])
    const fetchData = async ()=>{
        const productsRes = await db.collection('products').get()
        const productsData = productsRes.docs.map(product => {
            const data = product.data()
            const id = product.id
            return {id,...data}
        })
        console.log(productsData);
        setProducts(productsData)
    }
    useEffect(()=>{
        fetchData()
      },[])
    return (
        <div>
            {products.map(products => <Product {...products}/>)}
        </div>
        ) 
}
export default Products