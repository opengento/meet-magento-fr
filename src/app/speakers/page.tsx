'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import useDataProvider from "@/hooks/useDataProvider";
import Push from "@/layouts/Push/Push";
import Person from "@/components/Person/Person";
import React from "react";
import PersonPopIn from "@/components/Person/PersonPopIn";
import { PersonProps } from "@/components/Person/PersonProps";

export default function Page() {
  const { t } = useTranslation(['speakers']);
  const dataProvider = useDataProvider();
  const speakers = dataProvider.useSpeakers()
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<PersonProps | null>(null);

  const handleSpeakerClick = (speaker: PersonProps) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-2"
        >
          {t('speakers:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8"
        >
          {t('speakers:description')}
        </Typography>
      </ContentMedia>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 my-7">
        {speakers.speakers
          .map((speaker) => (
            <div
              key={speaker.id}
              className="flex flex-row gap-6 group hover:cursor-pointer"
              onClick={() => handleSpeakerClick(speaker)}
            >
              <Person person={speaker}/>
            </div>
          ))}
      </div>
      <Push/>
      {selectedSpeaker && (
        <PersonPopIn
          isOpen={!!selectedSpeaker}
          onClose={handleCloseModal}
          selectedPerson={selectedSpeaker}
        />
      )}
    </Container>
  );
}
