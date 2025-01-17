import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-15 w-50">
        <div className="flex flex-col justify-center">
          <span className="flex justify-end text-orange-500 text-xs">
            PARIS FR
          </span>
          <span className="text-white text-2xl">MEET MAGENTO</span>
          <span className="text-orange-500 text-xs">#MM25FR</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
