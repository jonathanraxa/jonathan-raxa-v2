import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { scrollToSection } from "@/lib/utils";
import { SocialLinks } from "@/components/helpers/social-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <SocialLinks
              sites={["github", "linkedin", "devto"]}
              buttonClassName="size-8 sm:size-10"
            />
          </div>
          <p className="mt-5 max-w-xl text-base text-gray-300 sm:text-lg">
            I build accessible, well-tested web apps with React and TypeScript —
            currently at Halcyon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 content-center justify-center lg:justify-start">
            <Button
              size="lg"
              className="cursor-pointer bg-yellow-500 font-semibold text-gray-900 hover:bg-yellow-400 text-base sm:text-sm px-6 py-3 sm:px-5 sm:py-2"
              onClick={() => scrollToSection("portfolio")}
            >
              View my work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
              onClick={() => scrollToSection("about-me")}
            >
              About me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:text-yellow-500 text-base sm:text-sm px-6 py-3 sm:px-4 sm:py-2"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
            <Button
              asChild
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
          <div className="group relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px]">
            <img
              src={pic}
              alt="Jonathan Raxa"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={pic2}
              alt="Jonathan and Adeline"
              className="absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 hidden transform -translate-x-1/2 animate-bounce sm:block">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 sm:size-14 cursor-pointer hover:text-yellow-500 transition-all duration-300 hover:scale-110"
          onClick={() => scrollToSection("about-me")}
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
