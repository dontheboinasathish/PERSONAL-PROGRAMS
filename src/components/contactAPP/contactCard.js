import React from "react";

const ContactCard = (props) => {
  const { selectedContact } = props;

  return (
    <React.Fragment>
      {Object.keys(selectedContact).length > 0 && (
          <div className="card">
            <ul className="list-group">
              <li className="list-group-item">{selectedContact.name}</li>
              <li className="list-group-item">{selectedContact.username}</li>
              <li className="list-group-item">{selectedContact.email}</li>
            </ul>
          </div>
      )}
    </React.Fragment>
  );
};

export default ContactCard;
