import React, {ReactNode} from "react";
import Modal from "@/components/Modal/Modal";
import { PersonProps } from "@/components/Person/PersonProps";
import PersonPopInContent from "./PersonPopInContent";

interface PersonPopInProps {
  selectedPerson: PersonProps;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode
}

const PersonPopIn = ({
  isOpen,
  onClose,
  selectedPerson,
  children
}: PersonPopInProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PersonPopInContent person={selectedPerson}>
        {children}
      </PersonPopInContent>
    </Modal>
  );
};

export default PersonPopIn;
