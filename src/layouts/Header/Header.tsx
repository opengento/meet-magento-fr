import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  return (
    <header className="sticky rounded-xl mt-6 top-6 w-full z-50 ">
      <BackgroundImage imagePath="/images/background_header.jpeg" priority>
        <div className="flex justify-between items-center h-20 px-14">
          <Logo />
          {/* <Navigation />
          <CTAButton /> */}
        </div>
      </BackgroundImage>
    </header>
  );
};

export default Header;
