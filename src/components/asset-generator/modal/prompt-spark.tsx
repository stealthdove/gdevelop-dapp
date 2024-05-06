import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};
3;

const PromptSpark = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center gap-[4px]">
        {children}
      </DialogTrigger>
      <DialogContent
        hidden
        className="border-[#FFFFFF05] bg-[#1C1B21] p-4 border rounded-[24px] w-[440px]"
      >
        <DialogHeader className="flex flex-row justify-between items-center px-2 w-full">
          <DialogTitle className="font-bold text-white text-xl">
            Prompt spark
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
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5]?.map((item) => (
            <div
              key={item}
              className="border-[#FFFFFF05] bg-[#1F1E23] px-2 py-[10px] border rounded-[8px]"
            >
              <p className="font-normal text-white text-xs">
                Amid dense jungle, ancient ruins hint at a lost civilization's
                past glory on a secluded island.
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { PromptSpark };
