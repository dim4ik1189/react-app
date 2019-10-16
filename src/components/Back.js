import React from 'react'
import {Nav, NavItem, NavLink, Button} from "reactstrap";

const Back = () => (
    <Nav>
        <NavItem>
            <NavLink href="/">
                <Button color="secondary">Back</Button>
            </NavLink>
        </NavItem>
    </Nav>
);

export default Back;