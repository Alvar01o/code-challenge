"use client"; // This is a client component 👈🏽

import Product from "./Product";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../store/SearchContext";

const URL_PRODUCTS = 'http://127.0.0.1:8000/api/products/';

const ProductsContainer: React.FC<{}> = (props) => {
   const [products , setProducts] = useState([]);
   const searchCtx = useContext(SearchContext);

   useEffect(() => {
      let search_url = URL_PRODUCTS  + searchCtx.search;
      fetch(search_url).then(response => {
         return response.json();
      }).then((realResponse) => {
         setProducts(realResponse.data)

      })
    }, [searchCtx]);

    return (
        <div className="flex-wrap flex container w-11/12 mx-auto">
            {products.map((product, key) =>
                <Product key={key} product={product}/>                
                )}
        </div>
    )
}

export default ProductsContainer;