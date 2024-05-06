import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
};
3;

const SaveAsset = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#C1EF0C] px-4 py-2 rounded-xl font-semibold text-[13px] text-black">
        {children}
      </DialogTrigger>
      <DialogContent
        hidden
        className="border-[#FFFFFF05] bg-[#1C1B21] p-4 border rounded-[24px] w-[400px]"
      >
        <DialogHeader className="flex flex-row justify-between items-center w-full">
          <DialogTitle className="font-bold text-white text-xl">
            save your asset
          </DialogTitle>
          <DialogClose asChild>
            <button className="" type="button">
              <Image
                alt="asset"
                src="/icons/cancel-circle.svg"
                width={24}
                height={24}
              />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <FaArrowUp className="text-base text-white" />
            <p className="font-medium text-[#7A7A7D] text-sm">
              Untitled-project-1 /
              <span className="text-white">untitled-pack-1 /</span>
            </p>
          </div>
          <p className="font-medium text-[#fff] text-sm">
            Choose where you want to save your file
          </p>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5]?.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-[#FFFFFF0F] hover:border-[#C1EF0C] bg-[#222126] p-2 border rounded-[8px]"
              >
                <Image
                  src="/icons/folder.svg"
                  alt="folder"
                  width={16}
                  height={16}
                />
                <p className="font-semibold text-[10px] text-white leading-[118%]">
                  Folder name goes here
                </p>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild className="flex-1">
            <button className="bg-[#28272C] px-4 py-2 rounded-[10px] font-semibold text-[13px] text-white">
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild className="flex-1">
            <button className="bg-[#C1EF0C] px-4 py-2 rounded-[10px] font-semibold text-[13px] text-black">
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { SaveAsset };
