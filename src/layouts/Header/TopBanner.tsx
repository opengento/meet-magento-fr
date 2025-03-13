import Image from "next/image";
import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center py-1 px-4 gap-x-2 font-semibold bg-[#ff4859] text-white">
      <p>MMFR25 talks are available in two tracks:</p>
      <p className="flex flex-row justify-center items-center gap-x-2">
        <Image
          src="/images/flags/3x4/en.svg"
          alt="en"
          width={48}
          height={48}
          className="object-contain w-6"
        />
        English –
        <Image
          src="/images/flags/3x4/fr.svg"
          alt="fr"
          width={48}
          height={48}
          className="object-contain w-6"
        />
        Français
      </p>
    </div>
  );
};

export default TopBanner;
