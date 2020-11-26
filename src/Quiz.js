import "./App.css";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { QuizData } from "./App"; //I think I need this here to pull question data

/*
var QuizData = {
    response_code: 0,
    results: [
      {
        category: "Animals",
        type: "boolean",
        difficulty: "medium",
        question: "An octopus can fit through any hole larger than its beak.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
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
        category: "Science: Mathematics",
        type: "multiple",
        difficulty: "hard",
        question:
          "Which of the following famous mathematicians died in a duel at the age of 20?",
        correct_answer: "Galois",
        incorrect_answers: ["Abel", "Euler", "Gauss"],
      },
    ],
  };
  */

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].incorrect_answers,
        answer: QuizData[currentIndex].correct_answer,
      };
    });
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex != prevState.currentIndex) {
      this.setState(() => {
        return {
          question: QuizData[currentIndex].question,
        };
      });
    }
  }

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state;
    return (
      /*
      <div className="App">
        <header className="App-header">
          <Container maxWidth="sm">
            <Box my={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                Good Luck!
              </Typography>
            </Box>
          </Container>
          <div className="question">
            <Paper className="paper">
              <Typography id="currentQuestion" gutterBottom>
                <p>{question}</p>
                <span>
                  Question {currentIndex + 1} of {QuizData.length}
                </span>
              </Typography>
            </Paper>
          </div>
          <div className="answers">
            <Grid container spacing={1}>
              {options.map((option) => (
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    key={option.id}
                    className={`options ${
                      userAnswer === option ? "selected" : null
                    }`}
                    onClick={() => this.checkAnswer(option)}
                  >
                    <Typography id="answer1" gutterBottom>
                      {option}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </header>
      </div>
      */
      <div className="app">
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
              <div className="question-text">{question}</div>
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

export default Quiz;
