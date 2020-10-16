import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component{
    render(){
      return(
          <div className="about">
            <div className="abt-1">
              <h3>Hello!!</h3>
              <h4>I am <strong>Swagatika Panda</strong> a fresh college graduate and a full stack software developer.</h4>
           </div>
           <Grid>
           <Cell col={2}></Cell>
            <Cell col={2}>
             <h4>Background</h4>
            </Cell>
            
            <Cell col={6}>
              <h5 style={{marginTop:'10px'}}>I have completed my Bachelors in Information Technology and 
              Management with a CGPA of 8.6, prior to which I did my +2 in Science. Currently I am aiming to 
              leverage my academic as well as technical knowledge of web platform development to successfully secure a career oppertunity.
              </h5>
              <h5>As a software developer I love crafting meaningful application that are scalable and efficient 
                while providing engaging user experiences.
              </h5>
            </Cell>
            <Cell col={2}></Cell>
          </Grid>
          <Grid>
            <Cell col={2}></Cell>
            <Cell col={2}><h4>Interests</h4></Cell>
            <Cell col={6}>
              <h5>I like to spare my free time with my books mostly non-fictions and I love to listen music.</h5>
            </Cell>
          </Grid>
        </div>
      );  
    }
}

export default About;