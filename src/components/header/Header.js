import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ListGroup } from "react-bootstrap";

function Logo() {
  return (
    <div
      className="rounded-circle bg-black d-flex align-items-center justify-content-center "
      style={{ height: "42px", width: "42px", color: "white" }}
    >
      DB
    </div>
  );
}

const NavLinks = ({ href, title }) => {
  return (
    <a
      className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      href={href}
    >
      {title}
    </a>
  );
};

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ flexDirection: "row", gap: "1rem" }}>
          <Nav.Link href="#action1">Apps</Nav.Link>
          <Nav.Link href="#action1">Builders</Nav.Link>
          <Nav.Link href="#action1">Events</Nav.Link>

          <Button variant="light" onClick={handleShow}>
            <i className="bi bi-list"></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>DiscoverBOS</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mb-2">
                <h5>Events</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks href="/events/calendar" title="Events Calendar" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/events/library"
                      title="Library of Past Events"
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-2">
                <h5>Communities</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks
                      href="/communities/developer"
                      title="Developer Communities"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/communities/project"
                      title="Project Communities"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/communities/regional"
                      title="Regional Communities"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/communities/general-bos"
                      title="General BOS Communities"
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-2">
                <h5>Education</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks
                      href="/education/tutorials"
                      title="Library of Tutorials"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/education/code-reviews"
                      title="Library of Code Reviews"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/education/workshops"
                      title="Library of Workshops/Webinars"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/education/office-hours"
                      title="Office Hours"
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-2">
                <h5>Components</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks href="/components" title="Components" />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-2">
                <h5>Projects</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks
                      href="/projects/built-with-bos"
                      title="Built with BOS"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/projects/native-projects"
                      title="BOS Natives"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/projects/bos-integration"
                      title="Integrated to BOS"
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-2">
                <h5>Opportunities</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks
                      href="/opportunities/funding"
                      title="Funding Opportunities"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/opportunities/accelerator"
                      title="Accelerator Programs"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/opportunities/incubation"
                      title="Incubation Programs"
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks
                      href="/opportunities/amplification"
                      title="Amplification Channels"
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="mb-5">
                <h5>More</h5>
                <ListGroup>
                  <ListGroup.Item>
                    <NavLinks href="/integrations" title="Integrations" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks href="/infrastructure" title="Infrastructure" />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLinks href="/gateways" title="Gateways" />
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
