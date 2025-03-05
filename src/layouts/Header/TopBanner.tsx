import Image from "next/image";
import React from "react";

const TopBanner = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center items-center py-1 px-4 gap-2 font-semibold bg-[#ff4859]">
      <p>MMFR25 is available in two tracks:</p>
      <p className="flex flex-row justify-center items-center gap-2">
        <Image
          src="/images/media/gb.svg"
          alt="gb"
          width={48}
          height={48}
          className="object-contain w-6"
        />
        English –
        <Image
          src="/images/media/fr.svg"
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
