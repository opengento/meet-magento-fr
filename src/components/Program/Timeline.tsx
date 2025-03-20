"use client";

import { useTranslation } from "react-i18next";
import { Fragment, useState } from "react";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import { BreaktimeProps } from "@/components/Program/BreaktimeProps";
import ProgramSplit from "@/components/Program/ProgramSplit";
import ProgramTile from "@/components/Program/ProgramTile";
import SessionPopIn from "@/components/Speakers/Session/SessionPopIn";
import Breaktime from "@/components/Program/Breaktime";

interface TimelineProps {
  activeFilters: string[];
}

const Timeline = ({ activeFilters }: TimelineProps) => {
  const { t } = useTranslation(["speakers", "program"]);
  const [selectedSession, setSelectedSession] = useState<SessionProps | null>(
    null
  );

  const sessions = t("speakers:data.sessions", {
    returnObjects: true,
  }) as SessionProps[];

  const breaktimes = t("program:breaktimes", {
    returnObjects: true,
  }) as BreaktimeProps[];

  const rooms = t("speakers:data.rooms", {
    returnObjects: true,
  }) as Record<string, string>;

  // Organize sessions by time and room
  const schedules = sessions
    .filter(
      (session) =>
        activeFilters.length === 0 ||
        session.tags.some((tag) => activeFilters.includes(tag))
    )
    .reduce((acc, session) => {
      if (session.start && session.room) {
        acc[session.start] = {
          ...acc[session.start],
          [session.room]: session,
        };
      }
      return acc;
    }, {} as Record<string, Record<string, SessionProps>>);

  // Add breaktime slots
  breaktimes.forEach((breaktime) => {
    schedules[breaktime.start] ??= {};
  });

  const startHours = Object.keys(schedules).sort();

  const renderSession = (hour: string, room: string) => {
    const session = schedules[hour]?.[room];
    if (!session) return <div />;

    return (
      <ProgramTile
        session={session}
        onPopInClick={() => setSelectedSession(session)}
      />
    );
  };

  const renderSchedule = (hour: string) => {
    const breaktime = breaktimes.find((breakItem) => breakItem.start === hour);

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
          <ProgramSplit title={hour} />
          {renderSchedule(hour)}
        </Fragment>
      ))}

      {selectedSession && (
        <SessionPopIn
          selectedSession={selectedSession}
          isOpen={true}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </>
  );
};

export default Timeline;
