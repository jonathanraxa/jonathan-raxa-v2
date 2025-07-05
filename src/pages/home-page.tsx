import { Contact } from "@/components/evergreen/contact";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Other } from "@/components/other";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Other />
      <Contact />
    </>
  );
};
