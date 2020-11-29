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

const port = process.env.PORT || 3000;
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
      showQButton: false,
    };
  }

  updateSlider = (event, newSlider) => {
    this.setState({ slider: newSlider, showQButton: false });
  };

  updateCategory = (event) => {
    this.setState({ category: event.target.value, showQButton: false });
  };

  updateDifficulty = (event) => {
    this.setState({ difficulty: event.target.value, showQButton: false});
  };

  updateQuestionType = (event) => {
    this.setState({ questionType: event.target.value, showQButton: false });
  };

  updateShowQButton = () => {
    this.setState({ showQButton: true });
  };

  render() {
    if(this.state.showQButton){
      return (
        <Router>
          <div className="nav-container">
            <nav>
            <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link to="/">
                <Button
                variant="contained"
                color="primary"
                >

                  New Game
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12}>
                  <Link to="/quiz">
                    <Button
                    variant="contained"
                    color="secondary"
                    >
                      Start Trivia
                    </Button>
                  </Link>
            </Grid>
            </Grid>
            </nav>
            <Switch>
              <Route path="/quiz">{<Quiz {...this.state} />}</Route>
              <Route path="/">
                {/*<Home />*/}
                {this.Home()}
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    else{
      return (
        <Router>
          <div className="nav-container">
            <nav>
            <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link to="/">
                <Button
                variant="contained"
                color="primary"
                >
                  New Game
                </Button>
              </Link>
            </Grid>
            </Grid>
            </nav>
              <Route path="/">
                {/*<Home />*/}
                {this.Home()}
              </Route>
          </div>
        </Router>
      );

    }
  }

  fetchQuestions(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quizData: data.results });
        //console.log("if we got here, we're fine", this.state);
      })
      .catch((error) => {
        console.log("Request Failed", error);
        //NEED TO ADD SOME SORT OF OUTPUT HERE FOR DIFFERENT RESPONSE CODES
      });
  }

  Home() {
    var qURL = createURL(
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
            src="http://static.pokemonpets.com/images/monsters-images-800-800/2143-Shiny-Snorlax.png"
            className="App-logo"
            alt="logo"
          />
          <Container maxWidth="sm">
            <Box my={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to The Trivia App!
              </Typography>
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
                  onClick={() => {
                    this.fetchQuestions(qURL);
                    console.log(qURL);
                    setTimeout(() => {
                      console.log(this.state);
                    }, 1000);
                    this.updateShowQButton();
                  }}
                >
                  Retrive Questions!
                </Button>
              </Grid>
              
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

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

class Quiz extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      answers: [],
      score: 0,
      currentIndex: 0,
    };
  }

  componentDidMount() {
    if(this.indexCheck(this.state.currentIndex) === false){
      console.log("Component did mount!");
      var correct = this.props.quizData[this.state.currentIndex].correct_answer;
      var incorrect = this.props.quizData[this.state.currentIndex]
        .incorrect_answers;
      var shuffled = shuffleAnswers(correct, incorrect);
      this.setState({ answers: shuffled });
      this.buildAnswerArray();
    }
  }

  buildAnswerArray() {
    var correct = this.props.quizData[this.state.currentIndex].correct_answer;
    var incorrect = this.props.quizData[this.state.currentIndex]
      .incorrect_answers;
    var shuffled = shuffleAnswers(correct, incorrect);
    this.setState({ answers: shuffled });
  }

  checkAnswer(answer) {
    var correct = this.props.quizData[this.state.currentIndex].correct_answer;
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
    }
    
    if(this.indexCheck(this.state.currentIndex) === false){
      this.incrementQuestion();
    }
  }

  incrementQuestion(){
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    setTimeout(() => {
      this.componentDidMount();
      this.render();
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log(this.props);
    }
  }

  indexCheck(num){
    if(num === this.props.slider){
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    var current = this.state.currentIndex;
    if(this.indexCheck(current)){
      return (
        <div className="Go-Home">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className="paper">
                    <div className="QuestionArea">
                      <Typography variant="h5" component="div">
                        <h1>
                          Final Score: {this.state.score}/{this.props.quizData.length}
                        </h1>
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    window.location.assign(`http://localhost:${port}/`)}}
                  >
                    Start Again
                </Button>
              </Grid>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <header className="App-header">
          <h1>
              Current Question: {this.state.currentIndex + 1}/{this.props.quizData.length}
            </h1>
            <Container className="QContainer" maxWidth="md">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className="paper">
                    <div className="QuestionArea">
                      <Typography variant="h5" component="div">
                        {this.props.quizData[this.state.currentIndex].question}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => this.checkAnswer(this.state.answers[0])}
                  >
                    <div className="Answer1">
                      <InputLabel htmlFor="grouped-native-select">
                        {this.state.answers[0]}
                      </InputLabel>
                    </div>
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => this.checkAnswer(this.state.answers[1])}
                  >
                    <div className="Answer2">
                      <InputLabel htmlFor="grouped-native-select">
                        {this.state.answers[1]}
                      </InputLabel>
                    </div>
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => this.checkAnswer(this.state.answers[2])}
                  >
                    <div className="Answer3">
                      <InputLabel htmlFor="grouped-native-select">
                        {this.state.answers[2]}
                      </InputLabel>
                    </div>
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    onClick={() => this.checkAnswer(this.state.answers[3])}
                  >
                    <div className="Answer4">
                      <InputLabel htmlFor="grouped-native-select">
                        {this.state.answers[3]}
                      </InputLabel>
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </Container>
            <h1>
              Current Score: {this.state.score}/{this.props.quizData.length}
            </h1>
          </header>
        </div>
      );
    }
  }
}
