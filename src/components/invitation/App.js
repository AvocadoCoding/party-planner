import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "react-emotion";
import "./index.css";
import Heading from "./Heading";
import Input from "./Input";
import InvitationList from "./InvitationList";
import Error from "./Error";

const AppContainer = styled("section")`
  background: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 1rem 0;
  @media only screen and (max-width: 900px) {
    margin: 1rem 1.2rem;
  }
`;

const AppSection = styled("section")`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem 1.5rem;
  background-color: ${props => (props.dark ? "#fafafa" : "")}
`;

export default class App extends React.Component {
  state = {
    newInviteValue: "",
    showError: false,
    errorMessage: "",
    filter: null,
    invitations: [
      {
        id: 1,
        name: "Chris",
        accepted: false,
        editing: false
      },

      {
        id: 2,
        name: "Joanna",
        accepted: false,
        editing: false
      },

      {
        id: 3,
        name: "Ben",
        accepted: true,
        editing: false
      }
    ]
  };

  addNewInvite = () => {
    const newName = this.state.newInviteValue;
    const duplicate = this.state.invitations.filter(inv => {
      return inv.name.toLocaleLowerCase() === newName.toLocaleLowerCase();
    })[0];

    if (newName) {
      if (duplicate) {
        this.setState({
          showError: true,
          errorMessage: "You can't invite the same person twice"
        });
        return;
      }

      this.setState(
        state => ({
          ...state,
          showError: false,
          errorMessage: "",
          invitations: [
            ...state.invitations,
            {
              name: newName,
              id: this.state.invitations.length + 1,
              accepted: false,
              editing: false
            }
          ]
        }),
        () => {
          this.setState({
            newInviteValue: ""
          });
        }
      );
    } else {
      this.setState({
        showError: true,
        errorMessage: "You forgot to enter a name"
      });
    }
  };

  onInputChange = value => {
    this.setState({
      newInviteValue: value,
      showError: value.length === 0
    });
  };

  onStatusChange = id => {
    this.setState(state => ({
      ...state,
      invitations: state.invitations.map(inv => {
        if (inv.id === id) {
          inv.accepted = !inv.accepted;
        }
        return inv;
      })
    }));
  };

  onDeleteInvite = index => {
    this.setState(state => ({
      ...state,
      invitations: [
        ...state.invitations.slice(0, index),
        ...state.invitations.slice(index + 1)
      ]
    }));
  };

  render() {
    const { invitations, errorMessage, showError } = this.state;
    return (
      <AppContainer>
        {showError && <Error message={errorMessage} />}
        <AppSection>
          <Heading title="React-vite" />
        </AppSection>
        <AppSection>
          <Input
            newInviteValue={this.state.newInviteValue}
            onInputChange={this.onInputChange}
            addNewInvite={this.addNewInvite}
          />
          {this.state.invitations.length > 0 && (
            <label
              className={css`
            display: block;
            margin: 1rem 0 0;
            text-align: center;
            font-size: .9rem;
            cursor: pointer;
          `}
            >
              <input
                type="checkbox"
                onChange={() => {
                  this.setState(state => ({
                    ...state,
                    filter: !this.state.filter ? "accepted" : null
                  }));
                }}
              />{" "}
              Show Accepted Only
            </label>
          )}
        </AppSection>

        {invitations.length > 0 && (
          <AppSection>
            <InvitationList
              onStatusChange={this.onStatusChange}
              onDeleteInvite={this.onDeleteInvite}
              filter={this.state.filter}
              invites={invitations}
            />
          </AppSection>
        )}
      </AppContainer>
    );
  }
}
