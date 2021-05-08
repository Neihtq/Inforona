import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 12
  },
}))


const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const classes = useStyles();

    const containerStyles = {
      height: 7,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 8,
      marginTop: 15,
      marginLeft: 15,
      width: '35vw'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }

    return (
      <Grid container className={classes.root} spacing={2}>
          <div style={containerStyles}>
            <div style={fillerStyles}/>
          </div>
          <Typography variant='subtitle2' align='right' style={{marginTop: 11, fontSize: '9px'}}>
              {completed}%
          </Typography>
      </Grid>
    );
  };
  
  export default ProgressBar;