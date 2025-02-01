'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import Link from "next/link";
import Image from "next/image";
import Person from "@/components/Person/Person";
import React from "react";
import useDataProvider from "@/hooks/useDataProvider";
import {PersonProps} from "@/components/Person/PersonProps";
import PersonPopIn from "@/components/Person/PersonPopIn";

export default function Page() {
  const dataProvider = useDataProvider();
  const developers = dataProvider.usePersonList('contributors', 'developers');
  const [selectedDeveloper, setSelectedDeveloper] = React.useState<PersonProps | null>(null);

  const handleDeveloperClick = (developer: PersonProps) => {
    setSelectedDeveloper(developer);
  };

  const handleCloseModal = () => {
    setSelectedDeveloper(null);
  };

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-6 md:mb-12"
        >
          Mentions légales
        </Typography>
        <Typography color="dark">
          Ce site web est édité par l’association loi 1901 « OpenGento » (RNA W833003136).
        </Typography>
        <Typography color="dark">
          Directeur de la publication: Frédéric MARTINEZ (Président de l’association).
        </Typography>
        <Typography color="dark">
          Siège social : 17 rue Idrac - 31000 Toulouse - France.
        </Typography>
        <Link href="https://opengento.fr/" target="_blank" title="Opengento">
          <Image
            src="/images/logo/opengento.png"
            alt="Opengento Logo"
            width={101}
            height={24}
          />
        </Link>
      </ContentMedia>
      <ContentMedia
        title="Hébergement"
        titleUnderlineColor="primary-100"
      >
        <Typography color="dark">
          Ce site web est hébergé avec <em>♥</em> par <Link href="https://github.com/" target="_blank">GitHub</Link>.
        </Typography>
      </ContentMedia>
      <ContentMedia
        title="Crédits"
        titleUnderlineColor="primary-100"
      >
        <Typography color="dark">
          Ce site Web à été fait avec <Link href="https://nextjs.org/" target="_blank">Next.js</Link>.
        </Typography>
        <Typography color="dark">
          Merci à <Link
            className="inline-block align-middle"
            href="https://opengento.fr/"
            target="_blank"
            title="Opengento"
          >
            <Image
              src="/images/logo/opengento.png"
              alt="Opengento Logo"
              width={101}
              height={24}
            />
          </Link> et aux <Link
            className="font-semibold"
            href="https://github.com/opengento/meet-magento-fr/graphs/contributors"
            target="_blank"
          >
            contributeurs
          </Link> pour la réalisation du site !
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-12 mt-8">
          {developers
            .map((developer) => (
              <div
                key={developer.id}
                className="flex flex-row gap-6 group hover:cursor-pointer"
                onClick={() => handleDeveloperClick(developer)}
              >
                <Person person={developer}/>
              </div>
            ))}
        </div>
        {selectedDeveloper && (
          <PersonPopIn
            isOpen={!!selectedDeveloper}
            onClose={handleCloseModal}
            selectedPerson={selectedDeveloper}
          />
        )}
      </ContentMedia>
      <ContentMedia
        title="Cookies"
        titleUnderlineColor="primary-100"
      >
        <Typography color="dark">
          Ce site n’utilise pas de cookies.
        </Typography>
      </ContentMedia>
      <div id="data-protection">
        <ContentMedia
          title="Protection des données"
          titleUnderlineColor="primary-100"
        >
          <Typography color="dark">
            L’utilisateur est informé des réglementations concernant la communication marketing, la loi du 21 Juin
            2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du
            Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
          </Typography>
          <Typography color="dark">
            L’utilisateur est informé que le site ne gère, ni ne stock quelques données personnelles que ce soit.
            Nous n’utilisons, ni tracker, ni cookies, ni tag d’analyse du traffic.
          </Typography>
        </ContentMedia>
      </div>
    </Container>
  );
}
