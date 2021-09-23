import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

function Header(props){
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
                    <NavLink href="/components/">Pokedex</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/KantoLeaders">Gym Leaders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">Random Team</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;