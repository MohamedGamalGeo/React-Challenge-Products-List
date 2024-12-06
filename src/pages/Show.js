import React, { useState,useEffect} from 'react'
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';

export default function Show() {
    
    const [product, setProduct] = useState("");
    const params = useParams();
    
    
    useEffect( () => {
        console.log(params.id);
        
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(data =>{
              setProduct(data.data);
              //console.log(product);
              
    
            })
            .catch(err => {
                console.log(err);  
            })
        
        
    }, []);

   // console.log(product.title);
    
  return (
    <div className='show-product'>
       {
        
        <div >
            <h3>{product.title}</h3>
            <h3>Name: {product.title}</h3>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>

       }

      
      <Link to="/"> {`Back |   `}</Link>
      <Link to={`/Edit/${product.id}`}> {`    Edit`}</Link>
    </div>
    
  )
}
