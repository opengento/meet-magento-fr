"use client";

import {useTranslation} from "react-i18next";
import {SpeakersProps} from "@/components/Speakers/SpeakersProps";
import {SponsorProps} from "@/components/SponsorList/Sponsor/Sponsor.types";
import {PlaceProps} from "@/components/Place/PlaceProps";
import {PersonProps} from "@/components/Person/PersonProps";
import {SessionProps} from "@/components/Speakers/Session/SessionProps";
import {AccommodationProps} from "@/components/Place/Accommodation/AccommodationProps";
import {PlaceAccessProps} from "@/components/Place/Access/Access.types";
import {ScheduleProps} from "@/components/Place/Schedule/ScheduleProps";

const useData = (ns: string, key: string = "data") => {
  return useTranslation([ns]).t(key, { returnObjects: true });
};

const useSpeakers = (year?: string): SpeakersProps => {
  if (year) {
    year = "-" + year;
  }

  return useData("speakers" + year) as SpeakersProps;
};

const useSessions = (speakerId?: number|null, year?: string): SessionProps[] => {
  if (year) {
    year = "-" + year;
  }
  const content = useData("speakers" + year, "data.sessions") as SessionProps[];
  if (content === undefined || content === null) return [];
  if (!speakerId) return content;

  return content.filter((session) => session.speakers.includes(speakerId));
};

const useSponsors = (year?: string): SponsorProps[] => {
  if (year) {
    year = "-" + year;
  }

  return useData("sponsors" + year, "partners") as SponsorProps[];
};

const usePlace = (): PlaceProps => {
  return useData("place", "location") as PlaceProps;
};

const usePlaceSchedule = (): ScheduleProps => {
  return useData("place", "schedules") as ScheduleProps;
};

const usePlaceAccess = (): PlaceAccessProps => {
  return useData("place", "access") as PlaceAccessProps;
};

const useAccommodation = (): AccommodationProps => {
  return useData("place", "accommodation") as AccommodationProps;
};

const usePersonList = (ns: string, key: string): PersonProps[] => {
  return useData(ns, key) as PersonProps[];
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
