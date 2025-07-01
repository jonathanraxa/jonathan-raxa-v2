import React from "react";

export const Gutter = () => {
  return (
    <div className="row row-0-gutter">
      {/* about module */}
      <div className="col-md-3 col-0-gutter mz-about-default text-center">
        <div className="mz-module-about">
          <i className="fas fa-briefcase ot-circle" />
          <h3>Development</h3>
        </div>
      </div>
      {/* end about module */}
      {/* about module */}
      <div className="col-md-3 col-0-gutter mz-about-dark text-center">
        <div className="mz-module-about">
          <i className="fas fa-folder-plus ot-circle" />
          <h3>Software</h3>
        </div>
      </div>
      {/* end about module */}
      {/* about module */}
      <div className="col-md-3 col-0-gutter mz-about-default text-center">
        <div className="mz-module-about">
          <i className="fas fa-image ot-circle" />
          <h3>Design</h3>
        </div>
      </div>
      {/* end about module */}
      {/* about module */}
      <div className="col-md-3 col-0-gutter mz-about-dark text-center">
        <div className="mz-module-about">
          <i className="fas fa-cube ot-circle" />
          <h3>Data</h3>
        </div>
      </div>
      {/* end about module */}
    </div>
  );
};
