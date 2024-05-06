import Image from "next/image";
import { normalize } from "path";
import React, { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

type Props = {};

const formWaveSurferOptions = (ref: any) => ({
  container: "#waveform",
  waveColor: "#454449",
  progressColor: "#FFFFFF",
  url: "/audio/test.mp3",
  normalize: true,
  //   backend: "WebAudio",
  barWidth: 3,
  barGap: 3,
  height: 83,
});

const AudioPlayer = (props: Props) => {
  const waveformRef = React.useRef(null);
  const wavesurfer = React.useRef<WaveSurfer | null>(null);
  const [playing, setPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  useEffect(() => {
    if (!wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create(
        formWaveSurferOptions(waveformRef)
      );
    }
    wavesurfer.current.load("/audio/test.mp3");
    wavesurfer.current.setVolume(volume);
    wavesurfer.current.on("audioprocess", () => {
      console.log(wavesurfer.current?.getCurrentTime());
    });
    return () => {
      setVolume(wavesurfer.current?.getVolume() || 0.5);
    };
  }, []);

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current?.playPause();
  };
  const handleVolumeChange = (value: number) => {
    setVolume(value);
    wavesurfer.current?.setVolume(value);
  };
  return (
    <div className="bg-[#1F1E23] p-4 rounded-[16px]">
      <div id="waveform" ref={waveformRef}></div>
      <div className="flex items-center gap-1 mt-2">
        {!playing ? (
          <Image
            onClick={handlePlayPause}
            alt="play"
            src="/icons/play-audio.svg"
            width={24}
            height={24}
          />
        ) : (
          <Image
            alt="play"
            onClick={handlePlayPause}
            src="/icons/pause.svg"
            width={24}
            height={24}
          />
        )}
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          className="flex-1"
          onChange={(e) => {
            handleVolumeChange(parseFloat(e.target.value));
            // wavesurfer.current?.setVolume(parseFloat(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export { AudioPlayer };
