import React, { useRef, useState } from "react";

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = false;
    v.volume = 1;
    setIsMuted(false);
  };

  return (
    <div className="relative inline-block">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dm3tyavtg/video/upload/v1762407608/sf_fight_cmyx8p.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        controls
        className="w-[400px] rounded-md"
      />

      {isMuted && (
        <div
          onClick={handleUnmute}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleUnmute(); }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-semibold cursor-pointer rounded-md"
        >
          🔊 Tap to Unmute
        </div>
      )}
    </div>
  );
};

export default Video;
