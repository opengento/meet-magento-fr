import { SponsorTypeProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import Image from "next/image";
import classNames from "classnames";

interface SponsorProps {
  type: SponsorTypeProps
  name: string,
  logoSrc: string,
}

const Sponsor = (sponsor: SponsorProps) => {
  const badgeWidth: number = 70;
  const badgeHeight: number = 80;

  const boxClasses: Record<SponsorTypeProps, string> = {
    platinum: "bg-[url(/images/background/sponsor-platinum.jpg)] hover:bg-[url(/images/background/sponsor-platinum.jpg)] col-span-12 row-span-5 lg:col-span-30 lg:row-span-12",
    gold: "bg-[url(/images/background/sponsor-gold.jpg)] hover:bg-[url(/images/background/sponsor-gold.jpg)] col-span-6 row-span-3 lg:col-span-20 lg:row-span-4",
    silver: "bg-[url(/images/background/sponsor-silver.jpg)] hover:bg-[url(/images/background/sponsor-silver.jpg)] col-span-4 row-span-2 lg:col-span-18 lg:row-span-3",
    bronze: "bg-[url(/images/background/sponsor-bronze.jpg)] hover:bg-[url(/images/background/sponsor-bronze.jpg)] col-span-4 row-span-2 lg:col-span-15 lg:row-span-2",
  };
  const badgeClasses: Record<SponsorTypeProps, string> = {
    platinum: "top-[15px] right-[15px] h-[55px] lg:top-[24px] lg:right-[24px] lg:h-[80px]",
    gold: "top-[7px] right-[7px] h-[27px] lg:top-[12px] lg:right-[12px] lg:h-[50px]",
    silver: "top-[6px] right-[6px] h-[16px] lg:top-[12px] lg:right-[12px] lg:h-[40px]",
    bronze: "top-[5px] right-[5px] h-[14px] lg:top-[11px] lg:right-[11px] lg:h-[25px]",
  };
  const logoClasses: Record<SponsorTypeProps, string> = {
    platinum: "max-w-[60%] max-h-[40%] lg:max-w-[50%] lg:max-h-[30%]",
    gold: "max-w-[65%] max-h-[35%] lg:max-w-[77%] lg:max-h-[33%]",
    silver: "max-w-[70%] max-h-[30%] lg:max-w-[60%] lg:max-h-[30%]",
    bronze: "max-w-[60%] max-h-[20%] lg:max-w-[60%] lg:max-h-[30%]",
  };

  return (
    <div className={classNames(
      'group rounded-sm relative bg-cover flex justify-center items-center',
      'lg:bg-none lg:bg-black/40 lg:backdrop-blur-md hover:bg-transparent hover:backdrop-blur-none',
      boxClasses[sponsor.type]
    )}>
      <Image
        src={`/images/badges/${sponsor.type}.svg`}
        alt={sponsor.type}
        className={classNames(
          'absolute w-auto lg:hidden group-hover:block',
          badgeClasses[sponsor.type]
        )}
        width={badgeWidth}
        height={badgeHeight}
      />
      <Image
        src={sponsor.logoSrc}
        alt={sponsor.name}
        className={classNames('object-contain', logoClasses[sponsor.type])}
        width={440}
        height={560}
      />
    </div>
  );
};

export default Sponsor;
