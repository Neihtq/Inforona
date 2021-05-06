import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  update: {
    height: "60%",
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 8
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 8,
    height: "100%"
  },
});

class Displaycard extends React.Component {
    constructor(props) {
        super(props)
        this.didPress = this.didPress.bind(this);
    }

    didPress(e){
        console.log(e.target.getAttribute('index'))
    }

    render() {
        const {classes} = this.props;
        var cards = [];
        for (var i = 0; i < 6; i++) {
            cards.push(<Grid item xs={6}>
                <Paper elevation={3} className={classes.paper} index={i} onClick={this.didPress}>+</Paper>
            </Grid>)
        }
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.update}>xs=12</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>xs=12</Paper>
                </Grid>
                {cards}
            </Grid>
        )
    }
}

export default withStyles(styles)(Displaycard);