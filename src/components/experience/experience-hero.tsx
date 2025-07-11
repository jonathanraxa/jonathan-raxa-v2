import { ExperienceDataTypes } from "@/types/index";

interface ExperienceHeroProps {
  data: ExperienceDataTypes;
  closeButton?: React.ReactNode;
  header?: React.ReactNode;
}

export const ExperienceHero: React.FC<ExperienceHeroProps> = ({
  data,
  closeButton,
  header,
}) => {
  const {
    backgroundColor,
    companyLogo,
    company,
    positionSummary,
    start,
    end,
    duties,
  } = data;

  return (
    <div
      style={{ backgroundColor }}
      className="h-screen flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100"
    >
      <div className="w-[1200px] bg-white rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)]">
        <div className="h-full p-[5rem]">
          <div className="flex flex-row items-start justify-start">
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
              {header}
              <div className="mt-10">
                <div className="mb-5 text-red-600 text-lg">
                  {positionSummary}
                </div>
                {duties?.map((duty, index) => (
                  <p key={index} className="text-black mt-3">
                    {duty}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">{closeButton}</div>
        </div>
      </div>
    </div>
  );
};
