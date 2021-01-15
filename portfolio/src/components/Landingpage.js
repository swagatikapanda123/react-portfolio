import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

// import '../../public/images';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="container">
                        <div className="banner-text">
                        
                        <h1>SWAGATIKA PANDA</h1>
                        <h4>Full Stack Web Developer</h4>
                    
                        <div className="social-links"> 
                            <a href="mailto:swagatikapanda164@gmail.com" rel="noopener noreferrer" target="_blank">
                             <IconButton>
                                 <EmailIcon fontSize="large" />
                             </IconButton>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/swagatika-panda-7b0414181/" rel="noopener noreferrer" target="_blank">
                            <IconButton>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            </a>
                            <a href="https://github.com/swagatikapanda123" rel="noopener noreferrer" target="_blank">
                            <IconButton>
                            <GitHubIcon fontSize="large" />
                            </IconButton>
                            </a>
                            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                            <IconButton>
                                <InstagramIcon fontSize="large" />
                            </IconButton>
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
