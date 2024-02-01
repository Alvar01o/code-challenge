"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductsContainer from "./Components/ProductsContainer";
import { SearchContext } from "./store/SearchContext";
import ResultLabel from "./Components/ResultLabel";
export default function Home() {
  const [searchState, setSearchState] = useState('');

  const ctxValue = {
    search: searchState,
    updateSearch: (value:string) => {
      setSearchState(value);
    }
  }
  return (
    <SearchContext.Provider value={ctxValue}>
      <main className="bg-white">
        <Navbar></Navbar>
        <ResultLabel resultName="Resultados para:"></ResultLabel>
        <ProductsContainer></ProductsContainer>
      </main>
    </SearchContext.Provider>
  );
}
