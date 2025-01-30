import React from "react";
import { SpeakerProps } from "@/components/Speakers/Speaker/SpeakerProps";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import Typography from "@/components/Typography/Typography";
import { PiCalendarPlus } from "react-icons/pi";

interface SpeakerPopInContentProps {
  speaker: SpeakerProps;
}

const SpeakerPopInContent = ({ speaker }: SpeakerPopInContentProps) => {
  return (
    <div className="speaker-popin-content flex flex-col gap-6">
      {/* Speaker info section */}
      <div className="flex gap-6">
        <div className="relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            className="rounded-xl object-cover"
            width={235}
            height={235}
          />
          {speaker.linkedin && (
          <div className="absolute bottom-2 left-2 flex gap-2 text-primary">
            <Link
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
              href={speaker.linkedin}
              target="_blank"
              rel="noopener"
            >
              <FaLinkedinIn size={16} />
            </Link>
          </div>
          )}
        </div>
        <div className="flex flex-col flex-col-reverse">
          <div className="flex items-center gap-2">
            <Image
              src={speaker.companyLogo}
              alt={speaker.company}
              width={20}
              height={20}
            />
            <Link href={speaker.companyUrl} target="_blank" rel="noopener">
              <Typography variant="body2" weight="normal">
                {speaker.company}
              </Typography>
            </Link>
          </div>
          <Typography variant="subtitle2" weight="normal" className="italic">
            {speaker.role}
          </Typography>
          <Typography variant="h3" weight="semibold" className="font-alt">
            {speaker.name}
          </Typography>
        </div>
      </div>

      {/* Biography text */}
      <Typography variant="body1" weight="normal">
        {speaker.biography}
      </Typography>

      {/* Sessions section */}
      {speaker.sessions?.map((session, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between rounded-xl gap-6 p-6 bg-white"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Typography color="dark" variant="h4" weight="semibold">
                {session.title}
              </Typography>
              <div className="flex items-center font-medium text-black">
                {/* <Image src={session.room} alt="Room" width={24} height={24} /> */}
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
            <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 rounded-xl w-fit">
              <PiCalendarPlus size={24} className="text-white" />
              <Typography
                variant="body1"
                weight="semibold"
                className="text-white"
              >
                Ajouter à mon agenda
              </Typography>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakerPopInContent;
