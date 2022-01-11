import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./quiz.css";
const Quiz = (props) => {
    const { name, questions,  results,secore,setSecore} = props;
  console.log("This is quiz page score"+secore);
  // console.log(name, questions, results);
  return (
    <div className="quiz">
      {/* <Button variant="contained" onClick={handlebtn}>
        Default
      </Button> */}
      <span className="Welcome_msg">Welcome {name}</span>
      <Question name={name} questions={questions} secore={secore} setSecore={setSecore} results={results} />
    </div>
  );
};

export default Quiz;
