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
import Quiz from "./Quiz"
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

  // Update States
  updateSlider = (event, newSlider) => {
    this.setState({ slider: newSlider, showQButton: false });
  };

  updateCategory = (event) => {
    this.setState({ category: event.target.value, showQButton: false });
  };

  updateDifficulty = (event) => {
    this.setState({ difficulty: event.target.value, showQButton: false });
  };

  updateQuestionType = (event) => {
    this.setState({ questionType: event.target.value, showQButton: false });
  };

  updateShowQButton = () => {
    this.setState({ showQButton: true });
  };


  //Navbar render
  render() {
    if (this.state.showQButton) {
      return (
        <Router>
          <div className="nav-container">
            <nav>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={9}>
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      New Game
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <Link to="/quiz">
                    <Button variant="contained" color="secondary">
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
    } else {
      return (
        <Router>
          <div className="nav-container">
            <nav>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Link to="/">
                    <Button variant="contained" color="primary">
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

  //API query - sets state.quizData to data.results to be used to
  //generate quiz question and answers
  fetchQuestions(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        switch (data.response_code) {
          case 0:
            console.log("Success", data);
            this.setState({ quizData: data.results });
            break;
          case 1:
            alert(
              "The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)"
            );
            throw new Error("Could not return results.");
          case 2:
            alert("Arguements passed in aren't valid. (Ex. Amount = Five)");
            throw new Error("Query contains an invalid parameter.");
          case 3:
            alert("Session Token does not exist.");
            throw new Error("Session Token does not exist.");
          case 4:
            alert(
              "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary."
            );
            throw new Error(
              "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary."
            );
          default:
        }
      })
      .catch((error) => {
        console.log("Request Failed", error);
      });
  }

  //Creates URL based on states to be used to fetch questions
  Home() {
    var qURL = createURL(
      baseURL,
      this.state.slider,
      this.state.category,
      this.state.difficulty,
      this.state.questionType
    );
    //render home screen
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
              {/* Slider used to select number of questions */}
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
              {/* drop down used to select category of questions */}
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
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>

                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                    </optgroup>

                    <optgroup label="Entertainment">
                      <option value="10">Books</option>
                      <option value="11">Film</option>
                      <option value="12">Music</option>
                      <option value="13">Musicals & Theatres</option>
                      <option value="14">Television</option>
                      <option value="15">Video Games</option>
                      <option value="16">Board Games</option>
                      <option value="26">Celebrities</option>
                      <option value="29">Comics</option>
                      <option value="31">Anime & Manga</option>
                      <option value="32">Cartoons</option>
                    </optgroup>

                    <optgroup label="Science">
                      <option value="17">Nature</option>
                      <option value="18">Computers</option>
                      <option value="19">Mathematics</option>
                      <option value="30">Gadgets</option>
                    </optgroup>
                  </Select>
                </Paper>
              </Grid>
              {/* drop down used to select difficulty of questions */}
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
              {/* drop down used to select type of questions */}
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
              {/* Button used to generate quiz */}
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
                  Create Trivia Game
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

//Build url based on states
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




