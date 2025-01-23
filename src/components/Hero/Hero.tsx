'use client'
import Typography from "@/components/Typography/Typography";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import CountdownTimer from "@/components/Countdown/Countdown"
import Container from "@/layouts/Container";
import MM25Full from "/public/images/mmfr25-full.svg";

const Hero = () => {
    return (
        <div className="relative -top-[104px] left-0 w-full min-h-screen">
            <BackgroundImage className="h-screen w-full flex items-center justify-center" imagePath="/images/bg-hero.jpg" priority>
                <Container size="small" className="pt-[104px]">
                    <div className="flex py-16">
                        <div>
                            <Typography variant="h2">Save the date !</Typography>
                            <Typography variant="h3">Meet Magento arrive en France</Typography>
                            <Typography>Rejoignez la communauté Magento et Adobe Commerce pour une journée d'innovations, d'échanges et d'expertise, à ne pas manquer !</Typography>
                        </div>
                        <div className="hidden md:flex flex-wrap justify-center gap-8">
                            <MM25Full />
                            <CountdownTimer targetDate="2025-03-25T08:00:00" />
                        </div>
                    </div>
                </Container>
            </BackgroundImage>
        </div>
    );
}

export default Hero;
