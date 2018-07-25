import * as React from "react";
import LinkList from "./LinkList";
import Logo from "./Logo";
import "./main.css";

const Main: React.SFC = () => (
  <div className="mainContent">
    <Logo />
    <LinkList />
  </div>
)

export { Main };