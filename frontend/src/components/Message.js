import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ vairant, children }) => {
  return <Alert variant="={variant}">{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
