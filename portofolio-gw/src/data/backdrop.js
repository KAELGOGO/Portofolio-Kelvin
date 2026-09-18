/**
 * The photographs behind the whole shell.
 *
 * These are the downscaled copies in assets/backdrop, not the originals. The
 * backdrop is blurred 18px, so the larger files would cost 2.3 MB for no
 * visible difference. Keep new entries at 640px wide.
 */
import flMoment from "../assets/backdrop/fl-moment.jpg";
import kmbd1 from "../assets/backdrop/kmbd1.jpg";
import helpmate from "../assets/backdrop/helpmate-bimble.jpg";
import fpMoment from "../assets/backdrop/fp-moment.jpg";
import mc1 from "../assets/backdrop/mc1.jpg";
import flMoment2 from "../assets/backdrop/fl-moment2.jpg";
import flMoment3 from "../assets/backdrop/fl-moment3.jpg";
import kmbd2 from "../assets/backdrop/kmbd2.jpg";
import mc2 from "../assets/backdrop/mc2.jpg";
import gestitalkMoment from "../assets/backdrop/gestitalkmoment.jpg";
import flMoment4 from "../assets/backdrop/fl-moment4.jpg";
import kmbd3 from "../assets/backdrop/kmbd3.jpg";
import mc3 from "../assets/backdrop/mc3.jpg";
import teman from "../assets/backdrop/teman.jpg";
import flMoment5 from "../assets/backdrop/fl-moment5.jpg";
import mc4 from "../assets/backdrop/mc4.jpg";

export const backdrop = [
  flMoment,
  kmbd1,
  helpmate,
  fpMoment,
  mc1,
  flMoment2,
  flMoment3,
  kmbd2,
  mc2,
  gestitalkMoment,
  flMoment4,
  kmbd3,
  mc3,
  teman,
  flMoment5,
  mc4,
];

export const BACKDROP_INTERVAL_MS = 5000;
export const BACKDROP_CROSSFADE_MS = 1200;
