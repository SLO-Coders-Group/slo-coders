import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.slocountycoders.com/</loc>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.slocountycoders.com/resources</loc>
        <priority>0.90</priority>
      </url>
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
