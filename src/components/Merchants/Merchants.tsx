"use client";

import TopBanner from "@/components/TopBanner/TopBanner";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Merchant {
  name: string;
  url: string;
  logoSrc: string;
}

const Merchants = () => {
  const { t } = useTranslation(["merchants"]);
  const merchants = t("merchants:list", { returnObjects: true }) as Merchant[];

  return (
    <div className="pt-12">
      <TopBanner
        title={t("merchants:title")}
        backgroundImage="/images/background/banner.svg"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 auto-rows-[4rem] gap-2 mt-8 mb-16">
        {merchants.map((merchant, index) => (
          <Link
            href={merchant.url}
            target="_blank"
            rel="noopener"
            className="bg-white rounded-md row-span-2 flex justify-center items-center px-8 py-12 transform transition duration-500 hover:scale-105"
            key={index}
          >
            <Image
              src={merchant.logoSrc}
              alt={merchant.name}
              width={150}
              height={30}
              className="object-contain h-full w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Merchants;
