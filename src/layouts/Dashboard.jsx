import React from 'react'
import Main from '../pages/Main'
import { Route } from "react-router";
import Candidates from '../pages/Candidates';
import Employers from '../pages/Employers';
import AddJobAdvertisement from '../pages/AddJobAdvertisement';

export default function Dashboard() {
    return (
        <div>
            
            <Route exact path="/" component={Main} />
            <Route  path="/candidates" component={Candidates} />
            <Route  path="/employers" component={Employers}/>
            <Route  path="/add-job-advertisement" component={AddJobAdvertisement}/>
            
        </div>
    )
}
