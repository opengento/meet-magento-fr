type Time = {
  subtitle: string;
  text: string;
  link?: string | undefined;
};

export type ScheduleProps = {
  title: string;
  times: Time[];
};
