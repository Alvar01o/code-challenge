
"use client";
import { SearchContext } from "../store/SearchContext";
import { useContext } from "react";

const ResultLabel: React.FC<{resultName: string}> = (props) => {
    const cntx = useContext(SearchContext);
    return (
        <div className="text-lg font-bold py-3 px-2">
          {props.resultName} <b>{cntx.search}</b>
        </div>
    )
}

export default ResultLabel;