import React from "react";
import { TypeAnimation } from "react-type-animation";
import codeblock from "../../../assets/Images/codeblock.png"
const CodeBlocks = ({
  //codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className="flex flex-col border-2 rounded-2xl p-6 lg:py-6 items-center w-[90%] lg:w-[60%] justify-center my-20 mx-auto">
      {/* Section 1 */}

      {/* Section 2: Code Block */}
      <div className="relative h-full flex flex-row py-6 px-8 text-sm sm:text-base leading-6 sm:leading-7 w-[90%] lg:w-[80%] rounded-xl  shadow-2xl justify-center items-center mx-auto">
        <img src={codeblock} alt="img" />
      </div>
    </div>
  );
};

export default CodeBlocks;
