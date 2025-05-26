import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-15 w-50">
        <div className="flex flex-col justify-center">
          <Image
            src="/images/mmfr2025-title.svg"
            alt="Meet Magento"
            width={200}
            height={60}
            className="hidden md:block pb-2 min-w-[100px]"
          />
          <Image
            src="/images/mmfr25-full.svg"
            alt="Meet Magento"
            width={50}
            height={60}
            className="block md:hidden"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
