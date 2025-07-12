import React from "react";
import { Contact } from "@/components/contact";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Other } from "./components/other";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

export const Resume = () => {
  return (
    <div className="font-[times new roman] max-w-[1280px] mx-auto p-2 sm:p-4">
      <Header />
      <Summary />
      <Skills />
      <div className="mt-6 sm:mt-8">
        <Experience />
        <Projects />
        <Education />
        <Other />
        <Contact page="resume" />
      </div>
    </div>
  );
};
