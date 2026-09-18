import sft from "../assets/prestasi/samsung-sft2025.jpeg";
import sic from "../assets/prestasi/Samsung-SIC25.jpeg";
import gestitalkMoment from "../assets/bg/gestitalkmoment.jpeg";
import gestitalkIot from "../assets/project/GistiTalkIOT.jpeg";

export const achievements = [
  {
    id: "samsung-sft",
    year: "2025",
    eyebrow: "National award",
    title: "3rd place, Samsung Solve For Tomorrow 2025",
    image: sft,
    description:
      "Designed GestiTalk with a small team and pitched it against entries from schools and universities across Indonesia.",
    gallery: [
      { src: sft, caption: "Award night, Jakarta" },
      { src: gestitalkMoment, caption: "Presenting GestiTalk to the judges" },
      { src: gestitalkIot, caption: "The device we brought" },
    ],
  },
  {
    id: "samsung-sic",
    year: "2025",
    eyebrow: "Samsung Innovation Campus, Batch 6",
    title: "Reached Stage 4",
    image: sic,
    description:
      "Selected into the later stages of Samsung Innovation Campus with the IoT build of GestiTalk.",
    gallery: [
      { src: sic, caption: "Samsung Innovation Campus" },
    ],
  },
];
