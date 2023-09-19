import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

// submenu css
import "react-bootstrap-submenu/dist/index.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Discover BOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Events */}
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/events/calendar">
                Events Calendar
              </NavDropdown.Item>
              <NavDropdown.Item href="/events/library">
                Library of Past Events
              </NavDropdown.Item>
            </NavDropdown>

            {/* Communities */}
            <NavDropdownMenu title="Communities" id="basic-nav-dropdown">
              <NavDropdown.Item href="/communities/developer">
                Developer Communities
              </NavDropdown.Item>
              <NavDropdown.Item href="/communities/project">
                Project Communities
              </NavDropdown.Item>
              <NavDropdown.Item href="/communities/regional">
                Regional Communities
              </NavDropdown.Item>
              <NavDropdown.Item href="/communities/general-bos">
                General BOS Communities
              </NavDropdown.Item>
            </NavDropdownMenu>

            {/* Education */}
            <NavDropdownMenu title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/education/tutorials">
                Library of Tutorials
              </NavDropdown.Item>
              <NavDropdown.Item href="/education/code-reviews">
                Library of Code Reviews
              </NavDropdown.Item>
              <NavDropdown.Item href="/education/workshops">
                Library of Workshops/Webiners
              </NavDropdown.Item>
              <NavDropdown.Item href="/education/office-hours">
                Office Hours
              </NavDropdown.Item>
            </NavDropdownMenu>

            {/* Components */}
            <NavDropdownMenu title="Components" id="basic-nav-dropdown">
              <NavDropdown.Item href="/components/evm">
                EVM Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/components/defi">
                DeFi Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/components/nft">
                NFT Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/components/dao">
                DAO Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/components/gaming">
                Gaming Components
              </NavDropdown.Item>
              <NavDropdown.Item href="/components/more">
                More Components
              </NavDropdown.Item>
            </NavDropdownMenu>

            {/* Projects */}
            <NavDropdownMenu title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/built-with-bos">
                Built with BOS
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/native-projects">
                Native Projects on BOS
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/bos-integration">
                Projects with BOS
              </NavDropdown.Item>
            </NavDropdownMenu>

            {/* Opportunities */}
            <NavDropdownMenu title="Opportunities" id="basic-nav-dropdown">
              <NavDropdown.Item href="/opportunities/funding">
                Funding Opportunities
              </NavDropdown.Item>
              <NavDropdown.Item href="/opportunities/accelerator">
                Accelerator Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="/opportunities/incubation">
                Incubation Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="/opportunities/amplification">
                Amplification Channels
              </NavDropdown.Item>
            </NavDropdownMenu>

            <NavDropdownMenu title="More" id="basic-nav-dropdown">
              <DropdownSubmenu href="#action/3.1" title="Integrations">
                <NavDropdown.Item href="/integrations">
                  Integrations
                </NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu href="#action/3.2" title="Infrastructure">
                <NavDropdown.Item href="/infrastructure">
                  Infrastructure
                </NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu href="#action/3.3" title="Gateways">
                <NavDropdown.Item href="/gateways">Gateways</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
