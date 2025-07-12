import React from "react";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Education } from "./education";
import { Other } from "./other";
import { Header } from "./header";
import { Summary } from "./summary";
import { Skills } from "./skills";
import { Contact } from "@/components/contact";

export const Resume = () => {
  return (
    <div className="font-[times new roman] max-w-[1280px] mx-auto p-4">
      <Header />
      <Summary />
      <Skills />
      <div className="mt-8">
        <Experience />
        <Education />
        <Other />
        <Contact page="resume" />
      </div>
    </div>
  );
};
