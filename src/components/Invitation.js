import React from "react";
import { colors } from "./config";
import styled from "react-emotion";

const Card = styled("article")`
  box-shadow: 2px 15px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  background: #fff;
  flex: 0 1 auto;
  width: 30%;
  margin-right: ${props => (props.last ? "0" : "3%")};
  margin-bottom: 1rem;
  border-radius: 5px;
  border: ${props =>
    props.invite.accepted ? `1px solid ${colors.main}` : "1px solid #eee"};

  > * {
    padding: 1rem;
  }

  label {
    cursor: pointer;
    user-selection: none;
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.8);
  }

  .name {
    margin: 0;
    text-align: center;
    color: ${props =>
      props.invite.accepted ? "rgba(255,99,71,0.8)" : "rgba(0,0,0,.7)"};
    background: ${props => (props.invite.accepted ? colors.main : "rgba(255,99,71,0.2")};
  }

  .remove {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px;
    line-height: 0;
    background: #fff;
    border: 1px solid ${props =>
      props.invite.accepted ? colors.main : "#999"};
    color: ${props => (props.invite.accepted ? colors.main : "#999")};

    display: block;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    text-align: center;
    transition: all 50ms linear;
    &:hover {
      background-color: red;
      color: rgba(255,99,71,0.8);
      border-color: red;
    }
  }
`;

const Invitation = props => {
  const { index, onStatusChange, onDeleteInvite } = props;
  const { id, name, accepted } = props.invite;

  return (
    <Card {...props}>
      <a
        href="#"
        className="remove"
        onClick={e => {
          e.preventDefault();
          onDeleteInvite(index);
        }}
      >
        <i className="fas fa-times" />
      </a>
      <section className="name">{name}</section>
      <section>
        <label>
          <input
            onChange={() => {
              onStatusChange(id);
            }}
            type="checkbox"
            checked={accepted}
          />{" "}
          Accepted
        </label>
      </section>
    </Card>
  );
};

export default Invitation;
