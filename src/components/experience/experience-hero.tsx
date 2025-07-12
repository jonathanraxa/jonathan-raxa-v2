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
      className="flex-1 flex items-center justify-center bg-[#2b286e] text-gray-800 dark:text-gray-100 p-4 min-h-0 overflow-auto"
    >
      <div className="w-full max-w-[1200px] bg-white rounded-[25px] sm:rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)]">
        <div className="p-[2rem] sm:p-[3rem] md:p-[5rem]">
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6 sm:gap-8">
            <div className="w-full sm:w-auto flex justify-center sm:justify-start">
              <img
                src={companyLogo}
                alt={`${company} logo`}
                className="max-w-[150px] sm:max-w-[200px] w-full object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start sm:ml-8">
              <p className="text-black text-sm sm:text-base mb-2 sm:mb-0">
                {start} - {end}
              </p>
              {header}
              <div className="mt-6 sm:mt-10 w-full">
                <div className="mb-3 sm:mb-5 text-red-600 text-base sm:text-lg font-medium">
                  {positionSummary}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {duties?.map((duty, index) => (
                    <p
                      key={index}
                      className="text-black text-sm sm:text-base leading-relaxed"
                    >
                      {duty}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 sm:mt-10">{closeButton}</div>
        </div>
      </div>
    </div>
  );
};
