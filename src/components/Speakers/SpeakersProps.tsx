import {ReactNode} from "react";
import {SpeakerProps} from "@/components/Speakers/Speaker/SpeakerProps";

export type SpeakersProps = {
  title: ReactNode,
  subtitle: ReactNode,
  description: ReactNode,
  registrationLabel: ReactNode,
  registrationFormUrl: string,
  speakers: SpeakerProps[]
};
