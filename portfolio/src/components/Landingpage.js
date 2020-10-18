import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="container">
                        <div className="banner-text">
                        
                        <h1>SWAGATIKA PANDA</h1>
                        <h4>Full Stack Web Developer</h4>
                        <p>This is a basic portfolio made with react.</p>
                        <div className="social-links">
                            <a href="mailto:swagatikapanda164@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-email" aria-hidden="true" />Email
                            </a>
                            
                            <a href="https://www.linkedin.com/in/swagatika-panda-7b0414181/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true" />LinkedIn
                            </a>
                            <a href="https://github.com/swagatikapanda123" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />GitHub
                            </a>
                            
                        </div>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
            
        );
    }
}
export default Landing;
