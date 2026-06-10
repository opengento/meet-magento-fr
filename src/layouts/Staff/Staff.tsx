'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import React from "react";
import { PersonProps } from "@/components/Person/PersonProps";
import Person from "@/components/Person/Person";
import useDataProvider from "@/hooks/useDataProvider";
import PersonPopIn from "@/components/Person/PersonPopIn";
import TopBanner from "@/components/TopBanner/TopBanner";

interface StaffProps {
  year?: string|null|undefined
  variant?: "widget"|"page"
}

const Staff = ({year = null, variant = "page"}: StaffProps) => {
  const staffNs = year ? 'staff-'.concat(year) : 'staff';
  const { t } = useTranslation([staffNs, 'common']);
  const dataProvider = useDataProvider();
  const staffMembers = dataProvider.usePersonList(staffNs, 'members');
  const [selectedStaff, setSelectedStaff] = React.useState<PersonProps | null>(null);

  const handleStaffClick = (staff: PersonProps) => {
    setSelectedStaff(staff);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  const renderImages = () => {
    const images = t(staffNs.concat(':images'), { returnObjects: true });
    if (Array.isArray(images)) {
      return (
        <div className="flex flex-col flex-wrap md:flex-row gap-4 justify-center mb-12 w-full">
          {images.map((src, index) => (
            <Image key={index}
                   src={src}
                   alt=""
                   height={438}
                   width={582}
                   className="rounded-xl object-contain max-h-96 w-auto"
            />
          ))}
        </div>
      );
    }
  }

  const renderTitle = () => {
    if (variant === "page") {
      return (
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-2"
        >
          {t(staffNs.concat(':title'))}
        </Typography>
      );
    }

    return (
      <TopBanner
        title={t(staffNs.concat(':title'))}
        backgroundImage="/images/pattern_top.svg"
      />
    );
  }

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        {renderTitle()}
        <Typography
          color="dark"
          variant="subtitle1"
          className="mt-8 mb-8"
        >
          {t(staffNs.concat(':subtitle'))}
        </Typography>
        {renderImages()}
        <Typography color="dark" className="whitespace-pre-wrap">
          {t(staffNs.concat(':description'))}
        </Typography>
      </ContentMedia>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 my-7">
        {staffMembers
          .map((staff) => (
            <Person
              person={staff}
              onClick={() => handleStaffClick(staff)}
              key={staff.id}
            />
          ))}
      </div>
      {selectedStaff && (
        <PersonPopIn
          isOpen={!!selectedStaff}
          onClose={handleCloseModal}
          selectedPerson={selectedStaff}
        />
      )}
    </Container>
  );
};

export default Staff;
