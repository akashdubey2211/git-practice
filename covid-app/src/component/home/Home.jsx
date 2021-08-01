import React from 'react'
import "./index.css"
import Vaccine from '../assests/c.svg'
import inj from "../assests/inj.png"
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const Home = () => {
    return (
       <>
       <section id="header" className="d-flex align-items-center  header-section">
       <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-11 mx-auto">
            <div className="row">
            <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="home-text" >Stay <strong>Home</strong> , Stay <strong> Safe  </strong> <SentimentVerySatisfiedIcon className="emoji" /></h1>
                <h4 className="my-3  vc-ins">we will defeat covid together , Got Your vaccination <img src={inj} alt="inj" className="inj"/> center by your pincode .</h4>
                <div className="mt-3">
                    <a href="https://selfregistration.cowin.gov.in/" className="btn-register"> Register  </a>
                </div>
            </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img swing">
                <img src={Vaccine} className="imgage-header animated" alt="imh"/>
                </div>
            </div>
           

        </div>
        </div>
        </div>
       </section>
       </>
    )
}

export default Home
