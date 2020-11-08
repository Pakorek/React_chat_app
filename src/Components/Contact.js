import React from "react";
import Proptypes from "prop-types";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => (
  <div className="Contact">
    <img className="avatar" src={avatar} alt="avatar" />
    <div>
      <h4 className="name">{name}</h4>
      <div className="status">
        <span className={online ? "status-online" : "status-offline"} />
        <p className="status-text">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  name: Proptypes.string.isRequired,
  avatar: Proptypes.string.isRequired,
  online: Proptypes.bool
};

export { Contact };
