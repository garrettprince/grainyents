import React from "react";

function Controls() {
  return (
    <div className="bg-gray-200 mt-5 rounded-2xl p-4 flex justify-between px-10 shadow-lg">
      <div className="flex space-x-3 items-center">
        <p className="font-medium text-gray-500">Less Grain</p>
        <input
          type="range"
          className="appearance-none slider bg-gray-400 rounded-full h-1"
          step="1.0"
          min="1.0"
          max="7.0"
        />
        <p className="font-medium text-gray-500">More Grain</p>
      </div>
      <section className="flex space-x-3 items-center">
        <div>
          <select name="Select" id="" className="bg-transparent appearance-none">
            <option value="test">Full</option>
            <option value="test">Shapes</option>
          </select>
        </div>
        <div>
          <select name="Select" id="" className="bg-transparent">
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
