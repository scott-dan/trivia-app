import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import Select from "@material-ui/core/Select";
// import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
// import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        height: 50,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

// class Questions extends Component {
    // constructor(props) {
    //     super(props);
    //   }

    // render(){
export default function Questions() {
    const classes = useStyles();
        return(
            <div className="Main">
            <header className="App-header">
                {/* <img
                    src="http://www.pngmart.com/files/8/Colorful-Smoke-Transparent-Background.png"
                    className="App-logo"
                    alt="logo"
                /> */}
                </header>
                <body className="App-body">
                <Container maxWidth="sm">
                    <Box my={3}>
                    <Typography variant="h5" component="h1" gutterBottom>
                       QUESTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do  tempor incididunt ut labore et dolore magna aliqua? 
                    </Typography>
                    </Box>
                </Container>
                <div className='input'>
                <Grid container spacing={3}
                    alignItems="center">
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <InputLabel htmlFor="grouped-native-select">
                        A. ANSWER CHOICE HERE
                        </InputLabel>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <InputLabel htmlFor="grouped-native-select">
                        B. ANSWER CHOICE HERE
                        </InputLabel>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <InputLabel htmlFor="grouped-native-select">
                        C. ANSWER CHOICE HERE
                        </InputLabel>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <InputLabel htmlFor="grouped-native-select">
                        D. ANSWER CHOICE HERE
                        </InputLabel>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={() => (window.location.href = "questions.html")}
                        >
                        Submit Answer!
                        </Button>
                    </Grid>
                </Grid>
                </div>
            </body>
            </div>
        );
    }
//     }
// }


//export defualt props => "questions";

