import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { AboutMe } from "@/components/about-me";
import { Other } from "@/components/other";
import { Portfolio } from "@/components/portfolio";
import { GitHubProjects } from "@/components/github-projects";
import { ScrollToTopButton } from "@/components/helpers/scroll-to-top";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <AboutMe />
      <GitHubProjects />
      <Portfolio />
      <Other />
      <Education />
      <Contact />
      <ScrollToTopButton />
    </>
  );
};
