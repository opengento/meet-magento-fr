'use client';

import Typography from "@/components/Typography/Typography";
import { useTranslation } from "react-i18next";
import React from "react";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {IoIosArrowForward} from "react-icons/io";

const PushWelcome = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className="rounded-xl bg-[url(/images/background/push.svg)] bg-cover flex items-center justify-center p-8">
      <div className="rounded-xl bg-white flex-col items-center justify-center px-6 py-4">
        <Typography
          color="dark"
          weight="semibold"
          align="center"
          className="whitespace-pre-wrap"
        >
          {t("common:pushWelcome")}
        </Typography>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center mt-4">
          <ButtonLink
            variant="secondary-invert-w-border"
            href={t("common:faqUrl")}
            iconPosition="right"
            icon={<IoIosArrowForward />}
          >
            FAQ
          </ButtonLink>
          <ButtonLink
            variant="secondary-invert-w-border"
            href={t("common:contactUrl")}
            iconPosition="right"
            icon={<IoIosArrowForward />}
          >
            Contact
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default PushWelcome;
