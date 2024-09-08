import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://whey.dev",
  author: "Eder Christian",
  desc: "Strengthen Your Coding Foundation",
  title: "WheyDev",
  ogImage: "wheydev-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/wheydev",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://github.com/wheydev",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/wheydev",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/wheydev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/wheydev",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@wheydev",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/wheydev",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.com/wheydev",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://telegram.com/wheydev",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:wheydevco@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
