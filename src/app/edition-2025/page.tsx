'use client';

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Typography from "@/components/Typography/Typography";
import Container from "@/layouts/Container";
import GridGallery from "@/components/GridGallery/GridGallery";
import galleryImages from "../../../public/content/gallery/2025.json";
import Program from "@/components/Program/Program";
import Speakers from "@/components/Speakers/Speakers";
import SponsorList from "@/components/SponsorList/SponsorList";
import useDataProvider from "@/hooks/useDataProvider";
import Person from "@/components/Person/Person";
import React from "react";
import {PersonProps} from "@/components/Person/PersonProps";
import PersonPopIn from "@/components/Person/PersonPopIn";
import TopBanner from "@/components/TopBanner/TopBanner";
import {useTranslation} from "react-i18next";

export default function Page() {
  const { t } = useTranslation(['staff-2025', 'common']);
  const dataProvider = useDataProvider();
  const staffMembers = dataProvider.usePersonList('staff-2025', 'members');
  const [selectedStaff, setSelectedStaff] = React.useState<PersonProps | null>(null);

  const handleStaffClick = (staff: PersonProps) => {
    setSelectedStaff(staff);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  return (
    <>
      <Container className="flex flex-col gap-8 my-8">
        <ContentMedia>
          <Typography variant="h1"
                      color="dark"
                      weight="semibold"
                      underlineColor="primary-100"
                      className="mb-2"
          >
            Édition 2025
          </Typography>
          <Typography color="dark" variant="subtitle1">
            La toute première édition de Meet Magento France !
          </Typography>
          <Typography color="dark" className="mt-4">
            R-explorez cette édition en photo et retrouvez les speakers qui l'ont animés !
          </Typography>
        </ContentMedia>
        <GridGallery images={galleryImages as { src: string; alt: string; format: string }[]} />
      </Container>
      <div id="programs">
        <Program sessions={dataProvider.useSessions(null, "2025")}/>
      </div>
      <div id="speakers">
        <Speakers data={dataProvider.useSpeakers("2025")}/>
      </div>
      <div id="sponsors">
        <SponsorList items={dataProvider.useSponsors("2025")}/>
      </div>
      <div id="staff">
        <Container className="flex flex-col gap-8 my-8">
          <TopBanner
            title={t("staff-2025:title")}
            backgroundImage="/images/pattern_top.svg"
          />
          <ContentMedia>
            <Typography
              color="dark"
              className="mb-8"
              variant="subtitle1"
            >
              {t('staff-2025:subtitle')}
            </Typography>
            <Typography color="dark" className="whitespace-pre-wrap">
              {t('staff-2025:description')}
            </Typography>
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
          </ContentMedia>
        </Container>
        {selectedStaff && (
          <PersonPopIn
            isOpen={!!selectedStaff}
            onClose={handleCloseModal}
            selectedPerson={selectedStaff}
          />
        )}
      </div>
    </>
  );
}
