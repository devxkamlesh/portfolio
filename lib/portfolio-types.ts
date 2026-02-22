export type Hero = {
  name: string;
  headline: string;
  subheadline: string;
  availability: string;
  primary_cta: string;
  secondary_cta: string;
};

export type About = {
  intro_p1: string;
  intro_p2: string;
  proof_bullets: string[];
};

export type Project = {
  name: string;
  role: string;
  stack: string;
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: string[];
  link: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
  applied_value: string;
};

export type SupportingSkill = {
  skill: string;
  level: string;
  note: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Cta = {
  heading: string;
  body: string;
  links: string[];
};

export type Seo = {
  title: string;
  meta_description: string;
  short_bio: string;
};

export type PortfolioContent = {
  hero: Hero;
  about: About;
  projects: Project[];
  skills: SkillCategory[];
  supporting_skills: SupportingSkill[];
  services: Service[];
  cta: Cta;
  seo: Seo;
};
