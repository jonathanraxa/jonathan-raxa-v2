import { BackButton } from "@/components/helpers/back-button";

interface HeroExperienceData {
  start: string;
  end: string;
  company: string;
  duties: string[];
  companySummary: string;
  backgroundColor?: string;
  positionSummary?: string;
  companyLogo?: string;
}

interface HeroExperienceProps {
  data: HeroExperienceData;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ data }) => {
  const {
    backgroundColor,
    companyLogo,
    company,
    positionSummary,
    start,
    end,
    companySummary,
    duties,
  } = data;

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100 bg-[${backgroundColor}]`}
    >
      
      <div className="min-h-[700px] h-[800px] w-[1200px] bg-white rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)]">
        <div className="h-full p-[5rem]">
          <div className="flex flex-row items-start justify-start ">
          <div>
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="max-w-[200px] w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start ml-8">
            <p className="text-black">
              {start} - {end}
            </p>
            <h1 className="text-5xl text-black">{company}</h1>
            <p className="text-md mt-2 text-black">
              <i>{companySummary}</i>
            </p>

            <div className="mt-10">
              <div className="mb-5 text-red-600 text-lg">
                {positionSummary}
              </div>
              {duties.map((duty, index) => (
                <p key={index} className="text-black mt-3">
                  {duty}
                </p>
              ))}
            </div>
          </div>
          </div>
      <div className="flex justify-center mt-10">
      <BackButton classNames="px-4 py-2 text-black cursor-pointer hover:text-yellow-500 text-xl" />
      </div>
        </div>
      </div>
    </div>
  );
};
