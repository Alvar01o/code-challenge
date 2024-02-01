"use client"; // This is a client component 👈🏽

import Product from "./Product";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../store/SearchContext";

const URL_PRODUCTS = 'http://localhost/api/products';

const ProductsContainer: React.FC<{}> = (props) => {
   const [products, setProducts] = useState([]);
   const searchCtx = useContext(SearchContext);

   useEffect(() => {
      let search_url = (searchCtx.search.length > 0) ? URL_PRODUCTS + '/' + searchCtx.search : URL_PRODUCTS;
      fetch(search_url).then(response => {
         return response.json();
      }).then((realResponse) => {
         setProducts(realResponse.data)

      })
   }, [searchCtx]);

   return (
      <div className="flex-wrap flex container w-11/12 mx-auto">
         {products.map((product, key) =>
            <Product key={key} product={product} />
         )}
      </div>
   )
}

export default ProductsContainer;