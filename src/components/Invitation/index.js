import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import InviteDropdown from "../InviteDropdown";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

const InvitationForm = () => {

    const [invitationData, setInvitationData] = useState({
        message: "",
        venue: "",
        date: "",
        from: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newInvitationData = {...invitationData};
        newInvitationData[name]=value;
        setInvitationData(newInvitationData);

        localStorage.setItem("invitationData", JSON.stringify(newInvitationData));
      };

      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("invitationData"));
        if (storedData) {
          setInvitationData(storedData);
        }
      }, []);

  return (
    <Form className="invitation-form">
        <Row>
        <Col sm={2}>
        <h3>Dear </h3>
        </Col>
        <Col sm={4}>
        <InviteDropdown/>
        </Col>
        </Row>
        <br />
        <h1 className="youre-invited" >You're invited to</h1>
        <Form.Group className="form-input-group message">
            <Form.Control
                name="message"
                className="form-input"
                type="text"
                placeholder="Enter your message"
                value={invitationData.message}
                onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="form-input-group venue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
                name="venue"
                className="form-input"
                type="text"
                placeholder="Enter venue"
                value={invitationData.venue}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group className="form-input-group date">
            <Form.Label>Date</Form.Label>
            <Form.Control
                name="date"
                className="form-input"
                type="text"
                placeholder="Enter date"
                value={invitationData.date}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group className="form-input-group from">
            <h3>From</h3>
            <Form.Control
                name="from"
                className="form-input"
                type="text"
                placeholder="Enter your name"
                value={invitationData.from}
                onChange={handleInputChange}
            />
        </Form.Group>
    </Form>
  );
};

export default InvitationForm;