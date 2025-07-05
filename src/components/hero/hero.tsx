import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pic from "@/assets/img/me/jonathan-raxa.jpg";
import pic2 from "@/assets/img/me/me-and-adeline.jpg";
import { AboutMe } from "@/components/about-me";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex flex-row w-full max-w-5xl">
        <div className="flex-1 flex flex-col justify-center items-start">
          <p>👋 Hi, I'm...</p>
          <h1 className="text-5xl mt-1">Jonathan (Jon) Raxa</h1>
          <div className="mt-2 flex content-center justify-center items-center gap-5">
            <div className="text-2xl">Front End Engineer</div>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 cursor-pointer hover:text-yellow-500"
            >
              <Link
                to={routes.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 cursor-pointer hover:text-yellow-500"
            >
              <Link
                to={routes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </Button>
          </div>
          <div className="flex gap-5 mt-8 content-center justify-between">
            <AboutMe />
            <Button
              variant="outline"
              className="cursor-pointer hover:text-yellow-500"
              onClick={() => {
                const section = document.getElementById("experience");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer hover:text-yellow-500"
            >
              <Link
                to={routes.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="group relative w-[500px] h-[500px]">
            <img
              src={pic}
              alt="Jonathan Raxa"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={pic2}
              alt="Alternate view"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
