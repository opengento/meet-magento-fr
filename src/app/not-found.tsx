'use client';

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-6 md:mb-12"
        >
          404: Vous êtes perdus !
        </Typography>
        <ButtonLink
          variant="secondary-invert"
          href="/"
          iconPosition="left"
          icon={<FaHome />}
        >
          Retournez sur la page d’accueil !
        </ButtonLink>
      </ContentMedia>
    </Container>
  );
}
