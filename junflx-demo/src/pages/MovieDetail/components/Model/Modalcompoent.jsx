import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import YouTube from "react-youtube";

const Modalcompoent = (props) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">예고편</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube videoId={props.id} opts={opts} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modalcompoent;
