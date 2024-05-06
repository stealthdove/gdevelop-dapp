"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaRegSave, FaStar } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEdit(false);
  };
  return (
    <nav className="top-0 z-50 fixed bg-[#28272C] p-[10px] w-full">
      <div className="flex justify-between items-center bg-black px-4 lg:px-6 py-4 rounded-[10px] w-full">
        <FaArrowLeft className="text-white" />
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            className="border-0 bg-transparent w-[120px] text-white outline-none"
            placeholder="Untitled Asset-1"
            disabled={!edit}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {edit ? (
            <button type="button" className="" onClick={() => setEdit(false)}>
              <FaRegSave className="text-[#454449] text-lg" />
            </button>
          ) : (
            <button type="submit" className="" onClick={() => setEdit(true)}>
              <CiEdit className="text-[#454449] text-lg" />
            </button>
          )}
        </form>
        <div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#C1EF0C] text-lg -translate-y-[1.5px]" />
            <h1 className="text-[#7A7A7D] text-[15px]">12583</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
