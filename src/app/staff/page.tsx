'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import React from "react";
import {PersonProps} from "@/components/Person/PersonProps";
import Person from "@/components/Person/Person";
import useDataProvider from "@/hooks/useDataProvider";
import PersonPopIn from "@/components/Person/PersonPopIn";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {IoIosArrowForward} from "react-icons/io";

export default function Page() {
  const { t } = useTranslation(['staff', 'common']);
  const dataProvider = useDataProvider();
  const staffMembers = dataProvider.useStaffs();
  const [selectedStaff, setSelectedStaff] = React.useState<PersonProps | null>(null);

  const handleStaffClick = (staff: PersonProps) => {
    setSelectedStaff(staff);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  const renderImages = () => {
    const images = t('staff:images', { returnObjects: true });
    if (Array.isArray(images)) {
      return (
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {images.map((src, index) => (
            <Image key={index}
                   src={src}
                   alt=""
                   height={438}
                   width={582}
                   className="rounded-xl object-cover max-h-[438px]"
            />
          ))}
        </div>
      );
    }
  }

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          className="mb-2"
        >
          {t('staff:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8"
        >
          {t('staff:subtitle')}
        </Typography>
        {renderImages()}
        <Typography color="dark" className="whitespace-pre-wrap">
          {t('staff:description')}
        </Typography>
      </ContentMedia>
      <div className="grid grid-cols-3 gap-8 gap-y-12">
        {staffMembers
          .map((staff) => (
            <div
              key={staff.id}
              className="flex flex-row gap-6 group hover:cursor-pointer"
              onClick={() => handleStaffClick(staff)}
            >
              <Person person={staff}/>
            </div>
          ))}
      </div>
      <ContentMedia
        imageUrl="/images/media/faq.png"
        imagePosition="left"
        imageWidth="40%"
      >
        <div className="flex flex-col gap-6 h-full justify-center">
          <Typography
            variant="subtitle1"
            weight="semibold"
            color="primary"
          >
            Rejoignez-nous à Meet Magento France 2025 !
          </Typography>
          <Typography color="dark">
            Réservez votre place dès maintenant et rejoignez-nous pour un événement riche en échanges, en apprentissages et en opportunités !
          </Typography>
          <div className="flex flex-row flex-wrap gap-8">
            <ButtonLink
              variant="secondary-invert"
              href="/#programs"
              iconPosition="right"
              icon={<IoIosArrowForward />}
            >
              Je découvre la programmation
            </ButtonLink>
            <ButtonLink
              variant="secondary-invert"
              href={t('common:ticketingUrl')}
              target="_blank"
              rel="noopener"
              iconPosition="right"
              icon={<IoIosArrowForward />}
            >
              Je prend mon billet
            </ButtonLink>
          </div>
        </div>
      </ContentMedia>
      {selectedStaff && (
        <PersonPopIn
          isOpen={!!selectedStaff}
          onClose={handleCloseModal}
          selectedPerson={selectedStaff}
        />
      )}
    </Container>
  );
}
