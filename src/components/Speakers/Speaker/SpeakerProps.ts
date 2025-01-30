export type SpeakerProps = {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  companyUrl: string;
  linkedin?: string;
  role: string;
  image: string;
  biography: string;
  sessions: SessionProps[];
};

type SessionProps = {
  title: string;
  room: string;
  start: string;
  end: string;
  tags: string[];
};
