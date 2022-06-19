import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc>https://slocoders.com/</loc>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://slocoders.com/tech-companies</loc>
        <priority>0.90</priority>
    </url>
    <url>
        <loc>https://slocoders.com/tech-recruiters</loc>
        <priority>0.70</priority>
    </url>
    <url>
        <loc>https://slocoders.com/coworking</loc>
        <priority>0.80</priority>
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
