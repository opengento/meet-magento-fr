'use client';

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import About from "@/components/About/About";
import Typography from "@/components/Typography/Typography";
import { List as FooterMenu } from "@/components/List/List";
import Container from "@/layouts/Container";
import FooterLogo from "/public/images/logo_macaron.svg";
import HashtagMMFR from "/public/images/mmfr2025-footer.svg";
import FooterPatternLeft from "/public/images/footer_pattern_left.svg";
import FooterPatternRight from "/public/images/footer_pattern_right.svg";
import { Content, ListItem } from "@/components/List/List.types";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const footerMenuItemLinkStyles = "font-semibold hover:text-orange w-1/2 mb-2";
const footerMenuItemStyles = "-m-4 list-none mb-2";

const Footer = () => {
  const { t } = useTranslation(['common']);

  const footerMenuItems: (ListItem | Content)[] = [
    {
      content: {
        type: 'link',
        href: '/contact',
        text: 'FAQ & Contact'
      },
      className: footerMenuItemLinkStyles
    },
    {
      content: {
        type: 'link',
        href: '/mentions-legales#data-protection',
        text: 'Politique de confidentialité'
      },
      className: footerMenuItemLinkStyles
    },
    {
      content: {
        type: 'link',
        href: t('common:ticketingUrl'),
        target: '_blank',
        text: 'Billetterie'
      },
      className: footerMenuItemLinkStyles
    },
    {
      content: {
        type: 'link',
        href: '/mentions-legales',
        text: 'Mentions Légales'
      },
      className: footerMenuItemLinkStyles
    },
    {
      content: {
        type: 'link',
        href: '/sponsors',
        text: 'Sponsors'
      },
      className: footerMenuItemLinkStyles
    },
    {
      content: {
        type: 'link',
        href: '/code-de-conduite',
        text: 'Code de conduite'
      },
      className: footerMenuItemLinkStyles
    }
  ];

  const footerMenuItemsLastCol: (ListItem | Content)[] = [
    {
      content: {
        type: 'link',
        href: '/staff',
        text: 'Les organisateurs'
      },
      className: "w-full font-semibold hover:text-orange mb-2"
    },
    {
      content: <>
        <Typography variant="small" className="inline-block mb-2" color="light">Avec le soutien de</Typography>
        <Link href="https://www.magentoassociation.org/" className="inline-block align-middle ml-2 text-white" target="_blank" rel="noopener">
          <Image src="/images/logo/ma.png" alt="Magento Association" width="158" height="21"/>
        </Link>
      </>,
      className: footerMenuItemStyles
    },
    {
      content: {
        type: 'component',
        component: Typography,
        props: {
          className: "mb-2",
          color: "light",
          variant: "small",
          children: "© 2025 Meet Magento Paris. Meet Magento is a brand of the Magento Association."
        }
      },
      className: footerMenuItemStyles
    },
  ];

  return (
    <footer
      className="relative bg-royalBlue rounded-t-3xl overflow-hidden pl-7 bg-[url(/images/footer_pattern.svg)]">
      <BackgroundImage imagePath="/images/bg-gradiant-blue.jpg" priority>
        <Container className="px-5" size="large">
          <div className="flex gap-24 py-12 pb-0 md:py-14 w-full justify-between">
            <div className="relative hidden md:block">
              <FooterLogo className="hidden md:block shrink-0 ml-12"/>
              <FooterPatternLeft className="absolute hidden md:block bottom-[-20%] left-[-5%]"/>
            </div>
            <div className="md:flex-grow">
              <About/>
              <div className="flex flex-col md:flex-row">
                <FooterMenu spacing="none" className="flex flex-wrap mt-12 w-full md:w-2/3"
                            items={footerMenuItems}/>
                <FooterMenu spacing="normal" className="flex flex-wrap mt-6 md:mt-12 w-full md:w-1/3"
                            items={footerMenuItemsLastCol}/>
              </div>
            </div>
          </div>
          <div className="flex relative z-20 gap-3 justify-end mb-6">
            <Link className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                  href={t('common:linkedinUrl')} target="_blank" rel="noopener" title="LinkedIn">
              <FaLinkedinIn color="royalBlue" size={16}/>
            </Link>
            <Link className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
                  href={t('common:youtubeUrl')} target="_blank" rel="noopener" title="YouTube">
              <FaYoutube color="royalBlue" size={16}/>
            </Link>
          </div>
        </Container>
        <div className="px-10">
          <div className="flex justify-center">
            <HashtagMMFR className="relative z-20 w-full max-w-[100%] h-auto"/>
            <FooterPatternRight className="absolute hidden md:block z-10 bottom-8 right-0"/>
          </div>
        </div>
      </BackgroundImage>
    </footer>
  );
}

export default Footer;
