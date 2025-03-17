"use client";

import { useTranslation } from "react-i18next";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import ProgramSplit from "@/components/Program/ProgramSplit";
import React, {Fragment} from "react";
import ProgramTile from "@/components/Program/ProgramTile";
import SessionPopIn from "@/components/Speakers/Session/SessionPopIn";
import { BreaktimeProps } from "@/components/Program/BreaktimeProps";
import Breaktime from "@/components/Program/Breaktime";

const Timeline = () => {
  const { t } = useTranslation(["speakers", "program"]);
  const sessions = t("speakers:data.sessions", { returnObjects: true }) as SessionProps[];
  const breaktimes = t("program:breaktimes", { returnObjects: true }) as BreaktimeProps[];
  const rooms = t("speakers:data.rooms", { returnObjects: true }) as Record<string, string>;
  const schedules: Record<string, Record<string, SessionProps>> = {};

  sessions.map((session) => {
    if (session.start && session.room) {
      schedules[session.start] ??= {};
      schedules[session.start][session.room] ??= session;
    }
  });
  breaktimes.map((breaktime) => {
    schedules[breaktime.start] ??= {};
  })

  const startHours = Object.keys(schedules).sort();

  // Session Popin State Handler
  const [selectedSession, setSelectedSession] =
    React.useState<SessionProps | null>(null);

  const renderSession = (hour: string, room: string) => {
    const session = schedules[hour][room] ?? null;
    if (session === null) {
      return (
        <div></div>
      );
    }

    return (
      <ProgramTile
        session={session}
        onPopInClick={() => setSelectedSession(session)}
      />
    );
  };

  const renderSchedule = (hour: string) => {
    const breaktime = breaktimes.find((breaktime) => breaktime.start === hour);
    if (breaktime) {
      return (
        <div className="w-full">
          <Breaktime breaktime={breaktime} />
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
        {Object.keys(rooms).map((room) => (
          <Fragment key={`timeline-${hour}-${room}`}>
            {renderSession(hour, room)}
          </Fragment>
        ))}
      </div>
    );
  };

  return (
    <>
      {startHours.map((hour) => (
        <Fragment key={`timeline-${hour}`}>
          <ProgramSplit title={hour}/>
          {renderSchedule(hour)}
        </Fragment>
      ))}
      {selectedSession && (
        <SessionPopIn
          selectedSession={selectedSession}
          isOpen={!!selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </>
  );
};

export default Timeline;
