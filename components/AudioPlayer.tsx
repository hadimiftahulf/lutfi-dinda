// components/AudioPlayer.js
import React, { useState, useEffect } from "react";

const AudioPlayer = ({ src }: { src: any }) => {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.volume = 0.5; // You can set the volume as needed

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const playPauseHandler = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div>
      <button onClick={playPauseHandler}>
        {audio.paused ? "Play" : "Pause"}
      </button>
    </div>
  );
};

export default AudioPlayer;
