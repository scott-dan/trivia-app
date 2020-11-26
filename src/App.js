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

const baseURL = "https://opentdb.com/api.php?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 10,
      category: "",
      difficulty: "easy",
      questionType: "any",
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
                    //        getAriaValueText={valuetext}
                    aria-labelledby="qCountSelect"
                    step={1}
                    marks
                    min={0}
                    max={50}
                    valueLabelDisplay="auto"
                    //onChange={this.updateSlider}
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
                  {/*
                  <RadioGroup
                    aria-label="difficulty"
                    name="difficulty"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="easy"
                      control={<Radio />}
                      label="Easy"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="Medium"
                    />
                    <FormControlLabel
                      value="hard"
                      control={<Radio />}
                      label="Hard"
                    />
                  </RadioGroup>
                  */}
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
                  {/*}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={multipleChoice}
                          onChange={handleCheckboxChange}
                          name="multipleChoice"
                        />
                      }
                      label="Multiple Choice"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={binary}
                          onChange={handleCheckboxChange}
                          name="binary"
                        />
                      }
                      label="True or False"
                    />
                  </FormGroup>
                    */}
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
}

export default App;

export var QuizData = [
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

function fetchQuestions(url) {
  fetch(url)
    .then((response) => response.json())
    .then((questions) => {
      QuizData = questions;
      console.log(QuizData);
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
