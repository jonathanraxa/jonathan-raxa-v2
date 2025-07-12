export const Skills = () => {
  return (
    <div>
      <div className="text-center mt-6 sm:mt-8">
        <h2 className="uppercase text-xl sm:text-2xl font-bold">Skills</h2>
      </div>
      <ul className="list-disc list-inside mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed">
        <li>
          <span className="font-semibold">Frontend Engineering</span>: Five
          years of professionally building out web applications using React JS,
          Ruby on Rails, and various frontend technologies.
        </li>
        <li>
          <span className="font-semibold">Software Testing</span>: Designed and
          implemented end-to-end and unit testing strategies using Cypress,
          Jest, and React Testing Library for robust coverage.
        </li>
        <li>
          <span className="font-semibold">Team Collaboration</span>:
          Collaborated with product managers, designers, and QA to define scope,
          sequence work, and prioritize deliverables. Conducted peer code
          reviews using Git, along with pairing with colleagues to discuss code
          implementation.
        </li>
      </ul>
    </div>
  );
};
