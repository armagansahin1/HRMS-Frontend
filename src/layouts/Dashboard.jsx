import React from 'react'
import Main from '../pages/Main'
import { Route } from "react-router";
import Candidates from '../pages/Candidates';
import Employers from '../pages/Employers';
import AddJobAdvertisement from '../pages/AddJobAdvertisement';
import { Container } from 'semantic-ui-react'
import OpenToWorkList from '../pages/OpenToWorkList';
import PublishAdvertisement from '../pages/PublishAdvertisement';
import CvDetails from '../pages/CvDetails';

export default function Dashboard() {
    return (
        <div>
           
            <Route exact path="/" component={Main} />
            <Container>
            <Route  path="/candidates" component={Candidates} />
            <Route  path="/employers" component={Employers}/>
            <Route  path="/addJobAdvertisement" component={AddJobAdvertisement}/>
            <Route path="/openToWorkList" component={OpenToWorkList}/>
            <Route path="/CvDetails/:candidateId" component={CvDetails}/>
            <Route path="/publishAdvertisement" component={PublishAdvertisement}/>
            </Container>
        </div>
    )
}
