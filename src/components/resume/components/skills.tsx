import { reactYears } from "@/data/experience-data";

export const Skills = () => {
  return (
    <div>
      <div className="text-center mt-6 sm:mt-8">
        <h2 className="uppercase text-xl sm:text-2xl font-bold">Skills</h2>
      </div>
      <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base leading-relaxed">
        <li>
          <span className="font-semibold">Frontend Engineering</span>:{" "}
          {reactYears} years building production web applications with React,
          TypeScript, JavaScript, HTML, and CSS, including design systems and
          component libraries.
        </li>
        <li>
          <span className="font-semibold">Testing & Accessibility</span>:
          End-to-end and unit testing with Playwright, Cypress, Jest, and React
          Testing Library; building and auditing accessible interfaces.
        </li>
        <li>
          <span className="font-semibold">Team Collaboration</span>: Partner
          with product managers, designers, and QA to define scope, sequence
          work, and prioritize deliverables; lead peer code reviews and pair
          programming.
        </li>
      </ul>
    </div>
  );
};
