import Image from "next/image";
import { GrFormView } from "react-icons/gr";
import { PersonProps } from "@/components/Person/PersonProps";
import classNames from "classnames";
import { MouseEventHandler } from "react";

const PersonCard = ({
  person,
  appearance = "speaker",
}: {
  person: PersonProps;
  appearance?: "speaker" | "program";
}) => (
  <div className={classNames(
    "text-black",
    {
      "text-sm": appearance === "program"
    }
  )}>
    <div className={classNames(
      "flex flex-wrap items-center",
      {
        "gap-2 mb-2": appearance === "speaker",
        "gap-1": appearance === "program",
      }
    )}>
      <Image
        src={person.companyLogo}
        alt=""
        width={20}
        height={20}
        className={classNames(
          "object-contain",
          {
            "max-w-5 max-h-5": appearance === "speaker",
            "max-w-3 max-h-3": appearance === "program",
          }
        )}
      />
      <span className={classNames(
        {
          "text-sm": appearance === "speaker",
          "text-xs text-gray-600": appearance === "program",
        }
      )}>
        {person.company}
      </span>
    </div>
    <p className={classNames(
      "font-semibold",
      {
        "text-lg": appearance === "speaker",
        "text-md": appearance === "program",
      }
    )}>
      {person.name}
    </p>
    <p className="text-gray-600 italic">{person.role}</p>
  </div>
);

const Person = ({
  person,
  onClick,
  appearance = "speaker",
}: {
  person: PersonProps;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  appearance?: "speaker" | "program";
}) => {
  const imageClass = classNames(
    "aspect-square object-cover overflow-hidden",
    {
      "w-20 h-24 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]": appearance === "program",
      "w-[135px] h-[135px] 3xl:w-[165px] 3xl:h-[165px] rounded-full": appearance === "speaker",
    }
  );

  return (
    <div
      className={classNames(
        "flex flex-row gap-2 3xl:gap-6 group",
        {
          "cursor-pointer": onClick !== undefined,
          "items-center": appearance === "program",
          "items-start sm:items-center": appearance === "speaker"
        }
      )}
      onClick={onClick}
    >
      <div className="relative shrink-0">
        <Image
          src={person.photo}
          alt={person.name}
          width={appearance === "program" ? 96 : 165}
          height={appearance === "program" ? 96 : 165}
          className={imageClass}
        />
        {onClick !== undefined && appearance === "speaker" && (
          <div className="text-white font-semibold lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 lg:hover:cursor-pointer bg-primary w-fit px-4 py-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="flex flex-row items-center gap-1">
              <GrFormView size={20} className="text-white" />
              <span className="text-sm">Biographie</span>
            </div>
          </div>
        )}
      </div>
      <PersonCard person={person} appearance={appearance} />
    </div>
  );
};

export default Person;
