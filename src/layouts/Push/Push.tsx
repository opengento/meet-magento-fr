'use client';

import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import { useTranslation } from "react-i18next";

const Push = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className="my-4">
      <ContentMedia
        imageUrl="/images/media/faq.jpg"
        imagePosition="left"
        imageWidth="40%"
      >
        <div className="flex flex-col gap-6 h-full justify-center">
          <Typography variant="h5" weight="semibold" color="primary">
            {t('common:pushSubtitle', { year: t('edition:nextEditionYear') })}
          </Typography>
          <Typography color="dark" weight="medium">
            {t('common:pushContent')}
          </Typography>
          <div className="flex flex-row flex-wrap gap-8">
            <ButtonLink
              variant="secondary-invert-w-border"
              href={t('common:programUrl')}
              iconPosition="right"
              icon={<IoIosArrowForward />}
            >
              {t('common:programLabel')}
            </ButtonLink>
            <ButtonLink
              variant="secondary-invert-w-border"
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
    </div>
  );
};

export default Push;
