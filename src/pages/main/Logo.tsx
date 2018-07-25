import * as React from 'react';
import "./main.css";

const Logo: React.SFC = (props) => (
  <svg id="logo" fill="#DCDCDC" xmlns="http://www.w3.org/2000/svg" height="200" width="200">
    <polygon className="triangle" points="0,200 100,0 200,200" />
    <line className="x" x1="125" y1="75" x2="75" y2="125" stroke="#868685" stroke-width="5" />
    <line className="x" x1="75" y1="75" x2="125" y2="125" stroke="#868685" stroke-width="5" />
  </svg>
)

export default Logo;