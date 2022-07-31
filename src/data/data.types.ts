export type SloCitiesType =
  | "Atascadero"
  | "Avila Beach"
  | "Cambria"
  | "Cayucos"
  | "Creston"
  | "Grover Beach"
  | "Harmony"
  | "Arroyo Grande"
  | "Los Osos"
  | "Morro Bay"
  | "Nipomo"
  | "Oceano"
  | "Paso Robles"
  | "Pismo Beach"
  | "San Luis Obispo"
  | "San Miguel"
  | "San Simeon"
  | "Santa Margarita"
  | "Shandon"
  | "Templeton";

export type GlassdoorReviewUrlType =
  `https://www.glassdoor.com/Reviews/${string}.htm`;

export type LinkedInJobsUrlType =
  | `https://www.linkedin.com/jobs/search/${string}`
  | `https://www.linkedin.com/${"school" | "company"}/${string}/jobs/`;

export type UrlType = `${"https" | "http"}://${string}`;

export type GoogleMapsUrl =
  | `https://goo.gl/maps/${string}`
  | `https://g.page/${string}?share`;
