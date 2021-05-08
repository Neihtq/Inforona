import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DisplayCards from '../components/DisplayCard';
import Grid from '@material-ui/core/Grid';
import CountryCard from '../components/CountryCard';
import UpdateBanner from '../components/UpdateBanner';
import CustomizedDialogs from '../components/AddCardDialog';
import HttpService from '../services/HttpService';

const styles = () => ({
  root: {
    flexGrow: 1,
  }
});

function floorTo2Digits(num){
    return Math.round((num + Number.EPSILON) * 100) / 100
}

class DashboardView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            incidence: 0.1,
            status: "critical",
            quota1: 0,
            quota2: 0,
            beds: 88
        }

        this.cards = []
        for (var i = 0; i < 6; i++) {
            this.cards.push(<DisplayCards key={i} />)
        }
    }

    popupAddCard() {

    }

    componentDidMount() {
        HttpService.get('/germany').then((data) => {
            var incidence = floorTo2Digits(data.incidence)
            var quota1 =  floorTo2Digits(data.quote1 * 100)
            var quota2 = floorTo2Digits(data.quote2 * 100)

            this.setState({
                incidence: incidence,
                quota1: quota1,
                quota2: quota2,
            })
        })
    }

    

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Grid 
                    container 
                    spacing={0} 
                    key="update"
                    alignItems="center"
                    justify="center"
                >
                    <UpdateBanner dateTime="07.05.2021 18:00"/>
                    <CountryCard 
                        incidence={this.state.incidence}
                        status={this.state.status}
                        quota1={this.state.quota1}  
                        quota2={this.state.quota2}  
                        beds={this.state.beds}  
                    />
                    <CustomizedDialogs/>
                    {this.cards}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardView);