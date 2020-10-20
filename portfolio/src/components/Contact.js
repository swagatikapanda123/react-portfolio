import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
            <Grid>
                <Cell col={3}></Cell>
                <Cell col={6}>
                    <h2 className="contact">Contact Me..</h2>
                    <hr></hr>
                    <div>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone" aria-hidden="true"></i>+91-8658300375
                                </ListItemContent><br></br>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'black'}}>
                                   <a style={{color:'black', textDecoration:'none'}} href="mailto:swagatikapanda164@gmail.com"> <i className="fa fa-envelope" aria-hidden="true"></i>swagatikapanda164@gmail.com</a>
                              </ListItemContent><br></br>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
            </div>
            
        );
    }
}

export default Contact;