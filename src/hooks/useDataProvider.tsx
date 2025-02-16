"use client";

import { useTranslation } from "react-i18next";
import { SpeakersProps } from "@/components/Speakers/SpeakersProps";
import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { PlaceProps } from "@/components/Place/PlaceProps";
import { PersonProps } from "@/components/Person/PersonProps";
import { SessionProps } from "@/components/Speakers/Session/SessionProps";
import {
  AccommodationProps
} from "@/components/Place/Accommodation/AccommodationProps";
import {PlaceAccessProps} from "@/components/Place/Access/Access.types";
import {ScheduleProps} from "@/components/Place/Schedule/ScheduleProps";

const useData = (ns: string, key: string = "data") => {
  return useTranslation([ns]).t(key, { returnObjects: true });
};

const isSpeakersProps = (content: object): content is SpeakersProps => {
  return content !== null && typeof content === "object";
};

const isSessionProps = (content: object): content is SessionProps[] => {
  return content !== null && typeof content === "object";
};

const isSponsors = (content: object): content is SponsorProps[] => {
  return content !== null && typeof content === "object";
};

const isPlaceProps = (content: object): content is PlaceProps => {
  return content !== null && typeof content === "object";
};

const isPlaceScheduleProps = (content: object): content is ScheduleProps => {
  return content !== null && typeof content === "object";
};

const isPlaceAccessProps = (content: object): content is PlaceAccessProps => {
  return content !== null && typeof content === "object";
};

const isAccommodationProps = (content: object): content is AccommodationProps => {
  return content !== null && typeof content === "object";
};

const isPersonList = (content: object): content is PersonProps[] => {
  return content !== null && typeof content === "object";
};

const useSpeakers = (): SpeakersProps => {
  const content = useData("speakers");
  if (!isSpeakersProps(content)) {
    throw new Error("Content is not a valid Speakers Type");
  }

  return content;
};

const useSessions = (speakerId?: number): SessionProps[] => {
  const content = useData("speakers", "data.sessions");
  if (!isSessionProps(content)) {
    throw new Error("Content is not a valid Speakers Type");
  }

  if (!speakerId) return content;

  return content.filter((session) => session.speakers.includes(speakerId));
};

const useSponsors = (): SponsorProps[] => {
  const content = useData("sponsors", "partners");
  if (!isSponsors(content)) {
    throw new Error("Content is not a valid array of Sponsor Type");
  }

  return content;
};

const usePlace = (): PlaceProps => {
  const content = useData("place", "location");
  if (!isPlaceProps(content)) {
    throw new Error("Content is not a valid Place Type");
  }

  return content;
};

const usePlaceSchedule = (): ScheduleProps => {
  const content = useData("place", "schedules");
  if (!isPlaceScheduleProps(content)) {
    throw new Error("Content is not a valid Place Schedule Type");
  }

  return content;
};

const usePlaceAccess = (): PlaceAccessProps => {
  const content = useData("place", "access");
  if (!isPlaceAccessProps(content)) {
    throw new Error("Content is not a valid Place Access Type");
  }

  return content;
};

const useAccommodation = (): AccommodationProps => {
  const content = useData("place", "accommodation");
  if (!isAccommodationProps(content)) {
    throw new Error("Content is not a valid Accommodation Type");
  }

  return content;
};

const usePersonList = (ns: string, key: string): PersonProps[] => {
  const content = useData(ns, key);
  if (!isPersonList(content)) {
    throw new Error("Content is not a valid array of Sponsor Type");
  }

  return content;
};

const useDataProvider = () => {
  return {
    useSponsors: useSponsors,
    useSpeakers: useSpeakers,
    useSessions: useSessions,
    usePlace: usePlace,
    usePlaceSchedule: usePlaceSchedule,
    usePlaceAccess: usePlaceAccess,
    useAccommodation: useAccommodation,
    usePersonList: usePersonList,
  };
};

export default useDataProvider;
