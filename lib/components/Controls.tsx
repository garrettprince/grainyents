import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

function Controls() {
  return (
    <div className="bg-gray-200 mt-5 rounded-2xl p-4 flex justify-between px-10 shadow-lg">
      <div className="flex space-x-3 items-center">
        <p>Less Grain</p>
        <input
          type="range"
          className="appearance-none slider bg-gray-400 rounded-full h-1"
          step="1.0"
          min="1.0"
          max="7.0"
        />
        <p>More Grain</p>
      </div>
      <section className="flex space-x-10 items-center">
        {/* <div>
          <select name="Select" id="" className="bg-transparent appearance-none">
            <option value="test">Full</option>
            <option value="test">Shapes</option>
          </select>
        </div> */}
        <div className="flex justify-center items-center space-x-1">
          <ChevronDownIcon className="" />
          <select
            name="Select"
            id=""
            className="bg-transparent appearance-none active:ring-0"
          >
            <option value="test">Desktop</option>
            <option value="test">Mobile</option>
          </select>
        </div>
        <div className="relative group active:scale-95 transition-all">
          <button className="">Download</button>
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </div>
      </section>
    </div>
  );
}

export default Controls;
