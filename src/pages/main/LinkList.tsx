import * as React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Links = [{
  name: "Blog",
  url: "http://blog.rodrigo.li",
  target: "_blank"
}, {
  name: "Github",
  url: "https://github.com/RodrigoLeiteF",
  target: "_blank"
}, {
  name: "E-mail",
  url: "mailto:leite@rodrigo.com"
}]

const LinkList: React.SFC = () => (
  <div>
    <ul className="links">
      {Links.map(link => {
        return (
          <li key={link.name}>
            {link.target !== "internal" ? <a href={link.url} target={link.target}>{link.name}</a> : <Link to={link.url}>{link.name}</Link>}
          </li>
        )
      })}
    </ul>
  </div>
)

export default LinkList;