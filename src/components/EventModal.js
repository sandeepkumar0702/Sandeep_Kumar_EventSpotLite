import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

const EventModal = ({ isOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={event.image} alt={event.name} />
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </motion.div>
    </Modal>
  );
};

export default EventModal;
