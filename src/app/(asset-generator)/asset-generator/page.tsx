"use client";

import {
  BottomBar,
  ImageAsset,
  AudioAsset,
} from "@/components/asset-generator";
import { Sidebar } from "@/components/layout/asset-gen";
import React from "react";

type Props = {};

const AssetGeneratorPage = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState<Number[]>([]);
  const [active, setActive] = React.useState("image");
  const handleSelect = (item: Number) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };
  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />
      <section className="relative flex flex-col flex-1 pt-[68px] pb-6 max-md:pb-14 min-h-screen">
        {active === "image" ? (
          <ImageAsset
            loading={loading}
            selected={selected}
            handleSelect={handleSelect}
          />
        ) : (
          <AudioAsset />
        )}
        {selected.length > 0 && <BottomBar selected={selected} />}
      </section>
    </div>
  );
};

export default AssetGeneratorPage;
