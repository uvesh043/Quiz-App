import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import axios from "axios";
import Result from "./Pages/Result/result";
import { useState } from "react";
function App() {
  const [questions, setQuestions] = useState();
  const [results,setResults ] = useState();
  const [name,setName]=useState()
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      // `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
      `https://opentdb.com/api.php?amount=5${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
  //  console.log(data);
  setResults(data)
    setQuestions(data.results);
  };
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}  score={score} setScore={setScore}/>
          </Route>
          <Route path="/quiz" >
            <Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} results={results}/>
          </Route>
          <Route path="/result" >
            <Result name={name} score={score}/>
          </Route> 
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
