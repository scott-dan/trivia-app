import "./App.css";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

function App() {
  const [value, setValue] = React.useState("easy");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    multipleChoice: false,
    binary: false,
  });
  const { multipleChoice, binary } = state;

  const useStyles = makeStyles((theme) => ({
    input: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="http://www.pngmart.com/files/8/Colorful-Smoke-Transparent-Background.png"
          className="App-logo"
          alt="logo"
        />
        <Container maxWidth="md">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to The Trivia App!
            </Typography>
          </Box>
        </Container>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Typography id="qCountSelect" gutterBottom>
                  Select the Number of Questions to Play
                </Typography>
                <Slider
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  aria-labelledby="qCountSelect"
                  step={1}
                  marks
                  min={0}
                  max={50}
                  valueLabelDisplay="auto"
                /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><InputLabel htmlFor="grouped-native-select">
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
                  </Select></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><FormLabel component="legend">Quiz Difficulty:</FormLabel>
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
                  <FormHelperText>Good Luck</FormHelperText></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><FormLabel component="legend">
                    Select Question Type:
                  </FormLabel>
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
                  </FormGroup></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Button variant="contained" href="/quiz" color="primary">
                Start Quiz!
              </Button></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
