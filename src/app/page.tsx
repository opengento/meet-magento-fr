import {SponsorProps} from "@/layouts/SponsorList/Sponsor/Sponsor.types";
import SponsorList from "@/layouts/SponsorList/SponsorList";

export default function Home() {

  const sponsors: SponsorProps[] = [
    {
      type: "platinum",
      name: "Adobe",
      logoSrc: "adobe.svg"
    },
    {
      type: "gold",
      name: "Dn'D",
      logoSrc: "dnd.svg"
    },
    {
      type: "gold",
      name: "Hyvä",
      logoSrc: "hyva.svg"
    },
    {
      type: "gold",
      name: "Ati4 Group",
      logoSrc: "ati4group.svg"
    },
    {
      type: "gold",
      name: "Platform.sh",
      logoSrc: "platformsh.svg"
    },
    {
      type: "gold",
      name: "Blackbird",
      logoSrc: "blackbird.svg"
    },
    {
      type: "gold",
      name: "DATASOLUTION",
      logoSrc: "datasolution.svg"
    },
    {
      type: "silver",
      name: "PH2M",
      logoSrc: "ph2m.svg"
    },
    {
      type: "silver",
      name: "Sensefuel",
      logoSrc: "sensefuel.svg"
    },
    {
      type: "silver",
      name: "PayPlug",
      logoSrc: "payplug.svg"
    },
    {
      type: "silver",
      name: "Mollie",
      logoSrc: "mollie.svg"
    },
    {
      type: "silver",
      name: "Spiriit",
      logoSrc: "spiriit.svg"
    },
    {
      type: "silver",
      name: "Sutunam",
      logoSrc: "Sutunam.svg"
    },
    {
      type: "bronze",
      name: "Nosto",
      logoSrc: "nosto.svg"
    },
    {
      type: "bronze",
      name: "Socloz",
      logoSrc: "socloz.svg"
    },
    {
      type: "bronze",
      name: "Akeneo",
      logoSrc: "akeneo.svg"
    },
  ];

  return (
    <SponsorList items={sponsors} />
  );
}
