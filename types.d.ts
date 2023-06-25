import type { Image } from "sanity";

interface SanityBody {
  _rev: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
}

// interface Image {
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// }

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
  socials: Social[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  imageLink: string;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  linkToBuild: string;
  title: string;
  summary: string;
  technologies: Skill[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}
