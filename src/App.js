import "./App.css";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Quiz from "./Quiz";

const baseURL = "https://opentdb.com/api.php?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 10,
      category: "",
      difficulty: "easy",
      questionType: "any",
      userAnswer: null,
      currentIndex: 0,
      question: "",
      answers: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  updateSlider = (event, newSlider) => {
    this.setState({ slider: newSlider });
  };

  updateCategory = (event) => {
    this.setState({ category: event.target.value });
  };

  updateDifficulty = (event) => {
    this.setState({ difficulty: event.target.value });
  };

  updateQuestionType = (event) => {
    this.setState({ questionType: event.target.value });
  };

  render() {
    /*
    var quizURL = createURL(
      baseURL,
      this.state.slider,
      this.state.category,
      this.state.difficulty,
      this.state.questionType
    );
    */
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/quiz">
              {/*<Quiz />*/}
              {this.Quiz()}
            </Route>
            <Route path="/">
              {/*<Home />*/}
              {this.Home()}
            </Route>
          </Switch>
        </div>
      </Router>
      /*
      <div className="App">
        <header className="App-header">
          <img
            src="http://www.pngmart.com/files/8/Colorful-Smoke-Transparent-Background.png"
            className="App-logo"
            alt="logo"
          />
          <Container maxWidth="sm">
            <Box my={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to The Trivia App!
              </Typography>
              <p>{quizURL}</p>
            </Box>
          </Container>
          <div className="input">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className="paper">
                  <Typography id="qCountSelect" gutterBottom>
                    Select the Number of Questions to Play
                  </Typography>
                  <Slider
                    key={`slider-${this.state.slider}`}
                    defaultValue={this.state.slider}
                    aria-labelledby="qCountSelect"
                    step={1}
                    marks
                    min={0}
                    max={50}
                    valueLabelDisplay="auto"
                    onChangeCommitted={this.updateSlider}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper">
                  <InputLabel htmlFor="grouped-native-select">
                    Category
                  </InputLabel>
                  <Select
                    native
                    defaultValue={this.state.category}
                    id="grouped-native-select"
                    onChange={this.updateCategory}
                  >
                    <option value="">Any</option>
                    <optgroup label="General">
                      <option value="9">General Knowledge</option>
                      <option value="25">Art</option>
                    </optgroup>

                    <optgroup label="Entertainment">
                      <option value="10">Books</option>
                      <option value="11">Film</option>
                      <option value="12">Music</option>
                      <option value="13">Musicals & Theatres</option>
                      <option value="14">Television</option>
                      <option value="15">Video Games</option>
                      <option value="16">Board Games</option>
                    </optgroup>

                    <optgroup label="Science">
                      <option value="17">Nature</option>
                      <option value="18">Computers</option>
                      <option value="19">Mathematics</option>
                    </optgroup>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper">
                  <FormLabel component="legend">Quiz Difficulty:</FormLabel>
                  <Select
                    native
                    defaultValue="easy"
                    id="grouped-native-select"
                    onChange={this.updateDifficulty}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className='paper'>
                  <FormLabel component="legend">Select Question Type:</FormLabel>
                  <Select native defaultValue="any" id="grouped-native-select" onChange={this.updateQuestionType}>
                    <option value="any">Any</option>
                    <option value="boolean">True/False</option>
                    <option value="multiple">Mutliple Choice</option>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => fetchQuestions(quizURL)}
                  //onClick={() => (window.location.href = "questions.html")}
                >
                  Start Quiz!
                </Button>
              </Grid>
            </Grid>
          </div>
        </header>
      </div>
      */
    );
  }

  Home() {
    var quizURL = createURL(
      baseURL,
      this.state.slider,
      this.state.category,
      this.state.difficulty,
      this.state.questionType
    );
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="http://www.pngmart.com/files/8/Colorful-Smoke-Transparent-Background.png"
            className="App-logo"
            alt="logo"
          />
          <Container maxWidth="sm">
            <Box my={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to The Trivia App!
              </Typography>
              <p>{quizURL}</p>
            </Box>
          </Container>
          <div className="input">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className="paper">
                  <Typography id="qCountSelect" gutterBottom>
                    Select the Number of Questions to Play
                  </Typography>
                  <Slider
                    key={`slider-${this.state.slider}`}
                    defaultValue={this.state.slider}
                    aria-labelledby="qCountSelect"
                    step={1}
                    marks
                    min={0}
                    max={50}
                    valueLabelDisplay="auto"
                    onChangeCommitted={this.updateSlider}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper">
                  <InputLabel htmlFor="grouped-native-select">
                    Category
                  </InputLabel>
                  <Select
                    native
                    defaultValue={this.state.category}
                    id="grouped-native-select"
                    onChange={this.updateCategory}
                  >
                    <option value="">Any</option>
                    <optgroup label="General">
                      <option value="9">General Knowledge</option>
                      <option value="25">Art</option>
                    </optgroup>

                    <optgroup label="Entertainment">
                      <option value="10">Books</option>
                      <option value="11">Film</option>
                      <option value="12">Music</option>
                      <option value="13">Musicals & Theatres</option>
                      <option value="14">Television</option>
                      <option value="15">Video Games</option>
                      <option value="16">Board Games</option>
                    </optgroup>

                    <optgroup label="Science">
                      <option value="17">Nature</option>
                      <option value="18">Computers</option>
                      <option value="19">Mathematics</option>
                    </optgroup>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper">
                  <FormLabel component="legend">Quiz Difficulty:</FormLabel>
                  <Select
                    native
                    defaultValue="easy"
                    id="grouped-native-select"
                    onChange={this.updateDifficulty}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper">
                  <FormLabel component="legend">
                    Select Question Type:
                  </FormLabel>
                  <Select
                    native
                    defaultValue="any"
                    id="grouped-native-select"
                    onChange={this.updateQuestionType}
                  >
                    <option value="any">Any</option>
                    <option value="boolean">True/False</option>
                    <option value="multiple">Mutliple Choice</option>
                  </Select>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={() => startQuiz(quizURL)}
                  onClick={() => fetchQuestions(quizURL)}
                  //onClick={() => (window.location.href = "questions.html")}
                >
                  Start Quiz!
                </Button>
              </Grid>
            </Grid>
          </div>
        </header>
      </div>
    );
  }

  Quiz() {
    //const { question, options, currentIndex, userAnswer, quizEnd } = this.state;
    //this.setState.question(QuizData[this.currentIndex].question);
    return (
      <div className="quiz">
        {/* HINT: replace "false" with logic to display the 
score when the user has answered all the questions */}
        {false ? (
          <div className="score-section">
            You scored 1 out of {QuizData.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question 1</span>/{QuizData.length}
              </div>
              <div className="question-text">
                {this.question}
              </div>
            </div>
            <div className="answer-section">
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;

export var QuizData = [
  /*
  {
    category: "Entertainment: Comics",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the full first name of the babysitter in Calvin and Hobbes?",
    correct_answer: "Rosalyn",
    incorrect_answers: ["Rose", "Ruby", "Rachel"],
  },
  {
    category: "Animals",
    type: "boolean",
    difficulty: "medium",
    question: "An octopus can fit through any hole larger than its beak.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following famous mathematicians died in a duel at the age of 20?",
    correct_answer: "Galois",
    incorrect_answers: ["Abel", "Euler", "Gauss"],
  },
  */
];

function createURL(base, count, category, difficulty, type) {
  var apiURL = base;

  apiURL += "amount=" + count;
  if (category !== "any") {
    apiURL += "&category=" + category;
  }
  if (difficulty !== "any") {
    apiURL += "&difficulty=" + difficulty;
  }
  if (type !== "any") {
    apiURL += "&type=" + type;
  }
  return apiURL;
}

function startQuiz(url) {
  fetchQuestions(url);
  window.location.href = "quiz";
}

function fetchQuestions(url) {
  fetch(url)
    .then((response) => response.json())
    .then((questions) => {
      QuizData = questions.results;
      console.log(QuizData);
      console.log(QuizData.length);
    })
    .catch((error) => {
      console.log("Request Failed", error);
      //NEED TO ADD SOME SORT OF OUTPUT HERE FOR DIFFERENT RESPONSE CODES
    });
}

function createListItem(data) {
  var str =
    "<li>" +
    data.question +
    "<br>" +
    shuffleAnswers(data.correct_answer, data.incorrect_answers) +
    "</li>";
  return str;
}

function shuffleAnswers(correct_answer, incorrect_answers) {
  var oldArr = correct_answer + "," + incorrect_answers;
  //console.log(oldArr);
  oldArr = oldArr.split(",");
  //console.log(oldArr);
  var newArr = [];
  for (let i in oldArr) {
    var j = getRandomInt(oldArr.length);
    while (newArr[j] != null) {
      j++;
      j = j % 4;
      //console.log(j);
    }
    newArr[j] = oldArr[i];
  }
  return newArr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
