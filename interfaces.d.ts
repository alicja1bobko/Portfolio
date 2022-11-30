export interface Technology {
  image: Image;
  title: string;
}

export interface Project {
  _id: string;
  link: string;
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
}
