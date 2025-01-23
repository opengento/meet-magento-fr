import {SponsorProps} from "@/layouts/SponsorList/Sponsor/Sponsor.types";
import Image from "next/image";

const Sponsor = (sponsor: SponsorProps) => {
    return (
        <div>
            <Image src={`/images/badges/${sponsor.type}.svg`}
                   alt={sponsor.type}
                   className={"object-cover object-center"}
                   quality={90}
            />
            <Image src={sponsor.logoSrc}
                   alt={sponsor.name}
                   className={"object-cover object-center"}
                   quality={90}
            />
        </div>
    );
};

export default Sponsor;
