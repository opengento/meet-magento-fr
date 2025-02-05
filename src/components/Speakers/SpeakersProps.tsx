import { ReactNode } from "react";
import { PersonProps } from "@/components/Person/PersonProps";

export type SpeakersProps = {
  title: ReactNode,
  subtitle: ReactNode,
  description: ReactNode,
  isRegistrationEnabled: boolean,
  registrationLabel: ReactNode,
  registrationFormUrl: string,
  speakers: PersonProps[]
};
