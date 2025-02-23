import React from 'react';

const Graph = () => {
  return (
    <div className="w-fit h-fit bg-[#060a2b] rounded-lg flex flex-col p-[20px_30px]">
      {/* Header Section */}
      <div className="flex mb-5 pl-2 justify-between items-center">
        <div className="text-[#8a8aa3]">
          <h1 className="text-xl font-medium">Likes</h1>
        </div>
        <div className="w-[40px]">
          {/* Like Icon */}
          <svg
            viewBox="-1.35 0 1504.4 1504.4"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fdfdfd"
            className="cursor-pointer"
          >
            <g>
              <ellipse cx="750.8" cy="752.2" rx="750.8" ry="752.2"></ellipse>
              <path
                fill="none"
                stroke="#fdfdfd"
                strokeWidth="60"
                d="M378.3 667.5h165.1c13 0 23.6 10.5 23.6 23.6v379.1c0 13-10.5 23.6-23.6 23.6H378.3c-13 0-23.6-10.5-23.6-23.6V691c.1-13 10.6-23.5 23.6-23.5zM624.7 1004.7V733.1c.1-66.9 18.8-132.4 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.8 83.1-35.8 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-1.7.6-2.6 2.5-1.9 4.2.3.7.8 1.3 1.5 1.7 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-1.7.4-2.8 2.2-2.3 3.9.2.9.8 1.6 1.5 2 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-1.7.5-2.7 2.3-2.2 4 .2.7.7 1.4 1.3 1.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1-.1-22.4 0-22.4-29.9z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-white text-[30px] font-bold">259</div>
      <div className="text-[#8a8aa3]">Total Likes</div>

      {/* Chart Section (optional - Example SVG chart) */}
      <div className="mt-5">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="370"
          height="200"
          viewBox="0 0 370 200"
        >
          <rect fill="none" x="44" y="10" width="316" height="175"></rect>
          <path
            fill="none"
            stroke="#ccd6eb"
            strokeWidth="2"
            d="M 44 185.5 L 360 185.5"
          ></path>
          <path
            fill="none"
            stroke="#6f58e9"
            strokeWidth="4"
            d="M 44 175 L 96 145 L 148 120 L 201 100 L 254 80 L 306 60 L 359 40"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Graph;
