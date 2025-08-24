export interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
}

export interface SocialObject {
  name: string;
  href: string;
  linkTitle: string;
  active: boolean;
}

export type SocialObjects = SocialObject[];
