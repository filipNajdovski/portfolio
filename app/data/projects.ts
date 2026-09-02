import type { StaticImageData } from 'next/image';
import nurReinigung from './../../images/projects/nur-reinigung.png';
import nedvizniniOnline from './../../images/projects/nedviznini.online.screen.png';
import githubFinder from './../../images/projects/github-finder.png';

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  /** Alt text describing the screenshot, not the project name alone. */
  altText: string;
  link: string;
};

// Content lives here rather than inline in Projects.tsx so adding a project is
// a data edit, not a JSX edit.
export const PROJECTS: Project[] = [
  {
    title: 'Nur Reinigung',
    description: 'Cleaning company site — Swiss market, German language',
    image: nurReinigung,
    altText: 'Nur Reinigung homepage showing the hero and service navigation',
    link: 'https://nur-reinigung.ch/',
  },
  {
    title: 'Nedviznini Online',
    description: 'Real estate marketplace with listings and filtering',
    image: nedvizniniOnline,
    altText: 'Nedviznini Online explore page showing property listings',
    link: 'https://real-estate-marketplace-git-main-filip-najdovskis-projects.vercel.app/',
  },
  {
    title: 'GitHub Finder',
    description: 'Search GitHub users and browse their repositories',
    image: githubFinder,
    altText: 'GitHub Finder search interface with a user result',
    link: 'https://github-finder-xv5g.vercel.app/',
  },
];
