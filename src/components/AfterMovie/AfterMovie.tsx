import Container from "@/layouts/Container";
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const AfterMovie = () => {
  return (
    <Container size="small" className="py-12">
      <div className="rounded-xl overflow-hidden">
        <LiteYouTubeEmbed
          id="6ghZUrHD1MQ"
          title="After Movie"
          params="controls=0&modestbranding=1&playlist=6ghZUrHD1MQ&loop=1"
          autoplay={true}
          muted={true}
          poster="maxresdefault"
          webp={true}
          lazyLoad={true}
          enableJsApi={true}
          alwaysLoadIframe={true}
          cookie={false}
          adNetwork={false}
          playerClass="hidden"
        />
      </div>
    </Container>
  );
};

export default AfterMovie;
