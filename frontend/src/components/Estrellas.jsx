import React from "react";

export default function Estrellas({estrellas}){
    return  <div className="items-center flex">
    {[...Array(estrellas)].map((item,i)=>(<em key={i} className="iconoir-star text-yellow-500"></em>))}
    {[...Array(5-estrellas)].map((item,i)=>(<em key={i} className="iconoir-star-dashed text-gray-400"></em>))}
</div>
}