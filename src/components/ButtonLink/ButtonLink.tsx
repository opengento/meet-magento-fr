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
    primary: "text-black bg-[url(/images/background.svg)] bg-cover bg-center hover:bg-[left_75%]",
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

  const paddingClass = iconPosition !== undefined
    ? classNames("py-2.5", iconPosition === "left" ? "pr-5 pl-3" : "pl-5 pr-3")
    : "py-2.5 px-5";

  const wrapperClass: string = variant === "primary"
    ? "gap-1 rounded-3xl bg-white py-2 px-5"
    : "gap-3 ";

  const renderContent = (content: ReactNode) => {
    const iconClassName: string = "inline-block p-1 rounded-full";
    const contentClassName: string = variant === "primary"
      ? "flex-1 bg-none bg-cover bg-center bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 group-hover:text-transparent"
      : "flex-1";

    if (iconPosition === "left") {
      return (
        <>
          <div className={classNames(
            iconClass[variant],
            iconClassName
          )}>
            {icon}
          </div>
          <div className={contentClassName}>
            {content}
          </div>
        </>
      );
    }
    if (iconPosition === "right") {
      return (
        <>
          <div className={contentClassName}>
            {content}
          </div>
          <div className={classNames(
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
            "inline-block group rounded-3xl font-semibold duration-300",
            variant === "primary" ? "p-[3px]" : paddingClass,
            variantClass[variant]
          )}>
      <div className={classNames(
        "flex items-center justify-between text-center",
        wrapperClass
      )}>
        {renderContent(children)}
      </div>
    </Link>
  );
};

export default ButtonLink;
