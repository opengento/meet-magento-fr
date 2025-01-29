import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import Link from "next/link";
import Opengento from "/public/images/logo/opengento.svg";

export default function Page() {
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
        <Link href="https://opengento.fr/" target="_blank" title="Opengento"><Opengento /></Link>
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
          Merci aux <Link className="font-semibold" href="https://github.com/opengento/meet-magento-fr/graphs/contributors" target="_blank">contributeurs</Link> !
        </Typography>
        <Typography color="dark">
          Merci à <Link className="inline-block align-middle" href="https://opengento.fr/" target="_blank" title="Opengento"><Opengento /></Link> pour la réalisation du site !
        </Typography>
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
