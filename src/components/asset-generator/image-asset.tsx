import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import classNames from "classnames";

type Props = {
  loading: boolean;
  selected: Number[];
  handleSelect: (item: Number) => void;
};

const ImageAsset = (props: Props) => {
  return (
    <div className="w-full">
      <div
        style={{
          padding: "15px",
        }}
        className="min-h-[calc(100vh-140px)]"
      >
        <article className="gap-2 grid grid-cols-5">
          {props.loading && (
            <Skeleton className="border-[2px] col-span-1 bg-[#808080b8] p-[2px] border-transparent rounded-[16px] w-full cursor-pointer" />
          )}
          {[1, 2, 3, 4, 5, 6, 7]?.map((item) => (
            <div
              key={item}
              className={classNames(
                {
                  "border-[#C1EF0C]": props.selected.includes(item),
                  "border-transparent": !props.selected.includes(item),
                },
                "border-[2px] col-span-1 rounded-[16px] group cursor-pointer relative overflow-hidden"
              )}
            >
              <div
                className="top-0 left-0 absolute opacity-0 group-hover:opacity-[1] rounded-[12px] w-full h-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(129, 129, 129, 0) 50.5%, rgba(9, 9, 9, 0.8) 100%)",
                }}
              />
              {props.selected.includes(item) ? (
                <Image
                  onClick={() => props.handleSelect(item)}
                  alt="asset"
                  src="/icons/tick-circle.svg"
                  width={20}
                  height={20}
                  className="top-2 left-2 absolute"
                />
              ) : (
                <div
                  onClick={() => props.handleSelect(item)}
                  className="top-2 left-2 absolute border-[2px] border-white bg-transparent opacity-0 group-hover:opacity-[1] rounded-full transition-all duration-100 ease-in-out size-[20px]"
                />
              )}
              <div className="bottom-2 left-4 absolute flex justify-between items-center gap-2 bg-transparent opacity-0 group-hover:opacity-[1] w-[85%]">
                <input
                  className="flex-1 border-0 bg-transparent font-normal text-[10px] text-white placeholder:text-white outline-none"
                  placeholder="Enter here.."
                />
                <Image
                  alt="edit"
                  src="/icons/edit.svg"
                  width={16}
                  height={16}
                  className="rounded-[16px]"
                />
              </div>
              <Image
                alt="asset"
                src="/res/asset.png"
                width={218}
                height={223}
              />
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export { ImageAsset };
