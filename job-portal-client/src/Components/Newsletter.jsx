import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div className="mt-5">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for hobs{" "}
        </h3>
        <p className="text-primary/75 text-base mb-4">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
        <div className="w-full space-y-4">
            <input type="email" name="email" id="email" placeholder="your@email.com" className="w-full block py-2 pl-3 border focus:outline-none" />
            <input type="submit" value={"Subscriber"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"/>
        </div>

        
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
        <div className="w-full space-y-4">
           
            <input type="submit" value={"Upload your resume"} className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"/>
        </div>

        
      </div>
    </div>
  );
};

export default Newsletter;
