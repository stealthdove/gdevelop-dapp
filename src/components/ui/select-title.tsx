import React from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  title: string;
};

const SelectTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <FaChevronDown className="text-[#7a7a7d] text-base" />
      <h2 className="font-semibold text-[#7a7a7d] text-sm">{title}</h2>
    </div>
  );
};

export { SelectTitle };
