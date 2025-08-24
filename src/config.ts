import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://whey.dev",
  author: "Eder Christian",
  profile: "https://ederchristian.com/",
  desc: "Building Strong Tools for Modern Makers",
  title: "WheyDev",
  ogImage: "wheydev-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;
