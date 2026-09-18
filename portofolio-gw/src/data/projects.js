import gestitalk from "../assets/project/GistiTalk.jpeg";
import gestitalkMoment from "../assets/bg/gestitalkmoment.jpeg";
import gestitalkIot from "../assets/project/GistiTalkIOT.jpeg";
import portofolio from "../assets/project/portofolio.jpeg";
import tubris from "../assets/project/Tubris.jpg";

export const projects = [
  {
    id: "gestitalk",
    title: "GestiTalk",
    category: "AI and mobile",
    year: "2025",
    description:
      "An app that reads Indonesian sign language (BISINDO) through a phone camera and turns it into text and speech. The model runs in the browser, so there is nothing to install.",
    tech: ["Python", "TensorFlow", "MediaPipe", "Vercel"],
    link: "https://gisti-talk-sft-2025.vercel.app/",
    image: gestitalk,
    gallery: [
      { src: gestitalk, caption: "GestiTalk in use" },
      { src: gestitalkMoment, caption: "Presenting at Samsung Solve For Tomorrow 2025" },
      { src: gestitalkIot, caption: "The IoT build of the same idea" },
    ],
  },
  {
    id: "tubris",
    title: "TUBRIS",
    category: "AI and healthcare",
    year: "2025",
    description:
      "Reads chest X-rays to flag likely tuberculosis early, so a doctor has a second opinion before the lab results arrive.",
    tech: ["Python", "Computer Vision", "Vercel"],
    link: "http://tubris.vercel.app/",
    image: tubris,
    gallery: [
      { src: tubris, caption: "TUBRIS" },
    ],
  },
  {
    id: "gestitalk-iot",
    title: "GestiTalk IoT",
    category: "AI and hardware",
    year: "2025",
    description:
      "The same sign-language recognition, moved off the phone and onto a small device with a camera and an Arduino in it.",
    tech: ["Python", "Arduino", "Computer Vision"],
    link: null,
    image: gestitalkIot,
    gallery: [
      { src: gestitalkIot, caption: "The device" },
      { src: gestitalkMoment, caption: "Demo day" },
    ],
  },
  {
    id: "portfolio",
    title: "This portfolio",
    category: "Web",
    year: "Since 2024",
    description:
      "The site you are reading. React and Tailwind, built from a written design system so it stays consistent as it grows.",
    tech: ["React", "Tailwind", "Vite", "Vercel"],
    link: "https://kelvin-leandi.vercel.app/",
    image: portofolio,
    gallery: [
      { src: portofolio, caption: "An earlier version of this site" },
    ],
  },
];
