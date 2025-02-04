"use client";

import React from "react";
import Typography from "@/components/Typography/Typography";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import Image from "next/image";
import { PiCalendarPlus } from "react-icons/pi";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";

const Session = ({ session }: { session: SessionProps }) => {
  const { t } = useTranslation(["speakers"]);

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Typography color="dark" variant="h4" weight="semibold">
            {session.title}
          </Typography>
          <div className="flex items-center font-medium text-black">
            <Image
              src={`/images/speakers/rooms/${session.room}.svg`}
              alt={t(`speakers:data.rooms.${session.room}`)}
              width={18}
              height={20}
              className="object-fit mr-1"
            />
            <span>{t(`speakers:data.rooms.${session.room}`)}</span>
            <span className="mx-2 text-primary">|</span>
            <span>{session.start}</span>
            <span className="mx-1 text-primary">&bull;</span>
            <span>{session.end}</span>
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
      {!!session.eventUrl && (
        <div className="flex flex-col justify-end items-start md:items-end w-full">
          <ButtonLink
            variant="secondary-invert"
            href={session.eventUrl}
            iconPosition="left"
            icon={<PiCalendarPlus size={24} className="text-white" />}
          >
            <Typography variant="body1" weight="semibold" color="light">
              Ajouter à mon agenda
            </Typography>
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default Session;
