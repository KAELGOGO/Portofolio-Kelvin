import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import track from "../assets/cascade-breathe-future-garage-412839.mp3";

const TRACK_TITLE = "Cascade Breathe";
const TRACK_ARTIST = "NverAvetyanMusic";
const TRACK_LINK = "https://pixabay.com/music/beats-cascade-breathe-future-garage-412839/";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

/**
 * The music dock. The one element that genuinely floats above the page, so it
 * is the one element that gets a float shadow. Hidden on small screens.
 */
export default function MusicDock() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTime = () => {
      setCurrent(audio.currentTime);
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    audio.volume = volume;

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [volume]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else void audio.play();
    setPlaying(!playing);
  };

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    audio.currentTime = ((event.clientX - rect.left) / rect.width) * audio.duration;
  };

  return (
    <div className="rounded-[20px] border border-hm-line bg-hm-surface p-4 shadow-float">
      <audio ref={audioRef} src={track} preload="none" />

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-hm-primary text-hm-on-primary transition-colors hover:bg-hm-primary-hover"
        >
          {playing ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-micro font-semibold text-hm-ink">{TRACK_TITLE}</p>
          <a
            href={TRACK_LINK}
            target="_blank"
            rel="noreferrer"
            className="block truncate text-micro text-hm-muted transition-colors hover:text-hm-primary"
          >
            {TRACK_ARTIST}
          </a>
        </div>
      </div>

      <div
        role="presentation"
        onClick={seek}
        className="mt-3 h-1 w-full cursor-pointer rounded-full bg-hm-tint"
      >
        <div
          className="h-1 rounded-full bg-hm-primary transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-1 flex justify-between text-[10px] tabular-nums text-hm-muted">
        <span>{formatTime(current)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        aria-label="Volume"
        onChange={(event) => {
          const next = Number(event.target.value);
          setVolume(next);
          if (audioRef.current) audioRef.current.volume = next;
        }}
        className="mt-2 h-1 w-full cursor-pointer accent-hm-primary"
      />
    </div>
  );
}
