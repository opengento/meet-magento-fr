import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { GrFormView } from "react-icons/gr";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  role: string;
  image: string;
}

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <div className="text-black flex flex-col justify-center cursor-pointer">
    <div className="flex gap-2 mb-2">
      {/* <img
          src={`/${speaker.company.toLowerCase()}-logo.svg`}
          alt={speaker.company}
          className="h-6"
        /> */}
      <span className="text-sm">{speaker.company}</span>
    </div>
    <p className="font-semibold text-lg mb-1">{speaker.name}</p>
    <p className="text-gray-600 italic">{speaker.role}</p>
  </div>
);

const Speaker = ({ speaker }: { speaker: Speaker }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 768 ? (
        <div className="flex flex-row gap-2">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={135}
            height={135}
            className="min-w-[135px] rounded-full relative aspect-square overflow-hidden object-cover"
          />
          <SpeakerCard speaker={speaker} />
        </div>
      ) : (
        <>
          <div className="flex flex-col relative">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={165}
              height={165}
              className="min-w-[165px] rounded-full relative aspect-square overflow-hidden object-cover"
            />
            <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary w-fit px-4 py-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="flex flex-row items-center gap-1">
                <GrFormView size={20} className="text-white" />
                <span className="text-sm">Biographie</span>
              </div>
            </div>
          </div>
          <SpeakerCard speaker={speaker} />
        </>
      )}
    </>
  );
};

export default Speaker;
