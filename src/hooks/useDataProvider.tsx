'use client';

import { useTranslation } from "react-i18next";
import { SpeakersProps } from "@/components/Speakers/SpeakersProps";
import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import {PlaceProps} from "@/components/Place/PlaceProps";
import {PersonProps} from "@/components/Person/PersonProps";

const useData = (ns: string, key: string = 'data') => {
  return useTranslation([ns]).t(key, { returnObjects: true });
}

const isSpeakersProps = (content: object): content is SpeakersProps => {
  return content !== null && typeof content === 'object';
}

const isSponsors = (content: object): content is SponsorProps[] => {
  return content !== null && typeof content === 'object';
}

const isPlaceProps = (content: object): content is PlaceProps => {
  return content !== null && typeof content === 'object';
}

const isPersonList = (content: object): content is PersonProps[] => {
  return content !== null && typeof content === 'object';
}

const useSpeakers = (): SpeakersProps =>
{
  const content = useData('speakers');
  if (!isSpeakersProps(content)) {
    throw new Error('Content is not a valid Speakers Type');
  }

  return content;
}

const useSponsors = (): SponsorProps[] =>
{
  const content = useData('sponsors');
  if (!isSponsors(content)) {
    throw new Error('Content is not a valid array of Sponsor Type');
  }

  return content;
}

const usePlace = (): PlaceProps =>
{
  const content = useData('place');
  if (!isPlaceProps(content)) {
    throw new Error('Content is not a valid Place Type');
  }

  return content;
}

const useStaffs = (): PersonProps[] =>
{
  const content = useData('staff', 'members');
  if (!isPersonList(content)) {
    throw new Error('Content is not a valid array of Sponsor Type');
  }

  return content;
}

const useDataProvider = () => {
  return {
    useSponsors: useSponsors,
    useSpeakers: useSpeakers,
    usePlace: usePlace,
    useStaffs: useStaffs,
  }
};

export default useDataProvider;
