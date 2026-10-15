import { routes } from "@/routes/routes";

export const Education = () => (
  <div className="Education" id="education">
    <div className="text-center mt-6 sm:mt-8">
      <h2 className="uppercase text-xl sm:text-2xl font-bold">
        Education & Publications
      </h2>
    </div>
    <div className="mt-4 space-y-1 text-sm sm:text-base">
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <div>
          <strong>Bachelor of Science, Computer Science</strong>, San Francisco
          State University, San Francisco, CA
        </div>
        <div>Aug 2010 – May 2016</div>
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <div>
          <strong>Author</strong>,{" "}
          <a
            href={routes.amazon_book}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600 transition-colors duration-200"
          >
            An Awkward [Introvert's] Guide to Human Connection
          </a>
        </div>
        <div>2018</div>
      </div>
    </div>
  </div>
);
