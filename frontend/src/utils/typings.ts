interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  }
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  phoneNumber: string;
  name: string;
  address: string;
  backgroundInformation: string;
  role : string;
  email: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  title: string;
  image: Image;
  progress: number;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  title: string;
  image: Image;
  progress: number;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  summary: string;
  image: Image;
  linkToBuild: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: 'experience';
  companyImage: Image;
  company: string;
  jobTitle: string;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  points: string[];

}
