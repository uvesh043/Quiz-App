import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Loading from "../LoadingPages/loading";
// import Result from "../Result/result";
import { useHistory } from "react-router";
import "./question.css";
const Question = (props) => {
  const history = useHistory();
  const { name, questions, secore, setSecore, results } = props;
  console.log("This is question page"+name);
  const [currentOption, setCurrentOption] = useState();
  const [options, setOptions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setOptions(
      questions &&
        shuffleOptions([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );

    // console.log("This is question" + questions);
  }, [currentQuestion, questions]);
  const shuffleOptions = (fourOptions) => {
    // console.log(fourOptions.sort(() => Math.random() - 0.5));
    return fourOptions.sort(() => Math.random() - 0.5);
  };
  const handelOptions = (option) => {
    const correct_answer = results.results[currentQuestion].correct_answer;
    // console.log(option);
    if (selected == option && selected == correct_answer) {
      return "right";
    } else if (selected == option && selected != correct_answer) {
      return "wrong";
    }
  };
  const handleSelect = (option) => {
    const correct_answer = results.results[currentQuestion].correct_answer;
    // console.log(correct_answer);
    if (option === correct_answer) {
      setSelected(option);
      setSecore(secore + 1);
      setError(true);
    } else {
    }
  };
  const handleNext = () => {
    console.log(currentQuestion);
    if (currentQuestion > 3) {
      
      history.push("/result")
      console.log("We are last page");
     } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {setError("Please select an option first")}
  };

  const handleQuit = () => {
    history.push("/");
  };
  return (
    <>
      <div className="info_box">
        <span>
          {questions ? results.results[currentQuestion].category : "Category"}
        </span>
        <span>{`secore:${secore}`}</span>
      </div>
      <span className="question_no">{`Question :${currentQuestion+1}`}</span>
      <div className="question_box">
        <span className="question_heading">
          {questions ? results.results[currentQuestion].question : ""}
        </span>
        <div className="question_options">
          {questions ? (
            <>
              {options &&
                options.map((option, index) => {
                  return (
                    <button
                      className={`option ${handelOptions(option)}`}
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{ width: 280, marginTop: 16 }} // href="/" key={option}
                      key={option}
                      disabled={selected}
                      onClick={() => handleSelect(option, results)}
                    >
                      {option}
                    </button>
                  );
                })}
              <div className="quit_nextQuestion">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ width: 180, marginTop: 16 }}
                  // href="/"
                  onClick={() => handleQuit()}
                >
                  Quit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ width: 180, marginTop: 16 }}
                  // href="/"
                  onClick={() => handleNext()}
                >
                  Next Question
                </Button>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};
export default Question;
