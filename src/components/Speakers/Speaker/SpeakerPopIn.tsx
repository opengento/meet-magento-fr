import React from "react";
import Modal from "@/components/Modal/Modal";
import Speaker from "./Speaker";

interface SpeakerPopInProps {
  selectedSpeaker: Speaker;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerPopIn = ({
  isOpen,
  onClose,
  selectedSpeaker,
}: SpeakerPopInProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        {/* <Speaker speaker={selectedSpeaker} /> */}
        test
      </div>
    </Modal>
  );
};

export default SpeakerPopIn;
