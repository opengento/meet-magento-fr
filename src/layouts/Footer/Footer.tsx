import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import About from "@/components/About/About";
import Typography from "@/components/Typography/Typography";
import { List as FooterMenu } from "@/components/List/List";
import Container from "@/layouts/Container";
import FooterLogo from "/public/images/logo_macaron.svg";
import FooterPattern from "/public/images/footer_pattern.svg";
import {Content, ListItem} from "@/components/List/List.types";

const footerMenuItemLinkStyles = "font-semibold hover:text-orange w-1/2 mb-2";
const footerMenuItemStyles = "-m-4 list-none mb-2";

const Footer  = () => {
    const footerMenuItems: (ListItem | Content)[] = [
        {
            content: {
                type: 'link',
                href: '#faq',
                text: 'FAQ & Contact'
            },
            className: footerMenuItemLinkStyles
        },
        {
            content: {
                type: 'link',
                href: '#privacy-policy',
                text: 'Politique de confidentialité'
            },
            className: footerMenuItemLinkStyles
        },
        {
            content: {
                type: 'link',
                href: '#tickets',
                text: 'Billetterie'
            },
            className: footerMenuItemLinkStyles
        },
        {
            content: {
                type: 'link',
                href: '#legals',
                text: 'Mentions Légales'
            },
            className: footerMenuItemLinkStyles
        },
        {
            content: {
                type: 'link',
                href: '#sponsors',
                text: 'Sponsors'
            },
            className: footerMenuItemLinkStyles
        },
        {
            content: {
                type: 'link',
                href: '#code',
                text: 'Code de conduite'
            },
            className: footerMenuItemLinkStyles
        }
    ];

    const footerMenuItemsLastCol: (ListItem | Content)[] = [
        {
            content: {
                type: 'link',
                href: '#staff',
                text: 'Les organisateurs'
            },
            className: "w-full font-semibold hover:text-orange mb-2"
        },
        {
            content: {
                type: 'component',
                component: Typography,
                props: {
                    className: "mb-2",
                    children: "Avec le soutien de Magento Association"
                }
            },
            className: footerMenuItemStyles
        },
        {
            content: {
                type: 'component',
                component: Typography,
                props: {
                    className: "mb-2",
                    children: "© 2025 Meet Magento Paris. Tous droits réservés. Réalisé par Dn'D et Opengento"
                }
            },
            className: footerMenuItemStyles
        },
    ];



    return(
        <footer className="relative bg-royalBlue rounded-t-3xl overflow-hidden pl-7">
            <FooterPattern className="absolute top-0 left-0 h-full" />
            <BackgroundImage imagePath="/images/bg-gradiant-blue.jpg" priority>
                <Container size="large">
                    <div className="flex gap-24 py-14 w-full justify-between">
                        <FooterLogo className="hidden md:block shrink-0 ml-12" />
                        <div className="flex-grow">
                            <About />
                            <div className="flex">
                                <FooterMenu spacing="none" className="flex flex-wrap mt-12 w-2/3" items={footerMenuItems} />
                                <FooterMenu spacing="normal" className="flex flex-wrap mt-12 w-1/3" items={footerMenuItemsLastCol} />
                            </div>
                        </div>
                    </div>
                </Container>
            </BackgroundImage>
        </footer>
    );
}

export default Footer;
