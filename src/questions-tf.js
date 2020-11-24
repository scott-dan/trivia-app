import React, {Component} from "react";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { deepOrange, purple } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    Button: {
        color: theme.palette.getContrastText(purple[500]),
        margin: 'auto',
        padding: '10px',
        maxWidth: '600px',
        minWidth: '400px',
        maxHeight: '100px',
        minHeight: '100px',
        backgroundColor: '#facd78',
        '&:hover': {
            backgroundColor: deepOrange[300],
        }
    },
    QPlacement: {
        padding: '35px',
    }
}));

export default function Questions_tf() {
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
                <body className="Q-Body">
                    <Container className="QContainer" maxWidth="md">
                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <Paper className={classes.QPlacement}>
                                    <div className="QuestionArea">
                                    <Typography variant="h5" component="div" >
                                    QUESTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do  tempor incididunt ut labore et dolore magna aliqua? 
                                    </Typography>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                className={classes.Button}
                                variant="contained"
                                >
                                {/* // color="primary"
                                //onClick={() => (window.location.href = "questions.html")} */}
                                <div className="Answer1">
                                <InputLabel htmlFor="grouped-native-select">
                                True
                                </InputLabel>

                                </div>
                                </Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                className={classes.Button}
                                variant="contained"
                                // color="primary"
                                //onClick={() => (window.location.href = "questions.html")}
                                >
                                <div className="Answer2">
                                <InputLabel htmlFor="grouped-native-select">
                                False
                                </InputLabel>

                                </div>
                                </Button>
                            </Grid>

                        </Grid>
                </Container>
            </body>
            </div>
        );
    }