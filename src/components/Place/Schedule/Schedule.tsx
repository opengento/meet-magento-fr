import { ScheduleProps } from "@/components/Place/Schedule/ScheduleProps";
import Typography from "@/components/Typography/Typography";
import { FaClock } from "react-icons/fa";

const Schedule = ({ schedule }: { schedule: ScheduleProps }) => {
  let i = 0;

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
        {Object.entries(schedule.times).map(([key, value]) => (
          <li className="pb-2" key={++i}>
            <div className="flex flex-row flex-wrap gap-x-1">
              <Typography color="dark" weight="semibold">{key}:</Typography>
              <Typography color="dark">{value}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
