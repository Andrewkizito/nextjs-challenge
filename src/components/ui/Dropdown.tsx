"use client";

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Option {
  title: string;
  count: number;
  color: string;
}

interface DropdownProps {
  options: Option[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ options, active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeOption = useMemo(
    () => options.filter((item) => item.title.toLowerCase() === active)[0],
    [active, options]
  );

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const selectOption = (value: string) => {
    setActive(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 cursor-pointer"
      >
        <h5 className="font-semibold text-gray-700">{activeOption.title}</h5>
        <span
          className={`${activeOption.color} py-0.5 px-3 text-white rounded-full text-xs font-semibold`}
        >
          {activeOption.count}
        </span>
        <IoChevronDown
          className={`text-lg text-gray-800 duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 duration-300 z-10 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={selectOption.bind(null, option.title.toLowerCase())}
              className={`flex items-center justify-between duration-300 hover:bg-gray-100 ${
                index === options.length - 1 ? "rounded-b-md" : ""
              } ${
                activeOption.title === option.title ? "bg-gray-100" : ""
              } px-4 py-2 text-sm cursor-pointer`}
            >
              <span className="text-gray-700 font-semibold">
                {" "}
                {option.title}
              </span>
              <span
                className={`${option.color} py-0.5 px-3 text-white rounded-full text-xs font-semibold`}
              >
                {option.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export type { Option };

export default Dropdown;
