import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';

const Main= () =>{
    return(
    <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />
    </div>
    );
}

export default Main;