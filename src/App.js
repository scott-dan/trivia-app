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
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { deepOrange, purple } from "@material-ui/core/colors";

const baseURL = "https://opentdb.com/api.php?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 10,
      category: "",
      difficulty: "easy",
      questionType: "any",
      quizData: [],
    };
  }
  questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

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
              {<Quiz />}
              {/*this.Quiz()*/}
            </Route>
            <Route path="/">
              {/*<Home />*/}
              {this.Home()}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  fetchQuestions(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quizData: data.results });
        console.log(this.state.quizData);
      })
      .catch((error) => {
        console.log("Request Failed", error);
        //NEED TO ADD SOME SORT OF OUTPUT HERE FOR DIFFERENT RESPONSE CODES
      });
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
                  onClick={() => this.fetchQuestions(quizURL)}
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
}

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

export default App;

  class Quiz extends React.Component {
    constructor(props) {
      super(props)
      console.log(this.props.quizData)
    }
    render() {
      return(
      <div className="App">
        <header className="App-header">
          <Container className="QContainer" maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className="paper">
                  <div className="QuestionArea">
                    <Typography variant="h5" component="div">
                      QUESTION: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do tempor incididunt ut labore et
                      dolore magna aliqua?
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained">
                  {/* // color="primary"
                                //onClick={() => (window.location.href = "questions.html")} */}
                  <div className="Answer1">
                    <InputLabel htmlFor="grouped-native-select">
                      A. PLACEHOLDER FOR AN ANSWER
                    </InputLabel>
                  </div>
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  // color="primary"
                  //onClick={() => (window.location.href = "questions.html")}
                >
                  <div className="Answer2">
                    <InputLabel htmlFor="grouped-native-select">
                      A. PLACEHOLDER FOR AN ANSWER
                    </InputLabel>
                  </div>
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  // color="primary"
                  //onClick={() => (window.location.href = "questions.html")}
                >
                  <div className="Answer3">
                    <InputLabel htmlFor="grouped-native-select">
                      A. PLACEHOLDER FOR AN ANSWER
                    </InputLabel>
                  </div>
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  // color="primary"
                  //onClick={() => (window.location.href = "questions.html")}
                >
                  <div className="Answer4">
                    <InputLabel htmlFor="grouped-native-select">
                      A. PLACEHOLDER FOR AN ANSWER
                    </InputLabel>
                  </div>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </header>
      </div>
      );
    }
  }

/*
function fetchQuestions(url) {
  fetch(url)
    .then((response) => response.json())
    .then((questions) => {
      this.setState({ jsondata: questions.results });
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
*/
