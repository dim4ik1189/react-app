import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import '../styles/App.css'

const App = ({ paths }) => (
    <Container>
        <h1>My React App</h1>
        <Nav tabs>
            {
                paths.map(({ path }) => (
                    <NavItem key={path}>
                        <NavLink href={path} style={{textTransform: 'capitalize'}}>{path.replace(/\//g, '')}</NavLink>
                    </NavItem>
                ))
            }
        </Nav>
    </Container>
);

export default App;