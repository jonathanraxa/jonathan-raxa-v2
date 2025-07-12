export interface ExperienceDataTypes {
  key?: string;
  company?: string;
  location?: string;
  companySummary?: string;
  positionSummary?: string;
  title?: string;
  start?: string;
  end?: string;
  duties?: string[];
  companyLogo?: string;
  backgroundColor?: string;
}

export interface PortfolioHeroData {
  title?: string;
  description?: string;
  website_title?: string;
  website_link?: string;
  source_code_title?: string;
  source_code_link?: string;
  documentation_title?: string;
  documentation_link?: string;
  contribution?: string;
  languages?: string[];
  date?: string;
  extra_resource?: string;
  location?: string;
  extra_resource_TF?: boolean;
  image?: string;
}
