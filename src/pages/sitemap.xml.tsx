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
        <loc>https://slocoders.com/businesses-with-coders</loc>
        <priority>0.90</priority>
    </url>
    <url>
        <loc>https://slocoders.com/recruiters-and-jobs</loc>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://slocoders.com/coworking-spaces</loc>
        <priority>0.50</priority>
    </url>
    <url>
        <loc>https://slocoders.com/learning-resources</loc>
        <priority>0.10</priority>
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
