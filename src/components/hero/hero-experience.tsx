import classnames from "classnames";

interface HeroExperienceData {
  start: string;
  end: string;
  company: string;
  duties: string[];
  companySummary: string;
  backgroundColor?: string;
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
    start,
    end,
    companySummary,
    duties,
  } = data;
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100 bg-[${backgroundColor}]`}
    >
      <div className="h-[700px] w-[1200px] bg-white rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)]">
        <div className="flex flex-row items-start justify-start h-full p-[5rem]">
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
              {duties.map((duty, index) => (
                <p key={index} className="text-black mt-3">
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
