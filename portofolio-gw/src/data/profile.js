import profilePhoto from "../assets/profile.jpeg";

export const profile = {
  name: "Kelvin Leandi",
  firstName: "Kelvin",
  photo: profilePhoto,
  // His own sentence. Do not rewrite it into a job-title summary.
  intro: "A human who learns and works to enjoy life.",
  facts: ["Indonesia", "AI & Computer Vision", "Open to internship"],
  cv: "/Kelvin-Leandi-CV.pdf",
  cvFileName: "Kelvin Leandi CV.pdf",
  email: "kelvinleandi5@gmail.com",
  socials: [
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ka_el_jee" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/kelvin-leandi-9529772a7/" },
    { id: "github", label: "GitHub", href: "https://github.com/KAELGOGO" },
  ],
};

/**
 * The three cards on the Bio tab. Each one jumps to the tab that owns the
 * detail, and opens the matching gallery when one exists.
 */
export const highlights = [
  {
    id: "gestitalk",
    eyebrow: "Live app",
    title: "GestiTalk",
    line: "Reads Indonesian sign language through a phone camera, in real time.",
    goTo: "projects",
    gallery: "gestitalk",
  },
  {
    id: "samsung",
    eyebrow: "National award",
    title: "3rd place, Samsung Solve For Tomorrow 2025",
    line: "The award that came out of GestiTalk.",
    goTo: "achievements",
    gallery: "samsung-sft",
  },
  {
    id: "tutor",
    eyebrow: "Since 2025",
    title: "Part-time tutor at HelpMate Bimbel",
    line: "Maths and science for junior high students, every week.",
    goTo: "journey",
    gallery: "helpmate",
  },
];
