import React from "react";
import Table from "react-bootstrap/Table";

export default function Links({ links }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Resource</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        {links &&
          links.map((link, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{link.name}</td>
              <td>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
