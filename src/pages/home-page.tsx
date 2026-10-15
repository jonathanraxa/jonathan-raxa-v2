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

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <GitHubProjects />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
      <Reveal>
        <Other />
      </Reveal>
      <Reveal>
        <Education />
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
