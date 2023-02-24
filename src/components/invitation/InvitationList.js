import React from "react";
import styled from "react-emotion";

import Invitation from "./Invitation";

const CardStack = styled("section")`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  max-height: 500px;
  overflow-y: auto;
`;

const InvitationList = props => {
  const { invites } = props;
  return (
    <CardStack>
      {invites
        .filter(invite => {
          if (!props.filter) {
            return invite;
          }
          switch (props.filter) {
            case "accepted":
            default:
              return invite.accepted;
          }
        })
        .map((invite, index) => {
          const { name, accepted } = invite;
          return (
            <Invitation
              key={invite.id}
              {...props}
              index={index}
              invite={invite}
              last={(index + 1) % 3 === 0 || index === invites.length - 1}
            />
          );
        })}
    </CardStack>
  );
};

export default InvitationList;
