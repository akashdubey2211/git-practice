import React, { useState } from 'react'
import {useEffect} from "react"
import './style.css'
const Report = () => {
    
const [data , setData] = useState([]);
    const covidData = async () => {
        try {
            const result = await fetch("https://api.covid19india.org/data.json");
            const actuallData = await result.json();
            setData(actuallData.statewise[0]);
            console.log(actuallData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
     
      
    }
  
    useEffect(() => {
      //  covidData();
    }, []);

    return (
      
    
       
        <div className="row">
            <div>
            <p className="live-covid"> Live 🔴 </p>
            <h4 className="case-heading">India covid-19 cases</h4>
        </div>
          <div className="column">
         
              <div className="card one">
                <div className="course-description">
                  <h3> <span className="span-p">Our</span> COUNTRY</h3>
                  <h1 className="data">INDIA</h1>
                </div>
              </div>
         
          </div>
        
          <div className="column">
        
              <div className="card two">
                <div className="course-description">
                  <h3> <span  className="span-p" >Total</span> RECOVERED</h3>
                  <h1 className="data">{data.recovered}</h1>
                </div>
              </div>
       
          </div>
        
          <div className="column">
            <a href="">
              <div className="card three">
                <div className="course-description">
                  <h3> <span  className="span-p">Total</span> CONFIRMED</h3>
                  <h1 className="data">{data.confirmed}</h1>
                </div>
              </div>
            </a>
        </div>

        <div className="column">
         
         <div className="card one">
           <div className="course-description">
             <h3> <span  className="span-p">Total</span> DEATHS</h3>
             <h1 className="data">{data.deaths}</h1>
           </div>
         </div>
    
     </div>
   
     <div className="column">
   
         <div className="card two">
           <div className="course-description">
             <h3> <span  className="span-p">Total</span> ACTIVE</h3>
             <h1 className="data">{data.active}</h1>
           </div>
         </div>
  
     </div>
   
     <div className="column">
       <a href="">
         <div className="card three">
           <div className="course-description">
             <h3> <span  className="span-p">Last</span> LAST UPDATED</h3>
             <h1 className="data">{data.lastupdatedtime}</h1>
           </div>
         </div>
       </a>
   </div>
       </div>
    )
}

export default Report;
