import React from "react";
import { PlaceProps } from "@/components/Place/PlaceProps";
import {
  PlaceAccessParkingProps,
  PlaceAccessProps,
  PlaceAccessPublicTransportProps,
  LocationProps
} from "@/components/Place/Access/Access.types";
import { FaParking } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import classNames from "classnames";

interface PlaceAccess {
  location: PlaceProps;
  access: PlaceAccessProps;
}

const Access = ({ location, access }: PlaceAccess) => {

  const renderPublicTransport = (publicTransport: PlaceAccessPublicTransportProps) => (
    <>
      <Typography
        variant="subtitle1"
        color="dark"
        weight="semibold"
        className="mb-3"
      >
        {publicTransport.title}
      </Typography>
      <div className="flex flex-row flex-wrap gap-y-3 gap-x-6">
        {publicTransport.itinerary.map((itinerary, index) => (
          <div
            className={classNames(
              "flex flex-row flex-wrap gap-2 items-center",
              {
                "w-full": itinerary.icons.length > 1
              }
            )}
            key={index}
          >
            <div className="flex flex-row gap-2">
              {itinerary.icons.map((icon, index) => (
                <Image
                  src={icon}
                  height={20}
                  width={100}
                  alt=""
                  key={`icon-${index}`}
                  className="max-h-5 w-full"
                />
              ))}
            </div>
            <Typography color="dark">{itinerary.name}</Typography>
          </div>
        ))}
      </div>
    </>
  );

  const renderParkingLocation = (location: LocationProps) => (
    <div className="flex flex-row gap-1 items-center">
      <Typography color="primary">
        <FaParking/>
      </Typography>
      <Typography color="dark">
        {location.name}
      </Typography>
    </div>
  );

  const renderParking = (parking: PlaceAccessParkingProps) => (
    <>
      <Typography
        variant="subtitle1"
        color="dark"
        weight="semibold"
        className="mb-1"
      >
        {parking.title}
      </Typography>
      <Typography color="dark" className="whitespace-pre-wrap">
        {parking.description}
      </Typography>
      <ul className="text-black mt-4">
        {parking.locations.map((location, index) => (
          <li key={index} className="mb-2">
            {(location.url && (
              <Link
                href={location.url}
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                {renderParkingLocation(location)}
              </Link>
            ))}
            {!location.url && (
              <>
                {renderParkingLocation(location)}
              </>
            )}
            {location.content && (
              <Typography color="dark" className="whitespace-pre-wrap">
                {location.content}
              </Typography>
            )}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="flex flex-col gap-4 md:gap-6 md:py-6">
      <div className="flex flex-col gap-4 ">
        <Typography
          variant="h3"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
        >
          {access.title}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {access.description}
        </Typography>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2 order-last md:order-first gap-5">
            <div className="flex flex-row gap-2">
              <Typography color="primary">
                <FaLocationDot className="h-6"/>
              </Typography>
              <address className="text-black whitespace-pre-wrap not-italic">
                {location.title},<br/>
                {location.address}
              </address>
            </div>
            <ButtonLink
              variant="secondary-invert-w-border"
              href={location.url}
              target="_blank"
              rel="noopener"
              iconPosition="right"
              icon={<IoIosArrowForward/>}
            >
              Obtenir mon itinéraire
            </ButtonLink>
          </div>
          <div className="my-2">
            {renderPublicTransport(access.publicTransport)}
          </div>
          <div className="my-2">
            {renderParking(access.parking)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
