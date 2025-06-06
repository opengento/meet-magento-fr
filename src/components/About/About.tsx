import Typography from "@/components/Typography/Typography";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["edition"]);

  return (
    <>
      <Typography variant="h6" weight="bold" className="uppercase mb-4 text-white">
        À propos de Meet Magento Paris {t("edition:isWaitingNextEdition") ? '' : t("edition:nextEditionYear")}
      </Typography>
      <Typography className="text-white">
        Meet Magento est une conférence annuelle axée sur la plateforme de e-commerce Magento. Elle rassemble
        des professionnels de Magento, des développeurs, des commerçants et des leaders du secteur de tout le
        pays pour discuter des dernières tendances, innovations et meilleures pratiques en matière de
        e-commerce.
      </Typography>
    </>
  );
}

export default About;
