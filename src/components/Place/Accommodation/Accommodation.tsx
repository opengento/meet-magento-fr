import Typography from "@/components/Typography/Typography";
import React from "react";
import { AccommodationProps } from "@/components/Place/Accommodation/AccommodationProps";
import Link from "next/link";
import { FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";

const Accommodation = ({ accomodation }: { accomodation: AccommodationProps }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:py-6">
      <div className="flex flex-col gap-4 ">
        <Typography
          variant="h3"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
        >
          {accomodation.title}
        </Typography>
        <Typography
          color="dark"
          weight="semibold"
          className="whitespace-pre-wrap"
        >
          {accomodation.description}
        </Typography>
        <ul className="list-disc pl-5 text-black">
          {accomodation.locations.map((location, index) => (
            <li key={index} className="mb-2">
              <Link href={location.url} target="_blank" rel="noopener" className="flex flex-row gap-2">
                <Typography color="dark" className="underline">
                  {location.name}
                </Typography>
                <div className="flex flex-row items-center gap-x-1 text-secondary">
                  {location.rank}<FaStar size={14}/>
                </div>
              </Link>
              {location.content && (
                <Typography color="dark" className="whitespace-pre-wrap">
                  {location.content}
                </Typography>
              )}
              {location.telephone && (
                <div
                  className="address flex flex-row items-center gap-x-2 text-primary">
                  <FaPhone size={14}/>
                  <Link href={"tel:" + location.telephone} className="hover:underline">
                    <Typography color="dark">
                      {location.telephone}
                    </Typography>
                  </Link>
                </div>
              )}
              {location.address && (
                <div
                  className="address flex flex-row items-center gap-x-2 text-primary">
                  <FaLocationDot size={14}/>
                  <Typography color="dark">
                    {location.address}
                  </Typography>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accommodation;
