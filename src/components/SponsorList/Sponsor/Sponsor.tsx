import {
  SponsorProps,
  SponsorTypeProps
} from "@/components/SponsorList/Sponsor/Sponsor.types";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const Sponsor = ({ sponsor }: { sponsor: SponsorProps }) => {
  const badgeWidth: number = 70;
  const badgeHeight: number = 80;

  const boxClasses: Record<SponsorTypeProps, string> = {
    platinum: "bg-[url(/images/background/sponsor-platinum.jpg)] hover:bg-[url(/images/background/sponsor-platinum.jpg)]",
    gold: "bg-[url(/images/background/sponsor-gold.jpg)] hover:bg-[url(/images/background/sponsor-gold.jpg)]",
    silver: "bg-[url(/images/background/sponsor-silver.jpg)] hover:bg-[url(/images/background/sponsor-silver.jpg)]",
    bronze: "bg-[url(/images/background/sponsor-bronze.jpg)] hover:bg-[url(/images/background/sponsor-bronze.jpg)]",
  };
  const badgeClasses: Record<SponsorTypeProps, string> = {
    platinum: "top-[15px] right-[15px] h-[55px] lg:top-[24px] lg:right-[24px] lg:h-[80px]",
    gold: "top-[7px] right-[7px] h-[27px] lg:top-[12px] lg:right-[12px] lg:h-[50px]",
    silver: "top-[6px] right-[6px] h-[16px] lg:top-[12px] lg:right-[12px] lg:h-[40px]",
    bronze: "top-[5px] right-[5px] h-[14px] lg:top-[11px] lg:right-[11px] lg:h-[25px]",
  };

  return (
    <Link
      href={sponsor.url}
      target="_blank"
      rel="noopener"
      className={classNames(
        'group rounded-sm relative bg-cover flex justify-center items-center',
        'lg:bg-none lg:bg-black/40 lg:backdrop-blur-md hover:bg-transparent hover:backdrop-blur-none',
        'transform transition duration-500 hover:scale-110 hover:z-10',
        boxClasses[sponsor.type]
      )}
    >
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
        src={sponsor.whiteLogoSrc}
        alt={sponsor.name}
        className="object-contain h-3/4 w-1/2"
        width={440}
        height={560}
      />
    </Link>
  );
};

export default Sponsor;
