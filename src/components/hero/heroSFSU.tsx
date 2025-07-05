import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pic from "@/assets/img/me/jonathan-raxa.jpg";
import pic2 from "@/assets/img/me/me-and-adeline.jpg";
import { AboutMe } from "@/components/about-me";

import sfsu from "@/assets/img/companies/sfsulogo.png";
// background-image: url(../images/background.jpg);
// background-repeat: no-repeat;
// background-size: cover;
// font-family: Arial, sans-serif;
export const HeroSFSU = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100">
      <div className="flex flex-row items-center w-full max-w-5xl">
        <img
          src={sfsu}
          alt="SFSU Logo"
          className="max-w-[200px] transition-all duration-500 ease hover:p-[1.2rem] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
