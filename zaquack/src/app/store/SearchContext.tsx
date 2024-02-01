"use client"; // This is a client component 👈🏽

import { createContext } from "react"

export const SearchContext = createContext({
    search: "",
    updateSearch: (value:string) => {

    }
})

