import "./App.css";
//import React from "react";
import React, {Component} from "react";
import Main from "./main.js";
import Questions from "./questions";
import Questions_tf from "./questions-tf";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
// import Select from "@material-ui/core/Select";
// import Slider from "@material-ui/core/Slider";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormLabel from "@material-ui/core/FormLabel";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";


class App extends Component {
    // constructor(props) {
    //   super(props);
    // state = {
    //   renderView: 0
    // };
    render() {
      return (
          // <Main />
          <Questions_tf />
      );
    }
}
export default App;
