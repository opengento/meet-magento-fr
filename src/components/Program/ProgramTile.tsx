import React from "react";
import { SessionProps } from "../Speakers/Session/SessionProps";
import Session from "../Speakers/Session/Session";
import { PiCalendarPlus } from "react-icons/pi";
import Person from "../Person/Person";
import useDataProvider from "@/hooks/useDataProvider";

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
    <div className="program-tile bg-white rounded-xl flex flex-col justify-between gap-6 p-4 md:p-6 h-full group">
      <div className="flex flex-col gap-6">
        <Session session={session} onPopInClick={onPopInClick} />
        <div className="program-tile-speakers flex flex-col gap-2">
          {speakers.map((speaker) => (
            <Person person={speaker} appearance="program" key={speaker.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row items-center gap-1 bg-primary px-4 py-2 rounded-full lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 lg:hover:cursor-pointer">
          <PiCalendarPlus size={20} className="text-white" />
          <span className="text-sm text-white font-semibold">
            Ajouter à mon agenda
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgramTile;
