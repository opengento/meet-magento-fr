import React from "react";
import { SessionProps } from "./SessionProps";
import Modal from "@/components/Modal/Modal";
import SessionPopInContent from "./SessionPopInContent";

const SessionPopIn = ({
  selectedSession,
  isOpen,
  onClose,
}: {
  selectedSession: SessionProps;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SessionPopInContent session={selectedSession} />
    </Modal>
  );
};

export default SessionPopIn;
