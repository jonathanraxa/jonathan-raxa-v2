import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import pic from "@/assets/img/me/jonathan-raxa.jpg";
import pic2 from "@/assets/img/me/me-and-adeline.jpg";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 pt-16 sm:pt-0">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 lg:gap-0">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="text-lg lg:text-xl">👋 Hi, I'm...</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-1 font-bold">
            Jonathan (Jon) Raxa
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row content-center justify-center items-center gap-3 sm:gap-5">
            <div className="text-xl sm:text-2xl">Front End Engineer</div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="icon"
                className="size-8 sm:size-10 cursor-pointer hover:text-yellow-500"
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
                className="size-8 sm:size-10 cursor-pointer hover:text-yellow-500"
              >
                <Link
                  to={routes.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="size-8 sm:size-10 cursor-pointer hover:text-yellow-500"
              >
                <Link
                  to={routes.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDev} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 content-center justify-center lg:justify-start">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
              onClick={() => {
                const section = document.getElementById("about-me");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
              onClick={() => {
                const section = document.getElementById("experience");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
              onClick={() => {
                const section = document.getElementById("portfolio");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
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
          <div className="group relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
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

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 sm:size-14 cursor-pointer hover:text-yellow-500 transition-all duration-300 hover:scale-110"
          onClick={() => {
            const section = document.getElementById("about-me");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm sm:text-base">About me</div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-2xl sm:text-3xl"
              />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
