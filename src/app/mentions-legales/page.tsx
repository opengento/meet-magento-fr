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
          Merci à eux pour la réalisation du site :
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-12 mt-8">
          {developers
            .map((developer) => (
              <Person
                person={developer}
                onClick={() => handleDeveloperClick(developer)}
                key={developer.id}
              />
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
          <Typography color="dark" className="mb-2">
            L’utilisateur est informé des réglementations concernant la
            communication marketing, la loi du 21 Juin
            2014 pour la confiance dans l’Economie Numérique, la Loi
            Informatique et Liberté du 06 Août 2004 ainsi que du
            Règlement Général sur la Protection des Données (RGPD : n°
            2016-679).
          </Typography>
          <Typography color="dark" className="mb-2">
            L’utilisateur est informé que le site ne collecte aucune donnée à
            caractère dit “sensible” que ce soit.
          </Typography>
          <Typography color="dark" className="mb-2">
            Est considéré comme sensible les informations suivantes : l’origine
            raciale ou ethnique, les opinions politiques, les croyances
            religieuses ou philosophiques, l’adhésion à un syndicat, les données
            relatives à la santé ou bien l’orientation sexuelle.
            Nous n’utilisons, ni tracker, ni cookies, ni tag d’analyse du
            traffic.
          </Typography>
          <Typography color="dark" className="mb-2">
            Nous n’utilisons, ni tracker, ni cookies, ni tag d’analyse du
            traffic.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">1 –
            Introduction</Typography>
          <Typography color="dark" className="my-2">
            Dans le cadre de son activité, l’association Opengento est amené à
            recueillir et traiter des informations vous concernant. En effet, en
            répondant à notre formulaire de contact, vous nous transmettez des
            informations personnelles, dont certaines sont susceptibles de vous
            identifier.
          </Typography>
          <Typography color="dark" className="my-2">
            La présente Politique de confidentialité vous informe de la manière
            dont nous recueillons et traitons vos données personnelles.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">2 – Responsable
            du traitement de la donnée</Typography>
          <Typography color="dark" className="my-2">
            L’association responsable du traitement de vos données personnelles
            est Opengento, dont le siège social est situé au 17 rue Idrac -
            31000 Toulouse - France et dont Mr. Frédéric Martinez est le
            représentant légal et le délégué à la protection des données.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">3 – Quelles
            sont les données recueillies et dans quel contexte ?</Typography>
          <Typography variant="subtitle2" color="dark" className="my-3">
            Les données transmises via notre formulaire de contact :
          </Typography>
          <Typography color="dark" className="my-2">
            Il s’agit de vos données personnelles, telles que votre nom, votre
            prénom, votre adresse e-mail.
          </Typography>
          <Typography color="dark" className="my-2">
            Ces données nous sont transmises selon votre volonté, en répondant
            au formulaire de contact depuis notre site internet.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">4 – Comment
            sont utilisées les données ?</Typography>
          <Typography variant="subtitle2" color="dark" className="my-3">
            Les données que vous nous transmettez directement via notre
            formulaire sont utilisées dans les buts suivants :
          </Typography>
          <Typography color="dark" className="my-2">
            Vous recontacter dans le cadre d’une demande que vous nous avez
            faite.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">5 – Divulgation
            des données</Typography>
          <Typography variant="subtitle2" color="dark" className="my-3">
            L’accès aux données personnelles collectées au sein de notre
            association est restreint au personnel suivant :
          </Typography>
          <ul className="text-black list-disc pl-8">
            <li>Les collaborateurs responsables du contact et des réponses à nos utilisateurs via le site internet.</li>
            <li>Les collaborateurs responsables de la gestion et de la maintenance de notre site internet.</li>
            <li>L’ensemble de nos collaborateurs sont soumis à des obligations de confidentialité, et l’accès à vos données est protégé par des comptes nominatifs et restreints par des mots de passe personnels.</li>
          </ul>
          <Typography variant="subtitle2" color="dark" className="my-3">
            Vos données personnelles sont susceptibles d’être transmises aux
            tiers suivants :
          </Typography>
          <Typography color="dark" className="my-2">
            Il est possible que nous partagions vos données avec nos partenaires
            commerciaux en rapport avec votre activité ou votre besoin afin
            d’adresser au mieux votre demande et ainsi vous proposer le meilleur
            service possible. Nos partenaires sont tenus à la confidentialité, à
            la protection de vos données ainsi qu’à l’utilisation strictement
            restreinte aux motifs cités précédemment. Si vous ne souhaitez pas
            que nous partagions vos données, vous pouvez nous contacter en vous
            référant à l’article “6 – Vos droits” de la présente Politique de
            confidentialité.
          </Typography>
          <Typography color="dark" className="my-2">
            Enfin, dans le cadre d’actions liées à des autorités policières,
            judiciaires ou administratives, et sous obligation légale, vos
            données sont susceptibles d’être divulguées à ces sources afin de
            garantir la sécurité de l’association Opengento.
          </Typography>

          <Typography variant="h5" color="dark" className="my-4">6 – Vos
            droits</Typography>
          <Typography variant="subtitle2" color="dark" className="my-3">
            Vous pouvez demander à tout moment d’exercer l’un des droits suivant
            :
          </Typography>
          <ul className="text-black list-disc pl-8">
            <li>Consultation de vos données personnelles.</li>
            <li>Rectification ou mise à jour de vos données personnelles.</li>
            <li>Extraction de vos données personnelles au format .xls ou .csv.
            </li>
            <li>Suppression de vos données personnelles à partir d’un motif
              légitime.
            </li>
            <li>Pour ce faire, vous pouvez nous adresser vos demandes à
              l’adresse mail suivante : opengento@gmail.com. Nous nous
              efforcerons de vous apporter une réponse et de prendre les mesures
              adéquates dans un délai de 30 jours suivant la réception de votre
              demande.
            </li>
          </ul>
        </ContentMedia>
      </div>
    </Container>
  );
}
