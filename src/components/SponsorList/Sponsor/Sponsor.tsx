import {SponsorProps, SponsorTypeProps} from "@/components/SponsorList/Sponsor/Sponsor.types";
import Image from "next/image";
import classNames from "classnames";

const Sponsor = (sponsor: SponsorProps) => {
    const badgeWidth: number = 70;
    const badgeHeight: number = 80;

    const boxClasses: Record<SponsorTypeProps, string> = {
        platinum: "p-[57px] max-w-[325px] w-full h-[160px] lg:p-[57px] lg:w-[440px] lg:h-[560px]",
        gold: "p-[24px] w-[157px] h-[98px] h-[160px] lg:p-[24px] lg:w-[290px] lg:h-[181.4px]",
        silver: "p-[22px] w-[101px] h-[59px] h-[160px] lg:p-[22px] lg:w-[260px] lg:h-[150px]",
        bronze: "p-[40px] w-[101px] h-[48px] lg:p-[20px] lg:w-[182px] lg:h-[85px]",
    };
    const badgeClasses: Record<SponsorTypeProps, string> = {
        platinum: "top-[30px] right-[30px] h-[55px] w-auto lg:top-[24px] lg:right-[24px] lg:h-[80px]",
        gold: "top-[7px] right-[7px] h-[27px] w-auto lg:top-[12px] lg:right-[12px] lg:h-[50px]",
        silver: "top-[10px] right-[10px] h-[16px] w-auto lg:top-[12px] lg:right-[12px] lg:h-[40px]",
        bronze: "top-[6px] right-[6px] h-[14px] w-auto lg:top-[11px] lg:right-[11px] lg:h-[25px]",
    };
    const logoClasses: Record<SponsorTypeProps, string> = {
        platinum: "",
        gold: "",
        silver: "",
        bronze: "",
    };

    return (
        <div className={classNames(
            'duration-150 lg:bg-none lg:bg-black/70 lg:backdrop-blur-md',
            'hover:bg-transparent hover:backdrop-blur-none hover:bg-cover hover:bg-blend-luminosity hover:bg-no-repeat hover:bg-[url(/images/bg-gradiant-blue.jpg),_url(/images/bg-gradiant-purple.jpg)]',
            'bg-cover bg-blend-luminosity bg-no-repeat bg-[url(/images/bg-gradiant-blue.jpg),_url(/images/bg-gradiant-purple.jpg)]',
            'group m-1 rounded-xl relative float-left inline-flex justify-center items-center overflow-hidden',
            boxClasses[sponsor.type]
        )}>
            <Image src={`/images/badges/${sponsor.type}.svg`}
                   alt={sponsor.type}
                   className={classNames(
                       'absolute lg:hidden group-hover:block',
                       badgeClasses[sponsor.type]
                   )}
                   width={badgeWidth}
                   height={badgeHeight}
                   quality={90}
            />
            <Image src={`/images/sponsors/${sponsor.logoSrc}`}
                   alt={sponsor.name}
                   className={classNames(
                       'object-contain object-center max-w-full',
                       logoClasses[sponsor.type]
                   )}
                   width={440}
                   height={560}
                   quality={90}
            />
        </div>
    );
};

export default Sponsor;
