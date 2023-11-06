import { Suspense } from "react";
import Albums from "./Albums";

export default function Artists({name}){
    return (
        <>
        <h1>{name}</h1>
        <Suspense fallback={<Loading/>}>
            <Albums name={name}/>
        </Suspense>
        </>
    )
}

function Loading (){
    return <h2> Loading...</h2>
}