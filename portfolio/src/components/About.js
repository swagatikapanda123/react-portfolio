import React, {Component} from 'react';
//import { Grid, Cell } from 'react-mdl';
import Container from '@material-ui/core/Container';


class About extends Component{
    render(){
      return(
        <div>
            <Container maxWidth="sm" className="abt-1">
              <h3>Hello There!!🙋‍♀️</h3>
              <h4>I am <strong>Swagatika Panda</strong> a fresh college graduate and a full stack software developer.👩‍💻</h4>
              <h5> I am passionate about learning new tech and working on stuff that challenges me. Currently I am 
                pursuing my MCA from ITER University🏛.  
              </h5>
              <h5>As a software developer I love crafting meaningful application that are scalable and efficient 
                while providing engaging user experiences🌈.
              </h5>
              <h5>When I am not in front of computer I read books mostly non-fictions, well sometimes I love 
                fictions too... basically a bookworm😁. Except that I LOVE to visit new places and capture sunset✨..
                and wherever I go I keep my music with me🎶.
              </h5>
            </Container>
        </div>

      );  
    }
}

export default About;