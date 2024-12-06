import React, {useState,useEffect}from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect( () => {
    axios.get("https://fakestoreapi.com/products")
        .then(data =>{
          setProductsList(data.data);
          //console.log(data.data);
        })
        .catch(err => {
            console.log(err);  
        })
    
}, []);

const handleDelete = (productId) =>{
    axios.delete(`https://fakestoreapi.com/products/${productId}`)
      .then((res) =>{
        console.log("delelted successfuly");
        window.alert("Product has been delelted successfuly")
      })
      .catch(err =>{
        console.log(err);
        
      })
}

  return (
    <div className='products-table '>
      <h1>Products</h1>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>$ {product.price}</td>
              <td className='td-links'>
          
          <Link to={`/Show/${product.id}`}>
            Show
          </Link>

          
          <Link to={`/Edit/${product.id}`}>
            Edit
          </Link>

          
          <button onClick={() => handleDelete(product.id)}>
            Delete
          </button>
        </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/New`}>
            Add Product
          </Link>
    </div>
  )
}
