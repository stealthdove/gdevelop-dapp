"use client";

import Link from "next/link";
import GetStartedHeader from "./get-started";
import classNames from "classnames";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {};

const sideLinks = [
  {
    link: "/",
    text: "Home",
    icon: "/icons/home.svg",
  },
  {
    link: "/my-games",
    text: "My Games",
    icon: "/icons/games.svg",
  },
  {
    link: "/console",
    text: "Console",
    icon: "/icons/console.svg",
  },
  {
    link: "/marketplace",
    text: "Marketplace",
    icon: "/icons/marketplace.svg",
  },
  {
    link: "/tutorials",
    text: "Tutorials",
    icon: "/icons/tutorials.svg",
  },
  {
    link: "/play",
    text: "Play",
    icon: "/icons/play.svg",
  },
  {
    link: "/credits",
    text: "Credits",
    icon: "/icons/credits.svg",
  }
];

export const Sidebar = (props: Props) => {
  const pathName = usePathname();
  const path = pathName.split("/")[1];
  return (
    <section className="top-0 left-0 sticky flex flex-col justify-between gap-[30px] max-sm:hidden bg-dark-1 p-6 pt-28 w-fit lg:w-[250px] h-screen text-white">
      <div className="flex flex-col gap-6 border-[#FFFFFF0F] pb-[30px] border-b h-fit">
        <GetStartedHeader />
      </div>
      <div className="flex flex-col flex-1">
        {sideLinks.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={classNames(
              {
                "bg-[#C1EF0C]": path === item.link.substring(1),
                "text-black": path === item.link.substring(1),
              },
              "flex items-center gap-[10px] px-4 py-2 rounded-[10px] cursor-pointer"
            )}
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={14}
              height={14}
              style={
                path === item.link.substring(1)
                  ? { filter: "brightness(0.1)" }
                  : {}
              }
            />
            <p className="font-semibold text-[13px] leading-[e118%]">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
