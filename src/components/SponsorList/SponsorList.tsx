import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Sponsor from "@/components/SponsorList/Sponsor/Sponsor";
import {SponsorProps, SponsorTypeProps} from "@/components/SponsorList/Sponsor/Sponsor.types";
import {SponsorListProps} from "@/components/SponsorList/SponsorListProps";
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
    const sortedSponsors: SponsorProps[] = [];
    sortedSponsors.concat(...Object.values(sponsorListByType));

    return (
        <BackgroundImage imagePath="/images/bg-gradiant-purple.jpg" className=''>
            <Container size="large" className={'overflow-hidden'}>
                <ul className={'clear-both overflow-hidden -p-1 mx-auto mt-5 mb-8 md:mb-9 w-fit md:max-w-[1350px]'}>
                    {sortedSponsors.map((sponsor: SponsorProps, key: number) => (
                        <Sponsor type={sponsor.type}
                                 name={sponsor.name}
                                 logoSrc={sponsor.logoSrc}
                                 key={key}
                        />
                    ))}
                </ul>
            </Container>
        </BackgroundImage>
    );
};

export default SponsorList;
