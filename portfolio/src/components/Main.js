import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';

const Main= () =>{
    return(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
    </Switch>
    );
}

export default Main;