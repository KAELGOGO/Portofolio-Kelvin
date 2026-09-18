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
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  // The player state follows the audio element, so the button can never claim
  // to be playing something that is silent.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTime = () => setCurrent(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onStop = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onStop);
    audio.addEventListener("ended", onStop);
    audio.addEventListener("error", onStop);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onStop);
      audio.removeEventListener("ended", onStop);
      audio.removeEventListener("error", onStop);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  };

  const seek = (value) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  return (
    <div className="rounded-[18px] border border-hm-line bg-hm-surface p-4 shadow-float">
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

      <input
        type="range"
        min="0"
        max={duration || 0}
        step="1"
        value={current}
        aria-label="Progress"
        onChange={(event) => seek(Number(event.target.value))}
        className="mt-3 h-1 w-full cursor-pointer accent-hm-primary"
      />

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
