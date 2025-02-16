import { ScheduleProps } from "@/components/Place/Schedule/ScheduleProps";
import Typography from "@/components/Typography/Typography";
import { FaClock } from "react-icons/fa";
import Link from "next/link";

const Schedule = ({ schedule }: { schedule: ScheduleProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <Typography variant="subtitle1" color="primary">
          <FaClock className="h-6 w-6" />
        </Typography>
        <Typography variant="subtitle1" color="dark">
          {schedule.title}
        </Typography>
      </div>
      <ul className="list-disc pl-6 md:pl-12 text-black">
        {schedule.times.map((time, index) => (
          <li className="pb-2" key={index}>
            <div className="flex flex-row flex-wrap gap-x-1">
              <Typography color="dark" weight="semibold">{time.subtitle}:</Typography>
              {time.link && (
                <Link href={time.link} className="underline">
                  <Typography color="dark">{time.text}</Typography>
                </Link>
              )}
              {time.link === undefined && (
                <Typography color="dark">{time.text}</Typography>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
