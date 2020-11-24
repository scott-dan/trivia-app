import React, {Component} from "react";
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
import Questions from "./questions";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          slider: 0,
          category: "any",
          difficulty: "easy",
          questionType: "any",
        //   condition: false 
        };
        // this.ToQuestion = this.ToQuestion.bind(this);
      }
    // ToQuestion(){
    //     return(
    //       <Questions />  
    //     );
        // this.setState({condition})
        // return(
        //     <Questions />
        // );
    // }

    render(){
        const { condition } = this.state;
        return(
            <div className="Main">
            <header className="App-header">
                <img
                    src="http://www.pngmart.com/files/8/Colorful-Smoke-Transparent-Background.png"
                    className="App-logo"
                    alt="logo"
                />
                </header>
                <body className="App-body">
                <Container maxWidth="sm">
                    <Box my={3}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to The Trivia App!
                    </Typography>
                    </Box>
                </Container>
                <div className='input'>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className='paper'>
                        <Typography id="qCountSelect" gutterBottom>
                        Select the Number of Questions to Play
                        </Typography>
                        <Slider
                        defaultValue={10}
                //        getAriaValueText={valuetext}
                        aria-labelledby="qCountSelect"
                        step={1}
                        marks
                        min={0}
                        max={50}
                        valueLabelDisplay="auto"
                        />
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                    <Paper className='paper'>
                        <InputLabel htmlFor="grouped-native-select">
                        Category
                        </InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                        <option value="any">Any</option>
                        <optgroup label="General">
                            <option value="9">General Knowledge</option>
                            <option value="art">Art</option>
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
                    <Paper className='paper'>
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
                        <Select native defaultValue="easy" id="grouped-native-select">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        </Select>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                    <Paper className='paper'>
                        <FormLabel component="legend">Select Question Type:</FormLabel>
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
                        <Select native defaultValue="any" id="grouped-native-select">
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
                        onClick={() => (window.location.href = "questions.html")}
                        // onClick={() => this.ToQuestion(true)}
                        >
                        Start Quiz!
                        </Button>
                    </Grid>
                </Grid>
                </div>
            </body>
            </div>
        );
    }
}

// render(<App />, document.getElementById("root"));

// export default props => (
//     < >
//         Main view{" "}
//         <button value ={1} onClick={props.clickBtn}>
//             questions
//         </button>{" "}
//     </>

// );
export default Main;