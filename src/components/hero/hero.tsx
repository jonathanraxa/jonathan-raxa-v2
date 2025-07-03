import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pic from "@/assets/img/me/jonathan-raxa.jpg";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex flex-row w-full max-w-5xl">
        <div className="flex-1 flex flex-col justify-center items-start">
          <div>Hi, I'm...</div>
          <h1 className="text-5xl mt-1">Jonathan (Jon) Raxa</h1>
          <div className="text-2xl mt-4">Front End Engineer</div>
          <div className="mt-6 flex content-center">
            <Button variant="outline" className="mr-8">
              About me
            </Button>
            <FontAwesomeIcon className="mr-5" size="2x" icon={faGithub} />
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={pic}
            alt="Jonathan Raxa"
            className="w-150 h-150 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
