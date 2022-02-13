import PropTypes from "prop-types";
import React from "react";

import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section>
      <ul style={{ padding: 0 }}>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={() => onDelete(contact.id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
