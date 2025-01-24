import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Sponsor from "@/layouts/SponsorList/Sponsor/Sponsor";
import {SponsorProps, SponsorTypeProps} from "@/layouts/SponsorList/Sponsor/Sponsor.types";
import {SponsorListProps} from "@/layouts/SponsorList/SponsorListProps";
import Container from "@/layouts/Container";

const SponsorList = ({
     items
}: SponsorListProps) => {

    const sponsorListByType: Record<SponsorTypeProps, SponsorProps[]> = items.reduce(
        (
            acc: Record<SponsorTypeProps, SponsorProps[]>,
            sponsor: SponsorProps
        ) => {
            acc[sponsor.type].push(sponsor);

            return acc;
        },
        {
            platinum: [],
            gold: [],
            silver: [],
            bronze: []
        }
    );
    const sortedSponsors: SponsorProps[] = [].concat(...Object.values(sponsorListByType));

    return (
        <Container size="large">
            <BackgroundImage imagePath="/images/bg-gradiant-purple.jpg"
                             className={'px-8 py-5'}
            >
                <ul className={'clear-both overflow-hidden -p-1 mx-auto m-t-5 m-b-8 md:mb-9 w-fit md:max-w-[1350px]'}>
                    {sortedSponsors.map((sponsor: SponsorProps, key: number) => (
                        <Sponsor type={sponsor.type}
                                 name={sponsor.name}
                                 logoSrc={sponsor.logoSrc}
                                 key={key}
                        />
                    ))}
                </ul>
            </BackgroundImage>
        </Container>
    );
};

export default SponsorList;
