import React from "react";

export default function Links({ links }) {
  return (
    <ul>
      {links &&
        links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
    </ul>
  );
}
