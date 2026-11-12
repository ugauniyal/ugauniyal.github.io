export interface SocialLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  /** Id of the home-page section this item scrolls to. */
  sectionId: string;
}

export const siteConfig = {
  name: 'Utkarsh Gauniyal',
  shortName: 'Utkarsh.',
  title: 'Utkarsh Gauniyal — Software Engineer',
  description:
    'Software Engineer specializing in backend systems, mobile apps, and cloud infrastructure for high-growth environments.',
  url: 'https://ugauniyal.github.io',
  email: 'ugauniyal@outlook.com',
  availability: 'Available for freelance projects.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/utkarsh-gauniyal/' },
    { label: 'GitHub', href: 'https://github.com/ugauniyal' },
    { label: 'Twitter', href: 'https://twitter.com/UtkarshGauniyal' },
  ] satisfies SocialLink[],
  twitterHandle: '@UtkarshGauniyal',
} as const;

export const navItems: readonly NavItem[] = [
  { label: 'Projects', sectionId: 'work' },
  { label: 'Reviews', sectionId: 'reviews' },
  { label: 'Services', sectionId: 'services' },
];

export const CONTACT_SECTION_ID = 'contact';

export const mailtoLink = (subject?: string): string =>
  subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;
