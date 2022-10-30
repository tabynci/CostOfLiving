import React,{useEffect} from "react";

//  API KEY :    AIzaSyA1pgLxx1_ejr5w-T61ZOZA1eaYz7Hnhtc

function GooogleMap(){
    useEffect(()=>{
        const iframeData=document.getElementById("iframeId")
       
    })
    return(
        <div>
            <iframe src="https://map.google.com/map?q=11.305385,40.923029&hl=es;&output=embed" />
        </div>
    )
}
export default GooogleMap;