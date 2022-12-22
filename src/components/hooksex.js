import React,{useState} from 'react'
const HookEx=()=>{
    const handelEvent=()=>{
        return(
            setText("I miss U Also ma")
        );
    };
    const [text,setText]=useState("I love you Gulu");
    return(
        <>
        <h1>Text is:{text}</h1>
        <button className="btn btn-primary"  onClick={handelEvent}>Auu Kuha Etiki Habani</button>
        </>
    )
}
export default HookEx;