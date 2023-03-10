import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCard from "./ProductCard";
import { Grid } from '@material-ui/core';

const GianHang = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
      <Grid container spacing={4} rowSpacing={2} sx={{ columnGap: 1 }}>
        {products.map((product, index) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>

            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
  );
};

export default GianHang;
