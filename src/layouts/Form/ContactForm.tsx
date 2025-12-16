import Field from "@/components/Form/Field/Field";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Typography from "@/components/Typography/Typography";

interface Contact {
  action: string
}

const ContactForm = ({ action }: Contact) => {
  const { t } = useTranslation(['common']);

  return (
    <form action={action} method="POST" className="text-base text-black font-semibold">
      {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
      <input type="hidden" name="zf_referrer_name" value="mmfr-website"/>
      {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
      <input type="hidden" name="zf_redirect_url" value="https://fr.meet-magento.com/contact"/>
      {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
      <input type="hidden" name="zc_gad" value=""/>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Field
          label={t('common:Name')}
          id="name"
          name="Name_First"
          type="text"
          required={true}
          placeholder={t('common:fullname')}
        />
        <Field
          label={t('common:Email')}
          id="email"
          name="Email"
          type="email"
          required={true}
        />
        <Field
          label={t('common:Objet')}
          id="object"
          name="SingleLine"
          type="text"
          required={true}
          className="lg:col-span-2"
        />
        <Field
          label={t('common:Message')}
          id="message"
          name="MultiLine"
          variant="textarea"
          required={true}
          placeholder={t('common:help')}
          className="lg:col-span-2"
        />
        <div className="lg:col-span-2">
          <Field
            label={t('common:agreeTerms')}
            labelPosition="right"
            id="terms"
            name="TermsConditions"
            type="checkbox"
            required={true}
          />
          <Typography variant="small" color="dark" className="my-2">
            En cliquant sur “Soumettre”, j’autorise Meet Magento France à traiter mes données et à me
            recontacter pour répondre à ma demande selon notre <Link className="underline" href="/mentions-legales#data-protection">
            politique de confidentialité</Link>.
          </Typography>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary border border-white rounded-3xl text-white text-center hover:border-primary hover:bg-white hover:text-primary my-6 p-3 min-w-48 duration-300"
      >
        <span className="font-semibold">{t('common:send')}</span>
      </button>
    </form>
  );
};

export default ContactForm;
