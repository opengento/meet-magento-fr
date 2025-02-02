type SponsorType = 'platinum' | 'gold' | 'silver' | 'bronze';

export type SponsorTypeProps = SponsorType;
export type SponsorProps = {
  type: SponsorType
  name: string,
  logoSrc: string,
  whiteLogoSrc: string,
  bannerSrc?: string,
  url: string,
  description?: string,
  caption: string,
};
