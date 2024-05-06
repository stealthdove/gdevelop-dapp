import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SaveAsset } from "./modal/save-asset";

type Props = {
  selected: Number[];
};

const BottomBar = ({ selected }: Props) => {
  return (
    <div className="bottom-[10px] fixed w-[90%]">
      <div className="px-[16px] w-[calc(90%+3px)]">
        <div className="flex justify-between items-center bg-[black] px-5 py-4 rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[4px]">
              <Image
                alt="tick-circle"
                src="/icons/tick-circle.svg"
                width={20}
                height={20}
              />
              <p className="font-semibold text-[13px] text-white leading-[118%]">
                {selected.length} Selected
              </p>
            </div>
            <button className="border-[#AFAFB1] px-4 py-[6px] border rounded-[8px] font-semibold text-[#AFAFB1] text-[13px] leading-[118%]">
              Select All
            </button>
            <button className="border-[#AFAFB1] px-4 py-[6px] border rounded-[8px] font-semibold text-[#AFAFB1] text-[13px] leading-[118%]">
              Clear
            </button>
            <div className="border-white border w-[1px] h-[20px]" />
            <button className="flex justify-center items-center gap-[3px] border-[#AFAFB1] px-4 py-[6px] border rounded-[8px] font-semibold text-[#AFAFB1] text-[13px] leading-[118%]">
              <Image
                alt="upscale"
                src="/icons/upscale.svg"
                width={20}
                height={20}
              />
              Upscale 2x
            </button>
            <button className="flex justify-center items-center gap-[3px] border-[#AFAFB1] px-4 py-[6px] border rounded-[8px] font-semibold text-[#AFAFB1] text-[13px] leading-[118%]">
              <Image
                alt="remove bg"
                src="/icons/remove-bg.svg"
                width={20}
                height={20}
              />
              Remove BG
            </button>
          </div>
          <div className="flex items-center gap-[8px]">
            <button type="button">
              <Image
                alt="delete"
                src="/icons/delete.svg"
                width={32}
                height={32}
              />
            </button>
            <button type="button">
              <Image
                alt="download"
                src="/icons/download.svg"
                width={32}
                height={32}
              />
            </button>
            <SaveAsset>Save</SaveAsset>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BottomBar };
