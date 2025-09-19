import { useEffect, useState } from "react";

function EffectDemo(){
    const [count,setcount]=useState(0)

    useEffect(()=>{
        console.log("Composant monté !")
    },[])
    useEffect(() => {
  console.log("Le compteur a changé :", count);
}, [count]);
    return(
        <>
        <div>{count}</div>
        <button onClick={()=>{setcount(count+1)}}>Incrémenter</button>
        </>
    )
}