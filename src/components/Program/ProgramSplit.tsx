import React from "react";
import Typography from "../Typography/Typography";

interface ProgramSplitProps {
  title: string;
}

const ProgramSplit = ({ title }: ProgramSplitProps) => {
  return (
    <div className="program-split flex items-center gap-8 md:p-4">
      <div className="program-split__left">
        <Typography variant="h4" weight="semibold" color="dark">
          {title}
        </Typography>
      </div>
      <div className="program-split__right flex-1">
        <div className="h-[1px] bg-gray-400 w-full"></div>
      </div>
    </div>
  );
};

export default ProgramSplit;
