import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountryCard from './CountryCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  update: {
    height: "5vh",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 8,
  },
  main: {
    height: "40vh",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 8,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    margin: 8,
    height: "20vh"
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Displaycard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;

        return(
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.paper}>+</Paper>
          </Grid>
        )
    }
}

export default withStyles(styles)(Displaycard);