import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";

export const Other = () => (
  <div className="Education" id="education">
    <div className="text-center mt-8">
      <h2 className="uppercase text-2xl font-bold">Other</h2>
    </div>
    <div className="mt-10">
      <strong>Author</strong>,{" "}
      <Link
        to={routes.amazon_book}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500"
      >
        An Awkward [Introvert's] Guide to Human Connection
      </Link>{" "}
      (2018)
    </div>
  </div>
);
