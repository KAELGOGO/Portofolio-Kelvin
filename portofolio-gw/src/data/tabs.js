import { Code, FolderGit2, Github, History, Instagram, Linkedin, Trophy, User } from "lucide-react";

/**
 * The five tabs and the social icons. Kept out of TabRail because a component
 * file may only export components, or fast refresh gets confused.
 */
export const TABS = [
  { id: "bio", label: "Bio", Icon: User },
  { id: "journey", label: "Journey", Icon: History },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "skills", label: "Skills", Icon: Code },
  { id: "achievements", label: "Achievements", Icon: Trophy },
];

export const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};
