import React from "react";
import Form from 'react-bootstrap/Form';
import "./style.css";

const InvitationForm = () => {

  return (
    <Form className="invitation-form">
        <h3>Dear</h3>
        <br />
        <h1 className="youre-invited" >You're invited to</h1>
        <Form.Group className="form-input-group message">
            <Form.Control className="form-input" type="text" placeholder="Enter your message" />
        </Form.Group>

        <Form.Group className="form-input-group venue">
            <Form.Label>Venue</Form.Label>
            <Form.Control className="form-input" type="text" placeholder="Enter venue" />
        </Form.Group>
        <Form.Group className="form-input-group date">
            <Form.Label>Date</Form.Label>
            <Form.Control className="form-input" type="text" placeholder="Enter date" />
        </Form.Group>
        <Form.Group className="form-input-group from">
            <h3>From</h3>
            <Form.Control className="form-input" type="text" placeholder="Enter your name" />
        </Form.Group>
    </Form>
  );
};

export default InvitationForm;