import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReplayIcon from '@material-ui/icons/Replay';
import AlarmIcon from '@material-ui/icons/Alarm';
import Award from '../../assests/images/award.png'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './card.css'
import Map from './Map';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border:"none"
  },

}));

export default function Cards() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
            <Grid container  spacing={3}>
                <Grid  item xs={3}>
                <Card  className="card" >
                    <p className="header">
                    All Order <span className="span"><ShoppingBasketIcon className="icons"  /></span>
                </p>
                <h3 className="digit">3257</h3>
                    <p className="lsm"><span className="as">  <ArrowDropDownIcon /> 43.2
                </span> than last month</p>
                <hr></hr>
                </Card>
                 </Grid>



                <Grid  item xs={3}>
                <Card >
                    <p className="header-a"  gutterBottom>
                    Pending Orders
                    <span className="span"><AlarmIcon className="icons-a"  /></span>
                    </p> 
                    <h3 className="digit">1658</h3>
                    <p className="lsm"><span className="as-a"> <ArrowDropUpIcon  /> 19.8
                    </span> than last month</p>
                    <hr className="hr-a"></hr>
                    </Card>
                 </Grid>
                    <Grid item  xs={3}>
                            <Card >
                    <p className="header" >
                    Refund Requests
                    <span className="span"><ReplayIcon className="icons-b"  /></span>
                    </p>  
                    <h3 className="digit">168</h3>
                    <p className="lsm"><span className="as-b">  <ArrowDropDownIcon /> 0.8%
                    </span> than last month</p>
                    <hr className="hr-b"></hr>
                    </Card>
                    <Grid item  xs={3}>d</Grid>
        </Grid>


                        <Grid item xs={3}>
                       
                        <Card className="">
                  
                        <h1 className="sideheader">
                        Congratulations John!
                        </h1>
                    <img src={Award} className="award" alt={Award}/>
                        <h1 className="k" color="textSecondary">
                        $1000ks
                        </h1>
                     <p ><span className="as-b"> <ArrowUpwardIcon />0.82%</span> since last year</p>
                     <h2 className="target">You have done 99.9% target sales reached today.</h2>
                     <p>Today 20 minutes ago</p>
                        </Card>
                      </Grid>
              </Grid>
              </div>
  );
}