import React from 'react'
import {Switch , Route} from "react-router-dom"
import SlotsFind from './Pages/SlotFind'
import Pincode from './Pages/Pincode'
import District from './Pages/District'
import ShowDistrictList from './Pages/ShowDistrictList'

const SlotAv = () => {
    return (
        <Switch>
            <Route path="/" component={SlotsFind} exact/>
            <Route path="/pincode" component={Pincode} />
            <Route path="/district" component={District} />
            <Route path="*" component={SlotsFind} />
        </Switch>
    )
}

export default SlotAv
