import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { GrFormView } from "react-icons/gr";
import { PersonProps } from "@/components/Person/PersonProps";
import classNames from "classnames";

const PersonCard = ({ person }: { person: PersonProps }) => (
  <div className="text-black flex flex-col justify-center cursor-pointer">
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
    <p className="font-semibold text-lg mb-1">{person.name}</p>
    <p className="text-gray-600 italic">{person.role}</p>
  </div>
);

const Person = ({ person }: { person: PersonProps }) => {
  const { width } = useWindowSize();
  const bgClass = `bg-cover bg-photo-${person.photoBg}`;

  return (
    <>
      {width < 768 ? (
        <div className="flex flex-row gap-2 rounded-full">
          <Image
            src={person.photo}
            alt={person.name}
            width={135}
            height={135}
            className={classNames(
              "min-w-[135px] rounded-full relative aspect-squareobject-cover overflow-hidden",
              bgClass
            )}
          />
          <PersonCard person={person} />
        </div>
      ) : (
        <>
          <div className="flex flex-col relative rounded-full">
            <Image
              src={person.photo}
              alt={person.name}
              width={165}
              height={165}
              className={classNames(
                "min-w-[165px] rounded-full relative aspect-square object-cover overflow-hidden",
                bgClass
              )}
            />
            <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary w-fit px-4 py-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="flex flex-row items-center gap-1">
                <GrFormView size={20} className="text-white" />
                <span className="text-sm">Biographie</span>
              </div>
            </div>
          </div>
          <PersonCard person={person} />
        </>
      )}
    </>
  );
};

export default Person;
