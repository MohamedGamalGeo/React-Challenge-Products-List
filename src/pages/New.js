import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';

export default function New() {
  
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: ''
  });

  const navigate = useNavigate(); 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  
  const addNewProduct = (e) => {
    e.preventDefault();


    axios.post('https://fakestoreapi.com/products', product)
      .then((data) => {
        console.log('Product added:', data.data);
        window.alert("Product has been added successfuly")

        navigate(`/`);
      })
      .catch((err) => {
        console.log('Error adding product:', err);
      });
  };

  return (
    <div className=".add-product-link ">
      <h3>Create New Product</h3>

      <form onSubmit={addNewProduct}>
        <label>Name</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>

      <div className='.add-product-link'>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
