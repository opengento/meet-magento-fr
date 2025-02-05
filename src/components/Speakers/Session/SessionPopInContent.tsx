import React from "react";
import { SessionProps } from "./SessionProps";
import Session from "./Session";
import Person from "@/components/Person/Person";
import useDataProvider from "@/hooks/useDataProvider";
import Typography from "@/components/Typography/Typography";
import { PiCalendarPlus } from "react-icons/pi";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

const SessionPopInContent = ({ session }: { session: SessionProps }) => {
  const dataProvider = useDataProvider();
  const speakers = dataProvider
    .usePersonList("speakers", "data.speakers")
    .filter((speaker) => session.speakers.includes(speaker.id));
  return (
    <div className="session-pop-in-content flex flex-col gap-6">
      <Session session={session} showAddToCalendar={false} />
      <div className="flex flex-col rounded-xl bg-white p-6 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speakers.map((speaker) => (
            <Person person={speaker} appearance="program" key={speaker.id} />
          ))}
        </div>
        <Typography variant="body1">{session.description}</Typography>
      </div>
      {!!session.eventUrl && (
        <div className="mx-auto">
          <ButtonLink
            variant="secondary-invert-w-border"
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

export default SessionPopInContent;
