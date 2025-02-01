import {SponsorProps, SponsorTypeProps} from "@/components/SponsorList/Sponsor/Sponsor.types";
import Image from "next/image";
import classNames from "classnames";

const Sponsor = (sponsor: SponsorProps) => {
  const badgeWidth: number = 70;
  const badgeHeight: number = 80;

  const boxClasses: Record<SponsorTypeProps, string> = {
    platinum: "bg-[url(/images/background/sponsor-platinum.jpg)] hover:bg-[url(/images/background/sponsor-platinum.jpg)] p-[57px] col-span-12 row-span-4 lg:col-span-4 lg:row-span-12",
    gold: "bg-[url(/images/background/sponsor-gold.jpg)] hover:bg-[url(/images/background/sponsor-gold.jpg)] p-[24px] col-span-6 row-span-3 lg:col-span-2 lg:row-span-4",
    silver: "bg-[url(/images/background/sponsor-silver.jpg)] hover:bg-[url(/images/background/sponsor-silver.jpg)] p-[22px] col-span-4 row-span-2 lg:col-span-2 lg:row-span-3",
    bronze: "bg-[url(/images/background/sponsor-bronze.png)] hover:bg-[url(/images/background/sponsor-bronze.png)] p-[40px] col-span-4 row-span-1 lg:col-span-2 lg:row-span-2",
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
      'duration-150 lg:bg-none lg:bg-black/70 lg:backdrop-blur-md bg-cover',
      'hover:bg-transparent hover:backdrop-blur-none hover:bg-cover',
      'group rounded-lg relative inline-flex justify-center items-center overflow-hidden',
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
      <Image src={sponsor.logoSrc}
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
