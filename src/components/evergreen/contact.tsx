import React from "react";

export const Contact = () => {
  return (
    <div className="flex justify-center flex-col w-full text-center section-title mb-[4rem] mt-[4rem] ">
      <h2 className="text-2xl">Contact</h2>
      <p>
        FOR{" "}
        <span className="text-red-600 font-bold">
          <i>CAREER INQUIRIES</i>
        </span>
      </p>
      <p>
        <strong>Availiable</strong>: Monday to Sunday, 9am - 7pm
      </p>
      <p>
        <strong>Email:</strong>&nbsp;&nbsp;
        <a href="mailto:jonathanraxa@gmail.com">jonathanraxa@gmail.com</a>
      </p>
    </div>
  );
};
