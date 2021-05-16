import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import { Container, ToggleButton, ButtonGroup, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import {Home} from './pwa/home';
import {AboutMe} from './pwa/aboutme'

export function App(){
  
  const [dark, isDarkMode] = useState('light');
  const [theme, setTheme] = useState('p-3 mb-2 bg-secondary text-white');
  
  useEffect(() => {
    var theme = "p-3 mb-2 bg-";
    const text = " text-white";
    theme += dark === 'light' ? "light" : "secondary";
    theme += text;
    setTheme(theme);
  },[dark]);

  const radios = [
    { name: 'Dark', value: 'dark' },
    { name: 'Light', value: 'light' }
  ];

  const [page, setPage] = useState('aboutMe');

  const renderPage = (page) =>{
    switch(page){
      case 'home':
        return <Home />
      case 'aboutMe':
        return <AboutMe />  
    }
  } 

  var rootStyle = {
    height : '100vh'
  }

  return (

    <div style={rootStyle} className={theme}>
    <Navbar bg={dark} expand="lg">
      <Navbar.Brand href="#home">AbhiLearn.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setPage('home')} >Home</Nav.Link>
          <Nav.Link onClick={() => setPage('aboutMe') }>Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={dark === radio.value}
                onChange={(e) => isDarkMode(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
    </Navbar>
      {
        renderPage(page)
      }
    
  </div>
  );
}