import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
//import Resume from '.components/Resume';
import { Link } from 'react-router-dom';
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//import { useState } from 'react';


class App extends Component{
  
  render(){
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        
   {/*     <div>
          <Navbar>
          <NavbarBrand href="/" className="mr-auto">My-Portfolio</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
          </Navbar> 
        </div>
        */} 
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/About">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
    
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
