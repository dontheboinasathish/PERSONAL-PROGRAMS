import React, { useState } from "react";
import ContactCard from "./contactCard";
import ContactList from "./contactList";

const ContactApp = () => {
  const [state, setstate] = useState({
    selectedContact: {},
  });

  const { selectedContact } = state;

  const receiveContact = (data) => {
    setstate((state) => ({
      selectedContact: data,
    }));
  };
  console.log("selectedContact", selectedContact)
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Contact App</p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ContactList sendContact={receiveContact}/>
          </div>
          <div className="col-md-3">
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
