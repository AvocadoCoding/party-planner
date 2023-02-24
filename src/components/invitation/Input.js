import React from "react";
import styled from "react-emotion";
import { colors } from "./config";

const FormSection = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;

  button,
  input {
    display: block;
    padding: 0.85rem 1rem;
    appearance: none;
    font-size: 0.9rem;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 8px 0 0 8px;
    
    outline: 0;
    color: rgba(0, 0, 0, 0.6);
    ::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
      color: ${colors.main};
      border-color: ${colors.main};
    }
  }

  button {
    border: 1px solid transparent;
    background-color: ${colors.main};
    border-radius: 0 8px 8px 0;

    color: ${colors.white};
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.035em;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Input = ({ addNewInvite, newInviteValue, onInputChange }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addNewInvite(newInviteValue);
      }}
    >
      <FormSection>
        <input
          type="text"
          name="inviteeText"
          onChange={e => {
            onInputChange(e.target.value);
          }}
          value={newInviteValue}
          placeholder="Name..."
        />
        <button type="submit">Invite</button>
      </FormSection>
    </form>
  );
};

export default Input;
