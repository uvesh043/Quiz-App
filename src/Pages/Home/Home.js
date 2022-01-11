import React, { useEffect, useState } from "react";
import "./home.css";
import { MenuItem, TextField, Button } from "@material-ui/core";
import Categories from "../Data/Category";
import { useHistory } from "react-router-dom";
const Home = (props) => {
  const fetchQuestions = props.fetchQuestions;
  const history = useHistory();
  const {name,setName,score,setSecore}=props
  console.log("This is home page"+name);
  const [category, setCategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  
  const [error, setError] = useState(false);
  const handleStartBtn = async () => {
    console.log(name, category, difficulty);
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };
  return (
    <>
      <div className="content">
        <div className="setting">
          <span
            className="quizSetting"
            style={{ fontSize: 30, textAlign: "center" }}
          >
            Quiz Setting
          </span>
          <div className="quiz_setting">
            {error ? <h3 className="errorMsg">Please Filled all field</h3> : ""}

            <TextField

              id="outlined-basic"
              label="Select Your Name"
              variant="outlined"
              // value={name}
              autoComplete="off"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              className="selectTextField"
              select
              label="Select Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              variant="outlined"
              style={{ marginBottom: 10 }}
            >
              {Categories.map((Category) => (
                <MenuItem key={Category.category} value={Category.value}>
                  {Category.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="selectTextField"
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => {
                setdifficulty(e.target.value);
              }}
              variant="outlined"
              style={{ marginBottom: 10 }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button
              onClick={handleStartBtn}
              variant="contained"
              color="primary"
              style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
              size="large"
            >
              Start
            </Button>
          </div>
        </div>
        <img className="banner" src="/undraw_quiz_nlyh.png" alt="home"></img>
      </div>
    </>
  );
};
export default Home;
