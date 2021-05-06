import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DisplayCards from '../components/DisplayCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class DashboardView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <DisplayCards/>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardView);