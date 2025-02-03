import { ReactNode } from "react";
import classNames from "classnames";

interface Label {
  required: boolean;
  className?: string;
  children?: ReactNode;
}

const Label = ({ required, className, children }: Label) => {
  return (
    <label className={classNames(
      "text-base font-semibold",
      className
    )}>
      {children}
      {required && (<em className="text-red-700 not-italic ml-1">*</em>)}
    </label>
  );
};

export default Label;
