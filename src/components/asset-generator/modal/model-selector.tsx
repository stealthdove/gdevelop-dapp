import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
  setModel: (model: string) => void;
};

const ModelSelector = ({ children, setModel }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent
        hidden
        className="border-[#FFFFFF05] bg-[#1C1B21] p-4 border rounded-[10px] w-fit"
      >
        <div className="flex items-center gap-1 bg-[#16151B] px-[4px] py-[6px] rounded-[8px]">
          <Image alt="asset" src="/icons/search.svg" width={24} height={24} />
          <input
            placeholder="Search"
            className="border-0 bg-transparent font-normal text-[10px] placeholder:text-[#7A7A7D] placeholder:text-[10px] outline-none"
            type="text"
          />
        </div>
        <div className="gap-2 grid grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => (
            <DialogClose
              asChild
              key={item}
              onClick={() => setModel(`Model name - ${item}`)}
            >
              <div className="flex flex-col items-center gap-1 col-span-1">
                <Image
                  alt="asset"
                  src="/res/asset.png"
                  width={107}
                  height={130}
                  className="border-2 hover:border-[#C1EF0C] border-transparent rounded-[10px] hover:cursor-pointer"
                />
                <p className="max-w-[107px] font-normal text-[12px] text-center text-ellipsis text-nowrap text-white leading-[118%] overflow-hidden">
                  Model name - {item}
                </p>
              </div>
            </DialogClose>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ModelSelector };
