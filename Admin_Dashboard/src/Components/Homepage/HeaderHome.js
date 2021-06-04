import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './style.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  root: {
    flexGrow: 1,

  },
  h1: {
    color:"Pink",
    textAlign: 'left',
 
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3}>
       
        <Grid item xs={6}>
          <h1 className="dash">Sell Dashboard</h1>
        </Grid>
        <Grid item xs={6}>
         <form className="container" noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form> 
        </Grid>
        
      </Grid>
    </div>
  );
}