import {ReactNode} from "react";
import {SpeakerProps} from "@/components/Speakers/Speaker/SpeakerProps";

type SpeakersType = {
  title: ReactNode,
  subtitle: ReactNode,
  description: ReactNode,
  registrationLabel: ReactNode,
  registrationFormUrl: string,
  speakers: SpeakerProps[]
};
export type SpeakersTypeProps = SpeakersType;
export type SpeakersProps = {
  data: SpeakersType;
};
