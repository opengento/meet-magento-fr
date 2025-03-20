import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaHeart, FaStar, FaTag } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

const ProgramFilter = ({
  setActiveFilters,
  activeFilters,
}: {
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
  activeFilters: string[];
}) => {
  const filters: { name: string; icon: React.ReactNode; value: string }[] = [
    { name: "TOUT VOIR", icon: <MdDoubleArrow size={24} />, value: "all" },
    {
      name: "TECHNIQUE",
      icon: <FaChartSimple size={20} />,
      value: "Technical",
    },
    { name: "BUSINESS", icon: <FaTag size={20} />, value: "Business" },
    { name: "IA", icon: <FaStar size={20} />, value: "IA" },
    {
      name: "MAGENTO",
      icon: <BsFillHexagonFill size={20} />,
      value: "magento",
    },
    { name: "PARCOURS", icon: <FaHeart size={20} />, value: "parcours" },
  ];
  const handleFilterClick = (filter: string) => {
    if (filter === "all") {
      setActiveFilters([]);
    } else {
      const isSelected = activeFilters.includes(filter);
      if (isSelected) {
        setActiveFilters(activeFilters.filter((f) => f !== filter));
      } else {
        setActiveFilters([...activeFilters, filter]);
      }
    }
  };
  return (
    <div className="program-filter flex justify-center items-center">
      <div className="flex gap-3 md:gap-6 bg-white rounded-full p-4 md:px-8 md:py-6 w-fit shadow-md">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(filter.value)}
            className={`px-4 py-2 rounded-full border border-primary 
              ${
                activeFilters.includes(filter.value) ||
                (filter.value === "all" && activeFilters.length === 0)
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-primary hover:text-white"
              }`}
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
