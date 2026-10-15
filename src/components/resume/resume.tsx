import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Other } from "./components/other";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

export const Resume = () => {
  return (
    <div className="resume font-['Times_New_Roman',Times,serif] max-w-[850px] mx-auto px-4 py-6 sm:px-8 print:max-w-none print:p-0">
      <div className="mb-4 flex items-center justify-between font-sans text-sm print:hidden">
        <Link
          to="/"
          className="font-semibold hover:text-yellow-600 transition-colors duration-200"
        >
          ← jonathanraxa.com
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 font-sans text-sm font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
          Save as PDF
        </button>
      </div>
      <Header />
      <Summary />
      <Skills />
      <div className="mt-6 sm:mt-8">
        <Experience />
        <Projects />
        <Education />
        <Other />
      </div>
    </div>
  );
};
