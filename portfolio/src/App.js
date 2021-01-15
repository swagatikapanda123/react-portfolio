import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';


class App extends Component{
  
  render(){
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', boxShadow: '5px 5px 5px black'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About Me</Link>
                <Link to="/Projects">Projects</Link>
            </Navigation>
        </Header>
        
        <div title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
        </div>
    
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
