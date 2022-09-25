import React from "react";
import Icon from "./Icon";

function Footer() {
  return (
    <div className="flex mt-20 bg-gray-200 w-full h-32 justify-around px-20 items-center">
      <div className="w-48">
        <button className="">How it was made</button>
      </div>
      <a href="https://www.garrett.cool/">
        <Icon />
      </a>
      <p className="italic text-gray-500 w-48 text-center text-xs">
        * term originally coined by{" "}
        <a href="https://www.behance.net/mchlcarvalho" className="underline">
          Michel Carvalho
        </a>{" "}
        in 2019.
      </p>
    </div>
  );
}

export default Footer;
