'use client';

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Typography from "@/components/Typography/Typography";
import Container from "@/layouts/Container";
import GridGallery from "@/components/GridGallery/GridGallery";
import galleryImages from "../../../public/content/gallery/2025.json";

export default function Page() {
  return (
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
      </ContentMedia>
      <GridGallery images={galleryImages as { src: string; alt: string; format: string }[]} />
    </Container>
  );
}