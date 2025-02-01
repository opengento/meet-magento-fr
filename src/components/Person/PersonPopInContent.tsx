import React, { ReactNode } from "react";
import { PersonProps } from "@/components/Person/PersonProps";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import Typography from "@/components/Typography/Typography";
import classNames from "classnames";

interface PersonPopInContentProps {
  person: PersonProps;
  children?: ReactNode
}

const PersonPopInContent = ({ person, children }: PersonPopInContentProps) => {
  const bgClass = `bg-photo-${person.photoBg}`;

  return (
    <div className="person-popin-content flex flex-col gap-6">
      {/* Person info section */}
      <div className="flex gap-6">
        <div className="relative">
          <Image
            src={person.photo}
            alt={person.name}
            className={classNames(
              "rounded-xl object-cover bg-cover",
              bgClass
            )}
            width={235}
            height={235}
          />
          {person.linkedin && (
          <div className="absolute bottom-2 left-2 flex gap-2 text-primary">
            <Link
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
              href={person.linkedin}
              target="_blank"
              rel="noopener"
            >
              <FaLinkedinIn size={16} />
            </Link>
          </div>
          )}
        </div>
        <div className="flex flex-col-reverse">
          <div className="flex items-center gap-2">
            <Image
              src={person.companyLogo}
              alt={person.company}
              width={20}
              height={20}
            />
            <Link href={person.companyUrl} target="_blank" rel="noopener">
              <Typography variant="body2" weight="normal">
                {person.company}
              </Typography>
            </Link>
          </div>
          <Typography variant="subtitle2" weight="normal" className="italic">
            {person.role}
          </Typography>
          <Typography variant="h3" weight="semibold" className="font-alt">
            {person.name}
          </Typography>
        </div>
      </div>

      {/* Biography text */}
      <Typography variant="body1" weight="normal">
        {person.biography}
      </Typography>

      {/* Sessions section */}
      {children}
    </div>
  );
};

export default PersonPopInContent;
