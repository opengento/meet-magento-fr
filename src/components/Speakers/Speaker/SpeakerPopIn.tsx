import React from "react";
import Modal from "@/components/Modal/Modal";
import { SpeakerProps } from "@/components/Speakers/Speaker/SpeakerProps";
import SpeakerPopInContent from "./SpeakerPopInContent";

interface SpeakerPopInProps {
  selectedSpeaker: SpeakerProps;
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
      <SpeakerPopInContent speaker={selectedSpeaker} />
    </Modal>
  );
};

export default SpeakerPopIn;
