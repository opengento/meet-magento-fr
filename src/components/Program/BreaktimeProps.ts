export type BreaktimeProps = {
  title: string;
  start: string;
  end: string;
  sponsor?: {
    name: string;
    logoSrc: string;
    url: string;
  }
  background: "default" | "variant1" | "variant2" | "variant3";
}
