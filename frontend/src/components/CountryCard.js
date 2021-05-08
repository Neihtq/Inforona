import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ProgressBar from "./ProgressBar";

const styles = theme => ({
    main: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 8,
    },
    parent: {
        display: 'flex',
    },
    narrow: {
        width: "50%",       
    },
    wide: {
        textAlign: 'left',
        flex: 1,
    },
    greenText: {
        color: '#90EE90'
    },
    orangeText: {
        color: '#FFA07A'
    },
    redText: {
        color: '#F08080'
    },
    barLabels: {
        paddingTop: 10,
        marginLeft: 8
    },
    incidence: {
        position: 'relative', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'        
    }
});

class CountryCard extends React.Component {
    constructor(props) {
        super(props)

        var bedStatus = 'good';
        if (this.props.beds > 66) {
            bedStatus = 'critical';
        } else if (this.props.beds > 33) {
            bedStatus = 'bad';
        }

        this.state = {
            bedStatus: bedStatus
        }
    }

    render() {
        const{classes} = this.props;
        const colors = {
            critical: '#F08080',
            bad: '#FFA07A',
            good: '#90EE90'
        }

        const typoColors = {
            critical: classes.redText,
            bad: classes.orangeText,
            good: classes.greenText
        }
        return(
            <Grid item xs={12} key="main">
                <Paper elevation={3} className={classes.main}>
                    <Typography gutterBottom variant="h5" style={{paddingTop: 5}}>
                        Deutschland
                    </Typography>
                    <Divider variant="middle" />
                    <div className={classes.parent}>
                        <div className={classes.narrow}>
                            <div className={classes.incidence}>
                                <Typography gutterBottom variant="h6">
                                    7-Tage-Inzidenz
                                </Typography>
                                <Typography 
                                    gutterBottom 
                                    variant="h4" 
                                    className={typoColors[this.props.status]}
                                >
                                    {this.props.incidence}
                                </Typography>
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className={classes.wide}>
                            <Typography variant='subtitle2' className={classes.barLabels}>1. Impfung</Typography>
                            <ProgressBar key={"quota1"} bgcolor={"#B0C4DE"} completed={this.props.quota1} />
                            <Typography variant='subtitle2' className={classes.barLabels}>2. Impfung</Typography>
                            <ProgressBar key={"quota2"} bgcolor={"#B0C4DE"} completed={this.props.quota2} />
                        </div>
                    </div>
                </Paper>
            </Grid>
        )                
    }
}

export default withStyles(styles)(CountryCard);