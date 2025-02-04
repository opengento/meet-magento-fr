import React from "react";
import { PiCalendarPlus } from "react-icons/pi";
import useDataProvider from "@/hooks/useDataProvider";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import Session from "@/components/Speakers/Session/Session";
import Person from "@/components/Person/Person";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

const ProgramTile = ({
  session,
  onPopInClick,
}: {
  session: SessionProps;
  onPopInClick: () => void;
}) => {
  const dataProvider = useDataProvider();
  const speakers = dataProvider
    .usePersonList("speakers", "data.speakers")
    .filter((speaker) => session.speakers.includes(speaker.id));

  return (
    <div className="program-tile bg-white rounded-xl flex flex-col justify-between gap-6 p-4 md:p-6 h-full">
      <div className="flex flex-col gap-6">
        <Session session={session} onPopInClick={onPopInClick} />
        <div className="program-tile-speakers flex flex-col gap-2">
          {speakers.map((speaker) => (
            <Person person={speaker} appearance="program" key={speaker.id} />
          ))}
        </div>
      </div>
      {!!session.eventUrl && (
        <div className="mx-auto">
          <ButtonLink
            variant="secondary-invert"
            href={session.eventUrl}
            iconPosition="left"
            icon={<PiCalendarPlus />}
          >
            Ajouter à mon agenda
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default ProgramTile;
