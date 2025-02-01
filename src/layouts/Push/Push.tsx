'use client';

import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {IoIosArrowForward} from "react-icons/io";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import {useTranslation} from "react-i18next";

const Push = () => {
  const { t } = useTranslation(['common']);

  return (
    <ContentMedia
      imageUrl="/images/media/faq.png"
      imagePosition="left"
      imageWidth="40%"
    >
      <div className="flex flex-col gap-6 h-full justify-center">
        <Typography
          variant="subtitle1"
          weight="semibold"
          color="primary"
        >
          {t('common:pushSubtitle')}
        </Typography>
        <Typography color="dark">
          {t('common:pushContent')}
        </Typography>
        <div className="flex flex-row flex-wrap gap-8">
          <ButtonLink
            variant="secondary-invert"
            href={t('common:programUrl')}
            iconPosition="right"
            icon={<IoIosArrowForward />}
          >
            {t('common:programLabel')}
          </ButtonLink>
          <ButtonLink
            variant="secondary-invert"
            href={t('common:ticketingUrl')}
            target="_blank"
            rel="noopener"
            iconPosition="right"
            icon={<IoIosArrowForward />}
          >
            {t('common:ticketingLabel')}
          </ButtonLink>
        </div>
      </div>
    </ContentMedia>
  );
};

export default Push;
