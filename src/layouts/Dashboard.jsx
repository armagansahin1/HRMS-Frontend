import React from 'react'
import Main from '../pages/Main'
import { Route } from "react-router";
import Candidates from '../pages/Candidates';
import Employers from '../pages/Employers';
import AddJobAdvertisement from '../pages/AddJobAdvertisement';
import RelaseAdvertisement from '../pages/RelaseAdvertisement';
import { Container } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
           
            <Route exact path="/" component={Main} />
            <Container>
            <Route  path="/candidates" component={Candidates} />
            <Route  path="/employers" component={Employers}/>
            <Route  path="/addJobAdvertisement" component={AddJobAdvertisement}/>
            <Route path="/relaseAdvertisement" component={RelaseAdvertisement}/>
            </Container>
        </div>
    )
}
