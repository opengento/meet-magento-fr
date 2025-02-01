import {ReactNode} from "react";
import {PersonProps} from "@/components/Person/PersonProps";

export type SpeakersProps = {
  title: ReactNode,
  subtitle: ReactNode,
  description: ReactNode,
  registrationLabel: ReactNode,
  registrationFormUrl: string,
  speakers: PersonProps[]
};
