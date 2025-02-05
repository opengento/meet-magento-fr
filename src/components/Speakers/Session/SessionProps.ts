export type SessionProps = {
  id: number;
  title: string;
  description: string;
  lang: string;
  track: string;
  room?: string;
  start?: string;
  end?: string;
  tags: string[];
  speakers: number[];
  eventUrl?: string;
};
