import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { promptAdditionalTokens, promptDescriptionTokens } from "@/constants";
import { DialogTitle } from "@radix-ui/react-dialog";
import classNames from "classnames";
import Image from "next/image";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  setSelectedTokens: (tokens: String[]) => void;
};

const PromptBuilder = ({ children, setSelectedTokens }: Props) => {
  const formattedAdditonalTokens = promptAdditionalTokens.map((item) => {
    return {
      name: item,
      type: "additional",
      isSelected: false,
    };
  });
  const formattedDescriptionTokens = promptDescriptionTokens.map((item) => {
    return {
      name: item,
      type: "description",
      isSelected: false,
    };
  });
  const [additionalTokens, setAdditionalTokens] = React.useState(
    formattedAdditonalTokens
  );
  const [descriptionTokens, setDescriptionTokens] = React.useState(
    formattedDescriptionTokens
  );

  const selectedTokens = useMemo(() => {
    const selectedAdditionals = additionalTokens
      .filter((item) => item.isSelected)
      .map((item) => {
        return {
          name: item.name,
          type: item.type,
        };
      });
    const selectedDescriptions = descriptionTokens
      .filter((item) => item.isSelected)
      .map((item) => {
        return {
          name: item.name,
          type: item.type,
        };
      });
    const finalTokens = [...selectedAdditionals, ...selectedDescriptions];
    return finalTokens;
  }, [additionalTokens, descriptionTokens]);

  const handleSelectToken = (token: string, type: string) => {
    if (type === "additional") {
      const updatedTokens = additionalTokens.map((item) => {
        if (item.name === token) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      });
      setAdditionalTokens(updatedTokens);
    } else {
      const updatedTokens = descriptionTokens.map((item) => {
        if (item.name === token) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      });
      setDescriptionTokens(updatedTokens);
    }
    const totalSelected = selectedTokens.map((item) => item.name);
    setSelectedTokens(totalSelected);
  };

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center gap-[2px]">
        {children}
      </DialogTrigger>
      <DialogContent
        hidden
        className="border-[#FFFFFF05] bg-[#1C1B21] p-[14px] border rounded-[24px] w-[360px]"
      >
        <DialogHeader className="flex flex-row justify-between items-center w-full">
          <DialogTitle className="font-bold text-white text-xl">
            Prompt builder
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
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-wrap items-start gap-2 border-[#FFFFFF05] bg-[#16151B] p-2 border rounded-[10px] w-full min-h-[60px] max-h-[120px] overflow-y-scroll no-scroll">
            {selectedTokens.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelectToken(item.name, item.type)}
                className="flex items-center gap-[3px] border-[#ffffff05] bg-[#1F1E23] px-2 py-[6px] border rounded-[8px]"
              >
                <p className="text-[10px] text-white">{item.name}</p>
                <button type="button">
                  <Image
                    alt="asset"
                    src="/icons/cancel-circle.svg"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            ))}
          </div>
          <h3 className="font-medium text-sm text-white leading-[118%]">
            Enhance your prompts with additional tokens from these categories:
          </h3>
          <div className="flex flex-wrap items-start gap-2 border-[#FFFFFF05] bg-[#16151B] p-2 border rounded-[10px] w-full">
            {additionalTokens.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelectToken(item.name, "additional")}
                className={classNames(
                  {
                    "border-[#C1EF0C] text-[#C1EF0C]": item.isSelected,
                    "border-[#ffffff05] text-white": !item.isSelected,
                  },
                  "flex items-center gap-[3px]  bg-[#1F1E23] px-2 py-[6px] border rounded-[8px] cursor-pointer"
                )}
              >
                <p className="text-[10px]">{item.name}</p>
              </div>
            ))}
          </div>
          <h3 className="font-medium text-sm text-white leading-[118%]">
            Choose a descriptor to add to your prompt
          </h3>
          <div className="flex flex-wrap items-start gap-2 border-[#FFFFFF05] bg-[#16151B] p-2 border rounded-[10px] w-full">
            {descriptionTokens.map((item) => (
              <div
                key={item.name}
                onClick={() => handleSelectToken(item.name, "description")}
                className={classNames(
                  {
                    "border-[#C1EF0C] text-[#C1EF0C]": item.isSelected,
                    "border-[#ffffff05] text-white": !item.isSelected,
                  },
                  "flex items-center gap-[3px]  bg-[#1F1E23] px-2 py-[6px] border rounded-[8px] cursor-pointer"
                )}
              >
                <p className="text-[10px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { PromptBuilder };
