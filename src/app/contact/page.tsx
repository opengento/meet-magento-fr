'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import Push from "@/layouts/Push/Push";
import Faq from "@/components/Faq/Faq";

export default function Page() {
  const { t } = useTranslation(['faq']);

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-2"
        >
          {t('faq:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8"
        >
          {t('faq:description')}
        </Typography>
      </ContentMedia>
      <div className="bg-white rounded-xl p-4 md:p-8">
        <Typography
          variant="h2"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-6"
        >
          {t('faq:faq')}
        </Typography>
        <Faq display="grid" />
        <hr/>
        <div className="hidden">
          <form
            action='https://forms.zohopublic.eu/mm25fropen1/form/ContactUs/formperma/ZHVFtNjDA2zl9Kg7YZsWC2_X8jKowgy3vt6j_YvOsRQ/htmlRecords/submit'
            name='form' id='form' method='POST' accept-charset='UTF-8' encType='multipart/form-data'>
            <input type="hidden" name="zf_referrer_name" value=""/><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
            <input type="hidden" name="zf_redirect_url" value=""/><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
            <input type="hidden" name="zc_gad" value=""/><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
            <h2>Contact Us</h2>
            <p></p>
            <!--Name-->
            <label> Nom </label>
            <input type="text" maxLength="255" name="Name_First" fieldType="7" placeholder="" />
            <label>Pr&eacute;nom</label>
            <input type="text" maxLength="255" name="Name_Last" fieldType="7" placeholder="" />
            <label>Nom de famille</label>
              <!--Email-->
            <label> Email
              <em>*</em>
            </label>
            <input type="text" maxLength="255" name="Email" value="" fieldType="9" placeholder="" />
              <!--Single Line-->
            <label>
              Objet
              <em>*</em>
            </label>
            <input type="text" name="SingleLine" value="" fieldType="1" maxlength="255" placeholder="" />
              <!--Multi Line-->
            <label> Message
              <em>*</em>
            </label>
            <textarea name="MultiLine" maxLength="65535" placeholder=""></textarea>
              <!--Terms and Conditions-->
            <label>
              Conditions g&eacute;n&eacute;rales
              <em>*</em>
            </label>
            <div className="termsContainer">
              <div>
                <div>En cliquant sur “Soumettre”, j’autorise Meet Magento France à traiter mes données et à me
                  recontacter pour répondre à ma demande selon notre <a
                    href="https://meet-magento.opengento.fr/mentions-legales#data-protection" target="_blank"
                    rel="noopener noreferrer">politique de confidentialité</a>. <br/></div>
              </div>
              <div>
                <input className="checkBoxType flLeft" name="TermsConditions" type="checkbox"/>
                <label>J’accepte les Termes et conditions.</label>
              </div>
            </div>
            <button type="submit"><em>Submit</em></button>
          </form>
        </div>
      </div>
      <Push/>
    </Container>
  );
}
