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
        <h4 style={{ textAlign: "center" }}>Fill out your message, date and venue.</h4>
      </Row>
      <Row>
        <h4 style={{ textAlign: "center" }}>The guests that you have added to the guestlist can be selected with the dropdown.</h4>
      </Row>
      <Row colSpan="12">-</Row>
      <Row>
        <h4 style={{ textAlign: "center" }}>Click here to print an invitation: 💌</h4>
      </Row>
      <InvitationForm />
    </div>
  );
}

export default Invitation;