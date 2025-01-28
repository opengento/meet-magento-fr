import Typography from "@/components/Typography/Typography";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <Typography variant="h1" weight="bold" className="uppercase mb-4 text-white">
        Legal Terms
      </Typography>

      <article>
        <Typography className="text-white">
          This website is edited by the association loi 1901 « Opengento » (RNA W833003136).
        </Typography>

        <Typography className="text-white">
          Represented by: Frédéric MARTINEZ.
        </Typography>

        <Typography className="text-white">
          Head office: 17 rue Idrac - 31000 Toulouse - France.
        </Typography>

        <Typography className="text-white">
          Contact: <Link href="mailto:opengento@gmail.com">opengento@gmail.com</Link>
        </Typography>

        <Typography variant="h2" weight="bold" className="uppercase mb-4 text-white">
          Hosting
        </Typography>

        <Typography className="text-white">
          This website is hosted with <em>♥</em> by GitHub.
        </Typography>

        <Typography variant="h2" weight="bold" className="uppercase mb-4 text-white">
          Cookies
        </Typography>

        <Typography className="text-white">
          This website does not use any cookies and does not track any personal data.
        </Typography>
      </article>
    </section>
  );
}
