'use client';

import Container from "@/layouts/Container";
import React from "react";
import Typography from "../Typography/Typography";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {IoIosArrowForward} from "react-icons/io";

const SponsorRegistration = () => {
  const { t } = useTranslation(["sponsors"]);
  const submitUrl = t("sponsors:actions.submitUrl");

  return (
    <>
      {submitUrl && (
        <Container size="large">
          <div className="speakers flex flex-col py-8 md:py-12 gap-12">
            <div className="flex flex-col md:flex-row rounded-xl overflow-hidden relative">
              <div className="absolute inset-y-0 right-0 h-3 md:h-full md:w-3 bg-secondary"/>
              <div className="bg-white flex-1 flex flex-col md:flex-row-reverse">
                <div className="flex flex-col gap-6 flex-1 py-8 px-6 md:py-12 md:px-16">
                  <Typography
                    variant="h3"
                    color="dark"
                    weight="semibold"
                    underlineColor="secondary-100"
                  >
                    {t("sponsors:submit")}
                  </Typography>
                  <div className="flex flex-col">
                    <Typography variant="subtitle2" color="dark" weight="medium" className="whitespace-pre-wrap">
                      {t("sponsors:description")}
                    </Typography>
                  </div>
                </div>
                <div className="bg-[url(/images/background.svg)] bg-cover flex items-center justify-center w-full h-64 p-5 md:h-auto md:w-1/2">
                  <div className="flex-col gap-y-8 p-8 items-center bg-white rounded-xl">
                    <Typography color="primary" weight="semibold">
                      {t('sponsors:contactText')}
                    </Typography>
                    <Link href={`mailto:${t('sponsors:contactEmail')}`}>
                      <Typography color="primary" weight="extrabold">
                        {t('sponsors:contactEmail')}
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default SponsorRegistration;
