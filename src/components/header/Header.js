import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, NavLink } from "react-bootstrap";

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
            <NavDropdown title="Communities" id="basic-nav-dropdown">
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
            </NavDropdown>

            {/* Education */}
            <NavDropdown title="Education" id="basic-nav-dropdown">
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
            </NavDropdown>

            {/* Components */}
            <Nav.Link href="/components">Components</Nav.Link>

            {/* Projects */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/built-with-bos">
                Built with BOS
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/native-projects">
                BOS Natives
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/bos-integration">
                Integrated to BOS
              </NavDropdown.Item>
            </NavDropdown>

            {/* Opportunities */}
            <NavDropdown title="Opportunities" id="basic-nav-dropdown">
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
            </NavDropdown>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavLink href="/integrations">Integrations</NavLink>
              <NavLink href="/infrastructure">Infrastructure</NavLink>
              <NavLink href="/gateways">Gateways</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
