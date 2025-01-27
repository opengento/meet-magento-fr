import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Logo from "@/components/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Container from "../Container";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {FaTicketAlt} from "react-icons/fa";
import React from "react";

const Header = () => {
  const HeaderContent = () => (
    <div className="w-full overflow-hidden rounded-b-xl md:rounded-xl">
      <BackgroundImage imagePath="/images/bg-gradiant-blue.jpg" priority>
        <div className="flex justify-between items-center">
          <div
            className="flex w-full justify-between gap-12 items-center h-20 px-4 md:px-14">
            <Logo/>
            <Navigation/>
            <ButtonLink variant="primary" href="" target="_blank" rel="noopener" iconPosition="left" icon={<FaTicketAlt />}>
              J’achète mon billet
            </ButtonLink>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );

  return (
    <header className="sticky top-0 md:top-6 md:mt-6 w-full z-50">
      <div className="hidden md:block">
        <Container size="large">
          <HeaderContent/>
        </Container>
      </div>
      <div className="md:hidden">
        <HeaderContent/>
      </div>
    </header>
  );
};

export default Header;
