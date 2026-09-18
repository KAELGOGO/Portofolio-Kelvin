import helpmate from "../assets/bg/helpmate bimble.jpeg";
import kmbd1 from "../assets/backdrop/kmbd1.jpg";
import kmbd2 from "../assets/backdrop/kmbd2.jpg";
import kmbd3 from "../assets/backdrop/kmbd3.jpg";
import mc1 from "../assets/backdrop/mc1.jpg";
import mc2 from "../assets/backdrop/mc2.jpg";
import mc3 from "../assets/backdrop/mc3.jpg";
import mc4 from "../assets/backdrop/mc4.jpg";
import fpMoment from "../assets/bg/fp moment.jpeg";
import fl1 from "../assets/backdrop/fl-moment.jpg";
import fl2 from "../assets/backdrop/fl-moment2.jpg";
import fl3 from "../assets/backdrop/fl-moment3.jpg";
import fl4 from "../assets/backdrop/fl-moment4.jpg";
import fl5 from "../assets/backdrop/fl-moment5.jpg";
import fl6 from "../assets/backdrop/fl-moment-6.jpg";
import gestitalkMoment from "../assets/bg/gestitalkmoment.jpeg";
import sma from "../assets/LifePath/sma.jpeg";

export const journey = [
  {
    id: "helpmate",
    year: "Since 2025",
    title: "Part-time tutor",
    place: "HelpMate Bimbel",
    description:
      "Teaching maths and science to junior high students. It is where I learned to explain something three different ways until it lands.",
    image: helpmate,
    gallery: [
      { src: helpmate, caption: "Teaching session at HelpMate Bimbel" },
    ],
  },
  {
    id: "kmbd",
    year: "Since 2025",
    title: "Volunteer and master of ceremonies",
    place: "KMBD Dhammavaddhana, BINUS",
    description:
      "Hosted Bunga Rampai 2026 across four weeks, and volunteered at the events around it.",
    image: kmbd1,
    gallery: [
      { src: mc1, caption: "Hosting Bunga Rampai 2026" },
      { src: mc2, caption: "On stage" },
      { src: mc3, caption: "Between sessions" },
      { src: mc4, caption: "Backstage" },
      { src: kmbd1, caption: "Volunteering with the team" },
      { src: kmbd2, caption: "Event day" },
      { src: kmbd3, caption: "Wrapping up" },
    ],
  },
  {
    id: "freshmen-partner",
    year: "2025-2026",
    title: "Freshmen Partner B29",
    place: "Bina Nusantara University",
    description:
      "Guided a group of new students through their first year, one conversation at a time.",
    image: fpMoment,
    gallery: [
      { src: fpMoment, caption: "With the freshman group" },
    ],
  },
  {
    id: "freshmen-leader",
    year: "2025",
    title: "Freshmen Leader B29",
    place: "Bina Nusantara University",
    description:
      "Led during freshman orientation. Public speaking in front of a hall, and a much wider circle of friends after it.",
    image: fl2,
    gallery: [
      { src: fl1, caption: "Orientation week" },
      { src: fl2, caption: "Leading a session" },
      { src: fl3, caption: "With the committee" },
      { src: fl4, caption: "Group photo" },
      { src: fl5, caption: "Between events" },
      { src: fl6, caption: "Closing day" },
    ],
  },
  {
    id: "university",
    year: "Since 2024",
    title: "Computer Science",
    place: "Bina Nusantara University",
    description:
      "Studying CS, and using every competition I can find as an excuse to build something real.",
    image: gestitalkMoment,
    gallery: [
      { src: gestitalkMoment, caption: "Presenting GestiTalk" },
    ],
  },
  {
    id: "school",
    year: "2021-2024",
    title: "Vocational high school",
    place: "SMK Negeri 1 Manggar, Belitung Timur",
    description:
      "Where coding started. Algorithms, and a shot at OSN Informatika up to the provincial level.",
    image: sma,
    gallery: [
      { src: sma, caption: "School days" },
    ],
  },
];
