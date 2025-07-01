import React from "react";

export default function Section({ title, dark, id }) {
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, dolor id rutrum varius, sem sem mattis elit, at imperdiet libero elit ut elit. Mauris sodales at purus vel sodales. Donec iaculis imperdiet justo. Donec at commodo velit, a euismod justo. Quisque interdum velit enim, quis pharetra turpis luctus eget. Morbi venenatis tincidunt lorem, eget posuere risus viverra eget. Curabitur tincidunt imperdiet dui sit amet tincidunt. Curabitur suscipit nisl a tincidunt consequat. Aliquam sollicitudin diam at egestas aliquam. Etiam non augue justo. Cras leo leo, hendrerit posuere turpis ac, dapibus finibus dui. Phasellus eleifend venenatis massa, ac eleifend diam ullamcorper at. Curabitur mauris elit, auctor consequat justo ac, convallis congue quam. Donec ornare purus ac imperdiet ultricies.";
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}></div>
    </div>
  );
}
