import { webDevYears, reactYears } from "@/data/experience-data";

export const Summary = () => (
  <div className="text-center mt-6 sm:mt-8">
    <h2 className="uppercase text-xl sm:text-2xl font-bold">Summary</h2>
    <p className="mt-2 mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-0">
      Front end engineer with {webDevYears} years of web development experience
      and {reactYears} years building React applications across cybersecurity,
      AI, digital marketing, higher education, and social networking. Currently
      at Halcyon, building accessible, well-tested features with React,
      TypeScript, and Playwright. Known for scalable, responsive interfaces,
      strong testing practices, and effective collaboration with
      cross-functional teams.
    </p>
  </div>
);
