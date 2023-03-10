import React, { useState } from "react";
import ProductDataService from "../services/ProductService";
// import { Button } from '@material-ui/core';

import Button from '@mui/material/Button';

import Container from '@mui/material/Container';


const AddProduct = () => {
  const initialProductState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    var data = {
      title: product.title,
      description: product.description
    };

    ProductDataService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <Container maxWidth="sm">


      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newProduct}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={product.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={product.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

            {/* <button onClick={saveProduct} className="btn btn-success">
            Submit
          </button> */}
            <Button variant="contained" color="primary" onClick={saveProduct} >
              Add data
            </Button>
          </div>
        )}
        
      </div>
      
    </Container>

  );
};

export default AddProduct;
