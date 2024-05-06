import React from "react";
import { AudioPlayer } from "./audio-player";
type Props = {};

const AudioAsset = (props: Props) => {
  return (
    <div className="w-full">
      <div
        style={{
          padding: "15px",
        }}
        className="min-h-[calc(100vh-140px)]"
      >
        <div className="gap-3 grid grid-cols-4">
          <div className="col-span-1">
            <AudioPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};
export { AudioAsset };
