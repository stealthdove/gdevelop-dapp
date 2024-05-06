"use client";

import {
  ModelSelector,
  PromptBuilder,
  PromptSpark,
} from "@/components/asset-generator";
import { Button } from "@/components/ui/button";
import { SelectTitle } from "@/components/ui/select-title";
import { Slider } from "@/components/ui/slider";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { toast } from "sonner";
type Props = {
  active: String;
  setActive: React.Dispatch<React.SetStateAction<string>>
};

const Sidebar = ({ active, setActive }: Props) => {
  const [model, setModel] = React.useState(`Model name - 1`);
  const [prompt, setPrompt] = React.useState("");
  const [negativePrompt, setNegativePrompt] = React.useState("");
  const [allowedTotalImage, setAllowedTotalImage] = React.useState(2);
  const [samplingSteps, setSamplingSteps] = React.useState(30);
  const [guidance, setGuidance] = React.useState(6);
  const [selectedTokens, setSelectedTokens] = React.useState<String[]>([]);

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      prompt.length === 0 ||
      negativePrompt.length === 0 ||
      allowedTotalImage === 0 ||
      samplingSteps === 0 ||
      guidance === 0 ||
      !model
    ) {
      toast.error("Please fill all fields");
      return;
    }
    const data = {
      model,
      prompt,
      negativePrompt,
      allowedTotalImage,
      samplingSteps,
      guidance,
      selectedTokens,
    };
    console.log(data);
  };

  return (
    <section className="top-0 left-0 sticky flex flex-col gap-[30px] max-sm:hidden bg-dark-1 ml-[10px] pt-20 w-fit lg:w-[260px] h-[calc(100vh-10px)] text-white">
      <div className="flex flex-col gap-[30px] bg-black p-4 rounded-[10px] h-full overflow-y-scroll max no-scroll">
        <div className="flex bg-[#1C1B21] rounded-[10px]">
          <Button
            type="button"
            onClick={() => setActive("image")}
            className={classNames(
              {
                "bg-[#C1ef0c] hover:bg-[#C1ef0c]  text-black":
                  active === "image",
              },
              { "text-white": active !== "image" },
              "flex-1 rounded-[10px]"
            )}
          >
            Image
          </Button>
          <Button
            type="button"
            onClick={() => setActive("sound")}
            className={classNames(
              {
                "bg-[#C1ef0c] hover:bg-[#C1ef0c] text-black":
                  active === "sound",
              },
              { "text-white": active !== "sound" },
              "flex-1 rounded-[10px]"
            )}
          >
            Sound
          </Button>
        </div>
        <div className="flex flex-col gap-[14px] border-[#FFFFFF0F] pb-3 border-b">
          <SelectTitle title="Select model" />
          <ModelSelector setModel={setModel}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/res/model.png"
                  alt="model"
                  width={32}
                  height={32}
                />
                <h4 className="font-normal text-[12px] text-white">{model}</h4>
              </div>
              <FaChevronRight className="font-base text-white" />
            </div>
          </ModelSelector>
        </div>
        <form onSubmit={handleGenerate} className="flex flex-col gap-6">
          <div className="flex flex-col gap-[14px] border-[#FFFFFF0F] pb-3 border-b">
            <SelectTitle title="Prompt" />
            <div className="asset-prompt-container">
              <textarea
                className="asset-prompt-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A colossal rocky titan standing midst crumbled ruins, game environment tile, strategy game"
              />
            </div>
            <div className="flex items-center gap-1">
              <div className="flex flex-1 justify-center items-center gap-[4px] border-[#28272C] bg-transparent px-[8px] py-2 border rounded-[10px] font-semibold text-[#605F63] text-[10px]">
                <PromptBuilder setSelectedTokens={setSelectedTokens}>
                  <Image
                    src="/icons/bulb.svg"
                    alt="bulb"
                    width={13}
                    height={13}
                    className="translate-y-[-1px]"
                  />
                  Prompt builder
                </PromptBuilder>
              </div>
              <div className="flex flex-1 justify-center items-center gap-[4px] border-[#28272C] bg-transparent px-[8px] py-2 border rounded-[10px] font-semibold text-[#605F63] text-[11px]">
                <PromptSpark>
                  <Image
                    src="/icons/sparkles.svg"
                    alt="sparkles"
                    width={16}
                    height={16}
                    className="translate-y-[-1px]"
                  />
                  Prompt spark
                </PromptSpark>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="hover:bg-[#C1EF0C] prompt-submit-btn"
          >
            Generate
          </Button>
          <div className="flex flex-col gap-[14px] border-[#FFFFFF0F] pb-3 border-b">
            <SelectTitle title="Negative prompt" />
            <div className="asset-prompt-container">
              <textarea
                className="asset-prompt-input"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                style={{ height: 30, outline: "none" }}
                placeholder="No distortion, no extra limbs"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-[14px]">
          <SelectTitle title="Settings" />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Images
              </p>
              <div className="flex flex-1 items-center gap-2">
                <Slider
                  value={[allowedTotalImage]}
                  onValueChange={(item) => setAllowedTotalImage(item[0])}
                  max={10}
                  step={1}
                />
                <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                  {allowedTotalImage}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Sampling steps
              </p>
              <div className="flex flex-1 items-center gap-2">
                <Slider
                  value={[samplingSteps]}
                  onValueChange={(item) => setSamplingSteps(item[0])}
                  max={50}
                  step={1}
                />
                <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                  {samplingSteps}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Guidance
              </p>
              <div className="flex flex-1 items-center gap-2">
                <Slider
                  value={[guidance]}
                  onValueChange={(item) => setGuidance(item[0])}
                  max={20}
                  step={1}
                />
                <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                  {guidance}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Schedular
              </p>
              <p className="text-[#7A7A7D] text-[10px]">Default</p>
              {/* // todo - add dropdown */}
            </div>
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Dimensions
              </p>{" "}
              <button
                type="button"
                className="border-[#FFFFFF05] bg-[#16151B] px-6 py-[6px] border rounded-[8px] font-normal text-[#7A7A7D] text-[10px]"
              >
                1024 x1024
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex-1 font-normal text-[#7A7A7D] text-[12px]">
                Seed
              </p>
              <button
                type="button"
                className="border-[#FFFFFF05] bg-[#16151B] px-6 py-[6px] border rounded-[8px] font-normal text-[#7A7A7D] text-[10px]"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Sidebar };
