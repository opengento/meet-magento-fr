import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Place from "@/components/Place/Place";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div className="">
      <div className="content-media-sections flex flex-col gap-12 py-12">
        <ContentMedia
          imageUrl="/images/faq.png"
          imagePosition="right"
          imageWidth="40%"
          title="Besoin d'aide ?"
          titleUnderlineColor="purple-100"
        >
          <Faq />
        </ContentMedia>
        <ContentMedia
          imageUrl="/images/etoile_business_center.jpeg"
          imagePosition="left"
          imageWidth="40%"
        >
          <Place />
        </ContentMedia>
      </div>
    </div>
  );
}
