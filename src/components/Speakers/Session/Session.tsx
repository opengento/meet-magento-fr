import React from "react";
import Typography from "@/components/Typography/Typography";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import Image from "next/image";
import {PiCalendarPlus} from "react-icons/pi";

const Session = ({ session }: { session: SessionProps }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between rounded-xl gap-6 p-6 bg-white">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Typography color="dark" variant="h4" weight="semibold">
            {session.title}
          </Typography>
          <div className="flex items-center font-medium text-black">
            <Image src={session.room} alt="Room" width={24} height={24} />
            <span>{session.room}</span>
            <span className="mx-2">|</span>
            <span>{session.start}</span>
            <span className="mx-1">|</span>
            <span>{session.end}</span>
          </div>
        </div>
        <div className="flex gap-2">
          {session.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 rounded-md bg-secondary"
            >
              <Typography
                variant="caption"
                weight="bold"
                className="text-white"
              >
                {tag.toUpperCase()}
              </Typography>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end items-start md:items-end w-full">
        <button className="bg-primary text-white px-4 py-2 rounded-xl flex items-center gap-2 w-fit">
          <PiCalendarPlus size={24} className="text-white" />
          <Typography
            variant="body1"
            weight="semibold"
            color="light"
          >
            Ajouter à mon agenda
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default Session;
