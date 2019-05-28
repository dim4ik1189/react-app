import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import '../styles/App.css'

function App () {
    return (
        <Container>
            <h1>My React App</h1>
            <Nav tabs>
                <NavItem>
                    <NavLink href="/comps"> Go to FormComponents</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/table"> Go to TableComponent</NavLink>
                </NavItem>
                <NavLink href="/myform"> Go to MyFormComponent</NavLink>
                <NavItem>
                    <NavLink href="/lesson-7"> Go to Lesson 7</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/hrefList"> Go to Href List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/lesson8_2"> Go to Lesson 8.2</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/lesson8_3"> Go to Lesson 8.3</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/lesson8_4"> Go to Lesson 8.4</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/lesson8_5"> Go to Lesson 8.5</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/fetching-dynamic-data">Fetching Dynamic Data</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/magic-eight-ball">Magic Eight Ball</NavLink>
                </NavItem>
            </Nav>
        </Container>
    )
}

export default App;