import family from "@/assets/img/me/family.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { webDevYears, reactYears } from "@/data/experience-data";
import { scrollToSection } from "@/lib/utils";
import { SocialLinks } from "@/components/helpers/social-links";

export const AboutMe = () => (
  <div
    id="about-me"
    className="scroll-mt-16 bg-gray-50 dark:bg-gray-200 w-full px-4 py-16 sm:px-8 sm:py-20"
  >
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
      <div className="w-full lg:w-1/2">
        <div className="w-full h-full object-cover rounded-lg overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-auto object-cover"
            src={family}
            alt="picture of family"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-center sm:text-4xl lg:text-left">
          Nice to meet you!
        </h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            My front-end journey began in college after watching "The Social
            Network." I taught myself HTML, CSS, and JavaScript on the side, got
            hooked, and quickly realized a computer science degree was a
            no-brainer.
          </p>
          <p>
            Since then, I've spent {webDevYears} years in web development and{" "}
            {reactYears} years building React applications across cybersecurity,
            A.I., digital marketing, higher education, and social networking.
            Today I'm a front end engineer at Halcyon, building accessible,
            well-tested features with React, TypeScript, and Playwright.
          </p>
          <p>
            I care about thoughtful component architecture, maintainable code,
            and seamless user experiences, and I love solving problems alongside
            other people. My core strength is the front end, and I'm actively
            expanding my back-end skill set.
          </p>
          <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-bold mb-2">Tech Stack Highlights:</p>
            <p className="mb-2">
              <strong>Front-End:</strong> React, TypeScript, JavaScript (ES6+),
              HTML5, CSS3
            </p>
            <p className="mb-2">
              <strong>Testing:</strong> Playwright, Jest, React Testing Library,
              Cypress
            </p>
            <p className="mb-2">
              <strong>Personal projects:</strong> React, TypeScript, Tailwind
              CSS, Shadcn UI, Material UI, Node.js, Express, MongoDB, Vite,
              Firebase
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4">
            <Button
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
            <Button
              asChild
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
            >
              <Link
                to={routes.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
            <SocialLinks
              className="sm:gap-5 justify-center sm:justify-start"
              buttonClassName="transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
