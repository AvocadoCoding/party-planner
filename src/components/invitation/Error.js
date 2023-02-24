import React from "react";
import styled from "react-emotion";

const Modal = styled("section")`
  background: red;
  color: rgba(255, 255, 255, 0.9);
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div:first-child {
    margin-right: 1rem;
  }

  .warning-sign {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0 0 0.6rem;
  }
  p {
    margin: 0;
  }
`;

const Error = ({ message }) => {
  return (
    <Modal>
      <div>
        <i className="warning-sign fas fa-exclamation-circle" />
      </div>
      <div>
        <h3>Hey!</h3>
        <p>{message}</p>
      </div>
    </Modal>
  );
};

export default Error;
