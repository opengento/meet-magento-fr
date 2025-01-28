export type SpeakerProps = {
  id: number;
  name: string;
  title: string;
  company: string;
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
