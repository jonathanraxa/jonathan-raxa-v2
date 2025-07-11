import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { AboutMe } from "@/components/about-me";
import { Other } from "@/components/other";
import { Portfolio } from "@/components/portfolio";
import { ScrollToTopButton } from "@/components/helpers/scroll-to-top";

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
      <ScrollToTopButton />
    </>
  );
};
