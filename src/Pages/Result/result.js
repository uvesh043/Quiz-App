import React from "react";
import './result.css'
const Result=(props)=>{
    const {name,score}=props
    // console.log("This is result page"+name);
    console.log("This is result page and score is"+score);

    return (
        <div className="resultPage">
          <h1>{name}</h1>
          <h1>{score}</h1>
        </div>
    )
}

export default Result; 