import {SponsorProps} from "@/layouts/SponsorList/Sponsor/Sponsor.types";
import SponsorList from "@/layouts/SponsorList/SponsorList";

export default function Home() {

  const sponsors: SponsorProps[] = [
    {
      type: "platinum",
      name: "Adobe",
      logoSrc: ""
    },
    {
      type: "gold",
      name: "Hyvä",
      logoSrc: ""
    },
    {
      type: "silver",
      name: "PH2M",
      logoSrc: ""
    },
  ];

  return (
    <SponsorList sponsors={sponsors} />
  );
}
