import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import '../styles/App.css'

function App (props) {
    return (
        <Container>
            <h1>My React App</h1>
            <Nav tabs>
                {
                    props.paths.map(({path}) => (
                        <NavItem>
                            <NavLink href={path} style={{textTransform: 'capitalize'}}>{path.replace(/\//g, '')}</NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
        </Container>
    )
}

export default App;