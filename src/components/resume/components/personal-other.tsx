import React from "react";
import "../../Assets/Assets";

const Personal = () => {
  return (
    <div className="Personal" id="personal">
      <div className="text-center mt-6 sm:mt-8">
        <h2 className="uppercase text-xl sm:text-2xl font-bold">
          Personal/Other
        </h2>
      </div>

      <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-row justify-between items-center gap-1 sm:gap-0">
            <div className="text-sm sm:text-base font-semibold">
              2018 - 2021
            </div>
            <div className="text-sm sm:text-base font-semibold text-center sm:text-left">
              SF Toastbusters, VP of Public Relations | Toastmasters
              International
            </div>
            <div className="text-sm sm:text-base font-semibold text-center sm:text-right">
              San Francisco, CA
            </div>
          </div>
          <div className="text-sm sm:text-base ml-0 sm:ml-4">
            Managing PR duties for non-profit | Creating engagement with online
            tools
          </div>
          <div className="text-sm sm:text-base ml-0 sm:ml-4">
            Designed and developed new club website
          </div>
          <div className="text-sm sm:text-base ml-0 sm:ml-4">
            <a
              href="https://www.sftoastbusters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              www.sftoastbusters.com
            </a>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-row justify-between items-center gap-1 sm:gap-0">
            <div className="text-sm sm:text-base font-semibold">Nov 2018</div>
            <div className="text-sm sm:text-base font-semibold text-center sm:text-left">
              Author
            </div>
            <div className="text-sm sm:text-base font-semibold text-center sm:text-right">
              San Francisco, CA
            </div>
          </div>
          <div className="text-sm sm:text-base ml-0 sm:ml-4">
            An Awkward Introvert's Guide to Human Connection
          </div>
          <div className="text-sm sm:text-base ml-0 sm:ml-4">
            <a
              href="https://amzn.to/2QsjkUE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              https://amzn.to/2QsjkUE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
