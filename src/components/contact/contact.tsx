import React from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/helpers/social-links";
import { SectionHeading } from "@/components/helpers/section-heading";

const EMAIL = "jonathanraxa@gmail.com";

interface ContactProps {
  page?: string;
}

export const Contact: React.FC<ContactProps> = ({ page }) => {
  // Plain version for the printable resume page
  if (page === "resume") {
    return (
      <div className="flex justify-center flex-col w-full text-center section-title mb-[4rem] mt-[4rem]">
        <div className="text-center mt-8 mb-8">
          <h2 className="uppercase text-2xl font-bold">Contact</h2>
        </div>
        <p>
          <strong>Email:</strong>&nbsp;&nbsp;
          <a className="hover:text-yellow-500" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <SocialLinks className="justify-center items-center mt-10 gap-5 print:hidden" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:py-20">
      <SectionHeading
        title="Let's work together"
        subtitle="I'm always happy to talk about front-end roles, interesting projects, or anything web. The fastest way to reach me is email."
        className="mb-8 sm:mb-10"
      />
      <Button
        asChild
        size="lg"
        className="bg-yellow-500 px-8 text-base font-semibold text-gray-900 hover:bg-yellow-400"
      >
        <a href={`mailto:${EMAIL}`}>Email me</a>
      </Button>
      <p className="mt-4 text-sm opacity-80">
        {EMAIL} · Available Monday–Friday, 9 AM–5 PM CT
      </p>
      <SocialLinks className="justify-center items-center mt-8 gap-5" />
    </div>
  );
};
