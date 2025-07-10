import { Contact } from "@/components/evergreen/contact";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { AboutMe } from "@/components/about-me";
import { Other } from "@/components/other";
import { Portfolio } from "@/components/portfolio";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <AboutMe />
      <Portfolio />
      <Other />
      <Education />
      <Contact />
    </>
  );
};
