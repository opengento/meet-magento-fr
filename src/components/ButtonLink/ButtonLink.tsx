import Link from "next/link";
import React, {ReactNode} from "react";
import classNames from "classnames";
import {ButtonLinkProps} from "@/components/ButtonLink/ButtonLinkProps";

const ButtonLink = ({
  variant,
  href,
  target,
  rel,
  iconPosition,
  icon,
  children
}: ButtonLinkProps) => {

  const variantClass = {
    primary: "bg-white text-black",
    secondary: "bg-white text-primary hover:bg-primary hover:text-white",
    "secondary-invert": "bg-primary text-white hover:bg-white hover:text-primary",
    "soft-pink": "bg-purple-500 text-white hover:bg-white hover:text-purple-500",
  };

  const iconClass = {
    primary: "bg-none text-black",
    secondary: "bg-primary text-white group-hover:bg-white group-hover:text-primary",
    "secondary-invert": "bg-white text-primary group-hover:bg-primary group-hover:text-white",
    "soft-pink": "bg-purple-500 text-white group-hover:bg-white group-hover:text-purple-500",
  };

  const extraClass = iconPosition !== undefined
    ? "pl-5 pr-3"
    : "px-5";

  const renderContent = (content: ReactNode) => {
    const iconClassName: string = "inline-block p-1 rounded-full";

    if (iconPosition === "left") {
      return (
        <>
          <div className={classNames(
            "self-start",
            iconClass[variant],
            iconClassName
          )}>
            {icon}
          </div>
          <div className="flex-1">
            {content}
          </div>
        </>
      );
    }
    if (iconPosition === "right") {
      return (
        <>
          <div className="flex-1">
            {content}
          </div>
          <div className={classNames(
            "self-end",
            iconClass[variant],
            iconClassName
          )}>
            {icon}
          </div>
        </>
      );
    }

    return (<>{content}</>);
  };

  return (
    <Link href={href}
          target={target}
          rel={rel}
          className={classNames(
            "inline-flex group gap-3 items-center justify-between py-2.5 rounded-3xl font-medium duration-300",
            extraClass,
            variantClass[variant]
          )}>
      {renderContent(children)}
    </Link>
  );
};

export default ButtonLink;
