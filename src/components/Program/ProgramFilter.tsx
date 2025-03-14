import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaHeart, FaStar, FaTag } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

const ProgramFilter = () => {
  const filters: { name: string; icon: React.ReactNode }[] = [
    { name: "TOUT VOIR", icon: <MdDoubleArrow size={24} /> },
    { name: "TECHNIQUE", icon: <FaChartSimple size={20} /> },
    { name: "BUSINESS", icon: <FaTag size={20} /> },
    { name: "IA", icon: <FaStar size={20} /> },
    { name: "MAGENTO", icon: <BsFillHexagonFill size={20} /> },
    { name: "PARCOURS", icon: <FaHeart size={20} /> },
  ];
  return (
    <div className="program-filter flex justify-center items-center">
      <div className="flex gap-3 md:gap-6 bg-white rounded-full p-4 md:px-8 md:py-6 w-fit shadow-md">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full bg-white text-primary border border-primary hover:border-primary hover:bg-primary hover:text-white"
          >
            <div className="flex flex-row gap-1 items-center">
              {filter.icon}
              <span className="font-semibold">{filter.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgramFilter;
