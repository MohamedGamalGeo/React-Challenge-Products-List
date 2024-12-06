import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {useNavigate } from 'react-router'
import axios from 'axios';

export default function Edit() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the product details from the API
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]); // Re-fetch if the product ID changes

  // Handle changes to the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value, // Update the relevant field (title, price, or description)
    });
  };

  // Handle form submission to update the product
  const updateProduct = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    axios.put(`https://fakestoreapi.com/products/${params.id}`, product)
      .then((response) => {
        console.log('Product updated:', response.data);
        navigate(`/`);
        window.alert("Product has been updated successfuly")

      })
      .catch((err) => {
        console.log('Error updating product:', err);
      });
  };

  return (
    <div className="edit">
      <h3>Edit {product.title}</h3>

      <form onSubmit={updateProduct}>
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

        <button type="submit">Update</button>
      </form>

      <div>
        <Link to="/">Home</Link>
        <Link to={`/Show/${product.id}`}>Show</Link>
      </div>
    </div>
  );
}

