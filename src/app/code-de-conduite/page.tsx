import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import Container from "@/layouts/Container";
import ContentMedia from "@/components/ContentMedia/ContentMedia";

export default function Page() {
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
          Code de conduite pour la conférence
        </Typography>
        <Typography color="dark">
          Toutes les personnes participant à la conférence,
          y compris sponsors et bénévoles
          s’engagent à accepter le code d’éthique et de déontologie, ou « code de conduite » suivant.
          L’organisation s’attachera à faire respecter ce code durant l’événement.
          Nous attendons la coopération de chacun‧e pour assurer un environnement sain pour tou‧te‧s.
        </Typography>
      </ContentMedia>
      <ContentMedia
        title="La version courte"
        titleUnderlineColor="primary-100"
      >
        <Typography color="dark">
          Notre conférence se veut une expérience sans harcèlement, quel que soit
          votre sexe, votre identité sexuelle, votre âge, votre orientation
          sexuelle, votre handicap, votre apparence physique, votre poids, votre
          race ou votre religion. Nous ne tolérons aucun harcèlement des
          participant‧e‧s à la conférence, sous quelque forme que ce soit.
          Les expressions et les images à connotation sexuelle ne sont pas appropriées
          lors de l’événement. Ceci inclut les conférences, les ateliers, les soirées,
          Twitter et les autres médias en ligne.
          L’organisation s’engage à prendre des sanctions appropriées pour les personnes
          qui violent ces règles, jusqu’à l’exclusion <em>sans remboursement</em>
          et le recours légal.
        </Typography>
      </ContentMedia>
      <ContentMedia
        title="La version longue"
        titleUnderlineColor="primary-100"
      >
        <Typography color="dark">
          Le harcèlement inclut des commentaires à l’oral ou à l’écrit sur le sexe,
          l’identité sexuelle, l’âge, l’orientation sexuelle, le handicap, l’apparence
          physique, le poids, la race, la religion, les images à connotation
          sexuelle dans des lieux publics, les intimidations délibérées, la traque,
          la poursuite, un harcèlement photographique ou vidéo, une suite
          d’interruptions des conférences et des autres événements, un contact
          physique inapproprié et des avances sexuelles non désirées.
        </Typography>
        <br/>
        <Typography color="dark">
          Les participant‧e‧s à qui il sera demandé d’arrêter tout comportement de
          harcèlement doivent arrêter immédiatement.
        </Typography>
        <br/>
        <Typography color="dark">
          Les sponsors sont aussi sujet à la politique anti-harcèlement. En
          particulier, les sponsors ne doivent pas utiliser d’images ou de supports
          à connotation sexuelle. Ils ne doivent pas non plus se livrer à des activités
          à connotation sexuelle. L’équipe du stand (y compris les bénévoles) ne
          doit pas utiliser de vêtements, uniformes ou costumes à connotation
          sexuelle. Ils ne doivent pas non plus créer un environnement sexualisé.
        </Typography>
        <br/>
        <Typography color="dark">
          Face à un comportement de harcèlement, l’équipe d’organisation de la conférence
          peut prendre toute action qui lui semble adéquate.
          Cela va d’un simple avertissement à l’exclusion sans remboursement de la conférence.
        </Typography>
        <br/>
        <Typography color="dark">
          Si vous vous sentez harcelé‧e, si vous pensez que quelqu’un se fait
          harceler, et plus généralement en cas de problème, merci de contacter
          immédiatement l’équipe d’organisation de l’événement. L’organisation s’assure
          que ses membres sont facilement identifiables (badge, brassard, tour de cou,
          t-shirt…) présentés au début de la conférence.
        </Typography>
        <br/>
        <Typography color="dark">
          Les membres de l’organisation seront ravi‧e‧s d’aider les participants à
          contacter la sécurité de l’hôtel ou du bâtiment où se déroule l’événement,
          ou les forces de l’ordre ; à fournir une escorte ainsi qu’à aider de toute
          autre façon les personnes victimes de harcèlement, pour garantir leur
          sécurité pendant la durée de l’événement. Nous apprécions votre
          participation à l’événement.
        </Typography>
        <br/>
        <Typography color="dark">
          Nous attendons de chacun‧e le respect de ces règles dans le bâtiment
          des conférences et des ateliers, ainsi que pendant les événements sociaux
          relatifs à la conférence.
        </Typography>
      </ContentMedia>
      <footer>
        <Typography variant="small">
          <em>
            Version originale et crédit :{" "}
            <Link
              href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
              target="_blank">
              The Ada Initiative
            </Link>
          </em>
        </Typography>
        <Typography variant="small">
          <em>
            Ce texte est sous licence{" "}
            <Link
              href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
              target="_blank"
              rel="license">
              Creative Commons Attribution 3.0 Unported License
            </Link>
          </em>
        </Typography>
      </footer>
    </Container>
  );
}
