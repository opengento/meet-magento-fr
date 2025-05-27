"use client";

import React from "react";
import Typography from "@/components/Typography/Typography";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import Image from "next/image";
import { PiCalendarPlus } from "react-icons/pi";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface Session {
  session: SessionProps;
  showAddToCalendar?: boolean;
  onPopInClick?: () => void;
}

const Session = ({
  session,
  showAddToCalendar = true,
  onPopInClick,
}: Session) => {
  const { t } = useTranslation(["speakers"]);
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Typography color="dark" variant="h4" weight="semibold">
            {session.title}
          </Typography>
          <div className="flex items-center font-medium text-black gap-x-2">
            {!!session.room && (
              <>
                <Image
                  src={`/images/speakers/rooms/${session.room}.svg`}
                  alt=""
                  width={18}
                  height={20}
                  className="object-contain mr-1"
                />
                <span>{t(`speakers:data.rooms.${session.room}`)}</span>
              </>
            )}
            {!!session.start && session.end && (
              <>
                <span className="text-primary">|</span>
                <span>
                  <span>{session.start}</span>
                  <span className="mx-1 text-primary">&bull;</span>
                  <span>{session.end}</span>
                </span>
              </>
            )}
            <Image
              src={`/images/flags/1x1/${session.lang}.svg`}
              alt={session.lang}
              width={16}
              height={16}
              className="rounded-full w-5 h-5 border border-primary p-[1px]"
            />
            {onPopInClick && (
              <BsFillInfoCircleFill
                className="text-pink mx-1 hover:cursor-pointer rounded-full w-5 h-5 border border-pink p-[1px]"
                onClick={onPopInClick}
              />
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {session.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 rounded-md bg-secondary">
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
      {showAddToCalendar && !!session.eventUrl && (
        <div className="flex flex-col justify-end items-start md:items-end w-full">
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

export default Session;
