import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Sponsor from "@/layouts/SponsorList/Sponsor/Sponsor";
import {SponsorProps} from "@/layouts/SponsorList/Sponsor/Sponsor.types";

const SponsorList = (sponsors: SponsorProps[]) => {
    return (
        <BackgroundImage imagePath="/images/bg-gradiant-purple.jpg">
            <ul>
                {sponsors.map((sponsor: SponsorProps, key: number) => (
                    <Sponsor type={sponsor.type}
                             name={sponsor.name}
                             logoSrc={sponsor.logoSrc}
                             key={key}
                    />
                ))}
            </ul>
        </BackgroundImage>
    );
};

export default SponsorList;
