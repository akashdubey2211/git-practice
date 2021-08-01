import { Button, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './svgback.svg'
import './style.css'
import Vaccine from '../../../component/assests/checklist.png'
import Tilt from 'react-tilt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const SlotsFind = () => {
    let speak=(x)=>{
        var utter = new SpeechSynthesisUtterance(x);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    }
    const useStyles = makeStyles((theme) => ({
        root: {
        //   flexGrow: 1,
        margin:"0",
        padding:"0",
          width: "100%",
          height:"71vh",
        },
     
        home: {
            backgroundColor:"white",
          
            
        },
      }));
      const classes = useStyles();

    
    speak("Hello, welcome to, covid defeat for vaccine portal")
    return (
     

<section id="header" className="d-flex align-items-center  header-section">
<div className="container-fluid nav_bg">
 <div className="row">
 <div className="col-11 mx-auto">
     <div className="row">
     <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h4 className="home-text" >Search <strong>Vaccination  </strong>  center by  <strong> PinCode  </strong> <SentimentVerySatisfiedIcon className="emoji" /></h4>
      
          <Link style={{textDecoration:'none'}} to="/pincode">
          <Button  className="btn-register" style={{backgroundColor:"white" ,border:"none" , color:"#00C1D4", width:"240px", height:"40px", borderRadius:"15px", padding:"6px 30px" , border:"2px solid #00C1D4", transition:"0.2s", display:"inline", textDecoration:"none"}}>Search By PinCode</Button>
          </Link>
       <hr style={{color:'#001E6C' , marginTop:"2rem" , marginBottom:"2rem"}} />
         <h4 className="home-text" >Search <strong>Vaccination  </strong> , center by  <strong> District  </strong> <SentimentVerySatisfiedIcon className="emoji" /></h4>
      
      <Link style={{textDecoration:'none'}} to="/district">
      <Button  className="btn-register" style={{backgroundColor:"white" ,border:"none" , color:"#00C1D4", width:"240px", height:"40px", borderRadius:"15px", padding:"6px 30px" , border:"2px solid #00C1D4", transition:"0.2s", display:"inline", textDecoration:"none"}}>Search By District</Button>
      </Link>
     </div>
     
         <div className="col-lg-6 order-1 order-lg-2 header-img swing">
         <img src={Vaccine} className="imgage-header animated" alt="imh"/>
         </div>
     </div>
    

 </div>
 </div>
 </div>
</section>
    );
};

export default SlotsFind;