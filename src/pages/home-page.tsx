import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { AboutMe } from "@/components/about-me";
import { Other } from "@/components/other";
import { Portfolio } from "@/components/portfolio";
import { GitHubProjects } from "@/components/github-projects";
import { ScrollToTopButton } from "@/components/helpers/scroll-to-top";
import { Reveal } from "@/components/helpers/reveal";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Writing } from "@/components/writing";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
      <Reveal>
        <GitHubProjects />
      </Reveal>
      <Reveal>
        <Writing />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Other />
      </Reveal>
      <div id="contact" className="scroll-mt-16">
        <Reveal>
          <Contact />
        </Reveal>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
