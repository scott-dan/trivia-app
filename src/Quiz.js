import "./App.css";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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

  //Shuffle answer choices and return a new array
  shuffleAnswers(correct_answer, incorrect_answers) {
    var oldArr = correct_answer + "," + incorrect_answers;
    oldArr = oldArr.split(",");
    var newArr = [];
    for (let i in oldArr) {
        var j = this.getRandomInt(oldArr.length);
        while (newArr[j] != null) {
          j++;
          j = j % 4;
        }
        newArr[j] = oldArr[i];
    }
    return newArr;
  }

  //Returns a random integer
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //verify the component did mount, set state of answers array, and build
  //the answer array if the quiz is not completed
  componentDidMount() {
    if (this.indexCheck(this.state.currentIndex) === false) {
      console.log("Component did mount!");
      var correct = this.props.quizData[this.state.currentIndex].correct_answer;
      var incorrect = this.props.quizData[this.state.currentIndex]
        .incorrect_answers;
      var shuffled = this.shuffleAnswers(correct, incorrect);
      this.setState({ answers: shuffled });
      this.buildAnswerArray();
    }
  }

  //Answer choices populate a new shuffled array, set state to shuffled array
  buildAnswerArray() {
    var correct = this.props.quizData[this.state.currentIndex].correct_answer;
    var incorrect = this.props.quizData[this.state.currentIndex]
      .incorrect_answers;  
    var shuffled = this.shuffleAnswers(correct, incorrect);
    this.setState({ answers: shuffled });
  }

  //Keep track of the score by incrementing state.score when the answer
  //matches the correct answer. Increment to the next question when done if
  //not at the end of the quiz
  checkAnswer(answer) {
    var correct = this.props.quizData[this.state.currentIndex].correct_answer;
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
    }

    if (this.indexCheck(this.state.currentIndex) === false) {
      this.incrementQuestion();
    }
  }

  //increments the current index of questions
  //timeout used so components can mount and properly render
  incrementQuestion() {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    setTimeout(() => {
      this.componentDidMount();
      this.render();
    }, 500);
  }

  //verify componenet was updated
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log(this.props);
    }
  }

  //verify if the quiz has ended and returns true if it has ended
  indexCheck(num) {
    if (num === this.props.slider) {
      return true;
    } else {
      return false;
    }
  }

  //verify the question is multiple choice and return true
  checkQType(type) {
    if (type !== "boolean") return true;
    else return false;
  }

  //replaces characters and formats for display
  scrubQuestion(string) {
    var q = string;
    q =  q.replaceAll("&#039;", "'");
    q =  q.replaceAll("&quot;", "\"");
    q =  q.replaceAll("&amp;", "&");
    q =  q.replaceAll("&Umml", "Ü");
    q =  q.replaceAll("&rsquo;", "'");
    return q;
  }

  //rend the quiz
  render() {
    var current = this.state.currentIndex;

    // End of the Quiz
    if(this.indexCheck(current)){
      return (
        <div className="Go-Home">
          <Container className="GoHome-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className="paper" elevation={4}>
                <div className="QuestionArea">
                  <Typography variant="h5" component="div">
                    <h1>
                      Final Score: {this.state.score}/
                      {this.props.quizData.length}
                    </h1>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
          </Container>
        </div>
      );
    }
    //Render question and answers
    else{
      //Film category
      if(this.props.category === "11"){
          var qType = this.props.quizData[this.state.currentIndex].type;
          //Question is multiple choice
          if (this.checkQType(qType)) {
            return (
              <div className="App">
                {/* Multiple Choice Question */}
                <header className="App-header-Film">
                  <div className="QCount">
                    <h1>
                      Current Question: {this.state.currentIndex + 1}/
                      {this.props.quizData.length}
                    </h1>
                  </div>
                  <Container className="QContainer" maxWidth="md">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper className="paper" elevation={4}>
                          <div className="QuestionArea-Film">
                            <Typography variant="h5" component="div">
                              {
                                this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                  .question)
                              }
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                      {/* Answer choices */}
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
                  <div className="Score">
                  <p>
                    Score: {this.state.score}/{this.props.quizData.length}
                  </p>
                  </div>
                </header>
              </div>
            );

          //Question is true or false
          } else {
            return (
              <div className="App">
                {/* True of False Question */}
                <header className="App-header-Film">
                  <h1>
                    Current Question: {this.state.currentIndex + 1}/
                    {this.props.quizData.length}
                  </h1>
                  {/* True of False Answer choices */}
                  <Container className="QContainer" maxWidth="md">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper className="paper" elevation={4}>
                          <div className="QuestionArea-Film">
                            <Typography variant="h5" component="div">
                              {
                                this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                  .question)
                              }
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
                    </Grid>
                  </Container>
                  <div className="Score-tf">
                  <p>
                    Score: {this.state.score}/{this.props.quizData.length}
                  </p>
                  </div>
                </header>
              </div>
            );
          }
        } 
        //Sports category
        else if(this.props.category === "21"){
            var qType = this.props.quizData[this.state.currentIndex].type;
            //Question is multiple choice
            if (this.checkQType(qType)) {
              return (
                <div className="App">
                  {/* Multiple Choice Question */}
                  <header className="App-header-Sports">
                    <div className="QCount">
                      <h1>
                        Current Question: {this.state.currentIndex + 1}/
                        {this.props.quizData.length}
                      </h1>
                    </div>
                    <Container className="QContainer-Sports" maxWidth="md">
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Paper className="paper-sports" elevation={4}>
                            <div className="QuestionArea-Sports">
                              <Typography variant="h5" component="div">
                                {
                                  this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                    .question)
                                }
                              </Typography>
                            </div>
                          </Paper>
                        </Grid>
                        {/* Answer choices */}
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
                    <div className="Score">
                    <p>
                      Score: {this.state.score}/{this.props.quizData.length}
                    </p>
                    </div>
                  </header>
                </div>
              );
  
            //Question is true or false
            } else {
              return (
                <div className="App">
                  {/* True of False Question */}
                  <header className="App-header-Sports">
                    <h1>
                      Current Question: {this.state.currentIndex + 1}/
                      {this.props.quizData.length}
                    </h1>
                    {/* True of False Answer choices */}
                    <Container className="QContainer-Sports" maxWidth="md">
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Paper className="paper-sports" elevation={4}>
                            <div className="QuestionArea-Sports">
                              <Typography variant="h5" component="div">
                                {
                                  this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                    .question)
                                }
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
                      </Grid>
                    </Container>
                    <div className="Score-tf">
                    <p>
                      Score: {this.state.score}/{this.props.quizData.length}
                    </p>
                    </div>
                  </header>
                </div>
              );
            }
          }
          //General category
          else{
            var qType = this.props.quizData[this.state.currentIndex].type;
            //Question is multiple choice
            if (this.checkQType(qType)) {
              return (
                <div className="App">
                  {/* Multiple Choice Question */}
                  <header className="App-header">
                    <h1>
                      Current Question: {this.state.currentIndex + 1}/
                      {this.props.quizData.length}
                    </h1>
                    <Container className="QContainer" maxWidth="md">
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Paper className="paper">
                            <div className="QuestionArea">
                              <Typography variant="h5" component="div">
                                {
                                  this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                    .question)
                                }
                              </Typography>
                            </div>
                          </Paper>
                        </Grid>
                        {/* Answer choices */}
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
                    <p>
                      <div className="Score">
                      Score: {this.state.score}/{this.props.quizData.length}
                      </div>
                    </p>
                  </header>
                </div>
              );

            //Question is true or false
            } else {
              return (
                <div className="App">
                  {/* True of False Question */}
                  <header className="App-header">
                    <h1>
                      Current Question: {this.state.currentIndex + 1}/
                      {this.props.quizData.length}
                    </h1>
                    {/* True of False Answer choices */}
                    <Container className="QContainer" maxWidth="md">
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Paper className="paper">
                            <div className="QuestionArea">
                              <Typography variant="h5" component="div">
                                {
                                  this.scrubQuestion(this.props.quizData[this.state.currentIndex]
                                    .question)
                                }
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
                      </Grid>
                    </Container>
                      <div className="Score-tf">
                    <p>
                      Score: {this.state.score}/{this.props.quizData.length}
                    </p>
                    </div>
                  </header>
                </div>
              );
            }
          }
    }
  }
}
export default Quiz;