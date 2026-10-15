export interface ExperienceData {
  company: string;
  location: string;
  companySummary: string;
  positionSummary: string;
  title: string;
  start: string;
  end: string;
  duties: string[];
  companyLogo: string;
  // Optional version of the logo for the white card in the detail drawer
  companyLogoOnLight?: string;
  backgroundColor: string;
}

export interface ProjectData {
  title: string;
  description: string;
  websiteTitle: string;
  websiteLink: string;
  sourceCodeTitle: string;
  sourceCodeLink: string;
  documentationTitle: string;
  documentationLink: string;
  contribution: string;
  languages: string[];
  date: string;
  extraResource: string;
  location: string;
  showExtraResource: boolean;
  image: string;
}
