import { AboutMe } from "@/components/about-me";

import sfsu from "@/assets/img/companies/sfsulogo.png";

interface HeroExperienceData {
  start: string;
  end: string;
  company: string;
  duties: string[];
}

interface HeroExperienceProps {
  data: HeroExperienceData;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100">
      <div className="h-[700px] w-[1200px] bg-white rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)]">
        <div className="flex flex-row items-start justify-start h-full p-[7rem]">
          <div>
            <img src={sfsu} alt="SFSU Logo" className="max-w-[200px]" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start ml-8">
            <p className="text-black">
              {data.start} - {data.end}
            </p>
            <h1 className="text-5xl text-black">{data.company}</h1>
            <p className="text-xl mt-2 text-black">
              Bachelor of Science in Computer Science
            </p>
            <div className="mt-10">
              {data.duties.map((duty, index) => (
                <p key={index} className="text-black mt-2">
                  {duty}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
