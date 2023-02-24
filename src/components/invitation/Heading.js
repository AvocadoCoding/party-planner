import React from "react";
import styled from "react-emotion";
import { colors } from "./config";

const { main: mainColor } = colors;

const Header = styled("header")`
  text-align: center;
  h1 {
    font-size: 3rem;
    margin: 0 0 1rem;
    font-family: "Bangers", serif;
    color: ${mainColor};
  }
  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }

  .lit {
    display: inline-block;
    position: relative;
    z-index: 1;
    color: #fff;
    margin: 0 5px;
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      z-index: -1;
      background: ${mainColor};
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      left: 0;
      transform: rotate(-15deg) scale(1.4);
      transform-origin: center;
    }
  }
`;

const Heading = ({ title }) => {
  return (
    <Header>
      <h1>You are invited to Fran's Party</h1>
      <p>
        Be there or be square!!... <span className="lit">RSVP</span>
      </p>
    </Header>
  );
};
export default Heading;
