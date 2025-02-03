import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { GrFormView } from "react-icons/gr";
import { PersonProps } from "@/components/Person/PersonProps";
import classNames from "classnames";

const PersonCard = ({
  person,
  appearance = "speaker",
}: {
  person: PersonProps;
  appearance?: "speaker" | "program";
}) => (
  <div className="text-black flex flex-col justify-center cursor-pointer">
    {appearance === "speaker" && (
      <div className="flex gap-2 mb-2">
        <Image
          src={person.companyLogo}
          alt={person.company}
          width={20}
          height={20}
          className="h-6"
        />
        <span className="text-sm">{person.company}</span>
      </div>
    )}
    <p className="font-semibold text-lg">{person.name}</p>
    <p className="text-gray-600 italic">{person.role}</p>
  </div>
);

const Person = ({
  person,
  appearance = "speaker",
}: {
  person: PersonProps;
  appearance?: "speaker" | "program";
}) => {
  const { width } = useWindowSize();
  const bgClass = `bg-cover bg-photo-${person.photoBg}`;

  const imageClass = classNames(
    "relative aspect-square object-cover overflow-hidden",
    {
      "w-20 h-24": appearance === "program",
      "min-w-[135px]": appearance === "speaker" && width < 768,
      "min-w-[165px]": appearance === "speaker" && width >= 768,
      "rounded-full": appearance === "speaker",
      "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]":
        appearance === "program",
    },
    bgClass
  );

  return (
    <>
      {width < 768 ? (
        <div className="flex flex-row gap-2">
          <Image
            src={person.photo}
            alt={person.name}
            width={appearance === "speaker" ? 96 : 135}
            height={appearance === "speaker" ? 96 : 135}
            className={imageClass}
          />
          <PersonCard person={person} appearance={appearance} />
        </div>
      ) : (
        <>
          <div className="flex flex-col relative">
            <Image
              src={person.photo}
              alt={person.name}
              width={appearance === "speaker" ? 96 : 165}
              height={appearance === "speaker" ? 96 : 165}
              className={imageClass}
            />
            {appearance === "speaker" && (
              <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary w-fit px-4 py-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex flex-row items-center gap-1">
                  <GrFormView size={20} className="text-white" />
                  <span className="text-sm">Biographie</span>
                </div>
              </div>
            )}
          </div>
          <PersonCard person={person} appearance={appearance} />
        </>
      )}
    </>
  );
};

export default Person;
