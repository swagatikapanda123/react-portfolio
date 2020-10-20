import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Projects extends Component{
    render(){
        return(
            <Grid>
                <Cell col={3} className="grid-gradient1">
                    <h4>Featured Projects</h4>
                </Cell>
                <Cell col={6}>
                    <img src="images/project1.png" style={{width:'650px', heigh:'350px'}} alt="project"></img>
                </Cell>
                <Cell col={3}  className="grid-gradient2"><h5>StarSocial</h5>
                <p>This is a simple Social Clone Application built using Python and DJango Framework.</p>
                </Cell>
            </Grid>
        );
    }
}

export default Projects;