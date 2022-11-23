export interface Technology {
  image: Image;
  title: string;
}

export interface Project {
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
}
