"use client";

import { useParams } from "next/navigation"

export default function ChartedResults() {
    const { querystring } = useParams();
    const axisTotals = querystring[0]?.split('%2C');
    if(axisTotals.length < 8) return <h3>Los resultados almacenados estan incompletos o corruptos.</h3>
    console.log(axisTotals.length);
    return(
        <p>{axisTotals.map(total => ` ${total} `)}</p>
    )
}