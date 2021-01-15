import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={2}><h4>Skills</h4></Cell>
                    <Cell col={2}><h5 className="align">Languages</h5>
                    <ul>
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                    </ul>
                    </Cell>
                    <Cell col={2}><h5 className="align">Frameworks</h5>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Bootstrap</li>
                        <li>DJango</li>
                        <li>Express</li>
                        <li>React</li>
                    </ul>
                    </Cell>
                    <Cell col={2}><h5 style={{textAlign:'center'}}>Tools</h5>
                    <ul>
                        <li>Git/GitHub</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>

                <Grid>
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <div><h3> 
                        <IconButton className="view-icon" href="https://drive.google.com/file/d/1PWqWy5L01wt6tTJOgMR2twziR-D5sgWy/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <VisibilityIcon fontSize="large"/>  
                        </IconButton>
                        Resume
                        </h3> 
                        </div> 
                    </Cell>
                </Grid>

            </div>
        );
    }
}
export default Resume;