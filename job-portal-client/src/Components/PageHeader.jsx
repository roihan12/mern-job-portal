import React from "react";

const PageHeader = ({title, path}) => {
  return (
    <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
      <div className= "text-center">
        <h2 className="text-3xl text-blue font-medium mb-1 text-center">
         {title}
        </h2>
        <p>
          <a href="/" className="text-sm text-center">
            Home
          </a>
          /{path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
