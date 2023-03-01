import React from "react";
import InvitationForm from "../components/Invitation"; 
import Row from 'react-bootstrap/Row';       
// import Pdf from "react-to-pdf";


function Invitation() {
  return (
    <div>
      <Row colSpan="12">-</Row>
      <Row>
        <h1 style={{ textAlign: "center" }}>Fill out and print your invitations!</h1>
      </Row>
      <Row colSpan="12">-</Row>
      <Row>
        <h4 style={{ textAlign: "center" }}>Fill out the messages, data and venue. The guests that you have added to the guestlist can be selected with the dropdown.</h4>
      </Row>
      <InvitationForm />
    </div>
  );
}

export default Invitation;