import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    update: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 8,
        marginLeft: 30,
        marginRight: 30
    }
})

class UpdateBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const {classes} = this.props;
        return(
            <Grid item xs={12}>
                <Paper elevation={3} className={classes.update}>
                    <Typography variant='subtitle1'>
                        Datenstand: {this.props.dateTime}
                    </Typography>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(UpdateBar);