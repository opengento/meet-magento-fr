'use client';

import { PersonProps } from "@/components/Person/PersonProps";
import PersonPopIn from "@/components/Person/PersonPopIn";
import useDataProvider from "@/hooks/useDataProvider";
import Session from "@/components/Speakers/Session/Session";

interface SpeakerPopInProps {
  selectedSpeaker: PersonProps;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerPopIn = ({
  isOpen,
  onClose,
  selectedSpeaker
}: SpeakerPopInProps) => {
  const dataProvider = useDataProvider();
  const sessions = dataProvider.useSessions(selectedSpeaker.id);

  return (
    <PersonPopIn
      isOpen={isOpen}
      onClose={onClose}
      selectedPerson={selectedSpeaker}
    >
      {sessions.map((session, index) => (
        <Session session={session} key={index} />
      ))};
    </PersonPopIn>
  );
};

export default SpeakerPopIn;
