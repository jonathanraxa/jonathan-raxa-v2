import { SocialLinks } from "@/components/helpers/social-links";

export const Footer = () => (
  <footer className="bg-gray-900 px-4 py-10 text-gray-300 sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="font-semibold text-gray-100">Jonathan Raxa</p>
        <p className="mt-1">Front End Engineer · Austin, TX</p>
      </div>
      <SocialLinks sites={["github", "linkedin", "devto"]} className="gap-3" />
      <p className="text-center sm:pr-24 sm:text-right">
        © {new Date().getFullYear()} Jonathan Raxa
        <br />
        Built with React, TypeScript & Tailwind CSS
      </p>
    </div>
  </footer>
);
