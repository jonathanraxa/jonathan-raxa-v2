import React from "react";
import { Experience } from "./experience";
// import {Projects} from "./projects";
// import {Education} from "./education";
// import {Personal} from "./personal-other";
import { Header } from "./header";
import { Summary } from "./summary";

export const Resume = () => {
  return (
    <div className="font-[times new roman] max-w-[1280px] mx-auto p-4">
      <Header />
      <Summary />
      <div className="mt-8">
        <Experience />
        {/* <hr className="my-4" />
        <Projects />
        <hr className="my-4" />
        <Education />
        <hr className="my-4" />
        <Personal /> */}
      </div>
    </div>
  );
};
