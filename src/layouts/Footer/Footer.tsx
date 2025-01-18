import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import About from "@/components/About/About"
import Container from "@/layouts/Container";
import FooterLogo from "/public/images/logo_macaron.svg";

const Footer  = () => {
    return(
        <footer>
            <BackgroundImage imagePath="/images/background_header.jpg" priority>
                <Container size="large">
                    <div className="flex gap-24 py-14 w-full justify-between">
                        <FooterLogo className="shrink-0 ml-12" />
                        <div className="flex-grow">
                            <About />
                        </div>
                    </div>
                </Container>
            </BackgroundImage>
        </footer>
    );
}

export default Footer;
