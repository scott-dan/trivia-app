import "./App.css";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

function App() {
  const [value, setValue] = React.useState("Easy");

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
          <Typography id="qCountSelect" gutterBottom>
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
          />
          <br />
          <FormControl>
            <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
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
            <br />
            <FormLabel component="legend">Quiz Difficulty:</FormLabel>
            <RadioGroup
              aria-label="difficulty"
              name="difficulty"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
            <FormHelperText>Good Luck</FormHelperText>
            <br />
              <FormLabel component="legend">Select Question Type:</FormLabel>
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
            <Button variant="contained" color="primary">
              Start Quiz!
            </Button>
          </FormControl>
        </Container>
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
