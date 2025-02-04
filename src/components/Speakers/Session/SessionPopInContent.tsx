import React from "react";
import { SessionProps } from "./SessionProps";
import Session from "./Session";
import Person from "@/components/Person/Person";
import useDataProvider from "@/hooks/useDataProvider";
import Typography from "@/components/Typography/Typography";
import { PiCalendarPlus } from "react-icons/pi";

const SessionPopInContent = ({ session }: { session: SessionProps }) => {
  const dataProvider = useDataProvider();
  const speakers = dataProvider
    .usePersonList("speakers", "data.speakers")
    .filter((speaker) => session.speakers.includes(speaker.id));
  return (
    <div className="session-pop-in-content flex flex-col gap-6">
      <Session session={session} />
      <div className="flex flex-col rounded-xl bg-white p-6 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speakers.map((speaker) => (
            <Person person={speaker} appearance="program" key={speaker.id} />
          ))}
        </div>
        <Typography variant="body1">{session.description}</Typography>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row items-center gap-1 bg-primary px-4 py-2 rounded-full hover:cursor-pointer">
          <PiCalendarPlus size={20} className="text-white" />
          <span className="text-base text-white font-semibold">
            Ajouter cette conférence à mon agenda
          </span>
        </div>
      </div>
    </div>
  );
};

export default SessionPopInContent;
