import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand href="/">Capture Them DB</NavbarBrand>
            <NavbarToggler onClick={toggleNavBar} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/kantoPokedex">Pokedex</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/kantoLeaders">Gym Leaders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/YourTeams">Create Teams</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/locationselect">Catch Them</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;