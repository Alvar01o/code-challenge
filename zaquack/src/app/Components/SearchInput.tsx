
"use client";
import { useState, useContext } from "react";
import { SearchContext } from "../store/SearchContext";

const SearchInput: React.FC<{searchplaceholder: string, onTriggerSearch: (value: string) => void}> = (props) => {
    const [search, setSearch] = useState('');
    const searchCtx = useContext(SearchContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 3) {
            searchCtx.updateSearch(e.target.value)
        } else if(e.target.value.length === 0) {
            searchCtx.updateSearch(e.target.value)
        }
    }

    return (
        <div className="items-center bg-white rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
            <input type="text" value={search} onChange={handleInputChange} name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={props.searchplaceholder} />
        </span>
    </div>
    )
}

export default SearchInput;