import React from 'react'
import {Nav, NavItem, NavLink, Button} from "reactstrap";

function Back() {
    return (
        <Nav>
            <NavItem>
                <NavLink href="/">
                    <Button color="secondary">Back</Button>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default Back;