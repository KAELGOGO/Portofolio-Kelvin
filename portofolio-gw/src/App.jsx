import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import AmbientBackdrop from "./components/AmbientBackdrop";
import GalleryModal from "./components/GalleryModal";
import TabRail, { TABS } from "./components/TabRail";
import AchievementsPanel from "./components/panels/AchievementsPanel";
import BioPanel from "./components/panels/BioPanel";
import JourneyPanel from "./components/panels/JourneyPanel";
import ProjectsPanel from "./components/panels/ProjectsPanel";
import SkillsPanel from "./components/panels/SkillsPanel";
import { achievements } from "./data/achievements";
import { journey } from "./data/journey";
import { projects } from "./data/projects";

const TAB_IDS = TABS.map((tab) => tab.id);
const DEFAULT_TAB = "bio";

/**
 * One lookup so a card on any tab can open any gallery by id. Projects, journey
 * steps and awards all publish the same shape.
 */
const galleries = {};
for (const project of projects) {
  galleries[project.id] = {
    eyebrow: `${project.category} · ${project.year}`,
    title: project.title,
    description: project.description,
    gallery: project.gallery,
  };
}
for (const step of journey) {
  galleries[step.id] = {
    eyebrow: `${step.year} · ${step.place}`,
    title: step.title,
    description: step.description,
    gallery: step.gallery,
  };
}
for (const award of achievements) {
  galleries[award.id] = {
    eyebrow: `${award.eyebrow} · ${award.year}`,
    title: award.title,
    description: award.description,
    gallery: award.gallery,
  };
}

function tabFromHash() {
  const id = window.location.hash.replace("#", "");
  return TAB_IDS.includes(id) ? id : DEFAULT_TAB;
}

export default function App() {
  const [tab, setTab] = useState(() => tabFromHash());
  const [openGalleryId, setOpenGalleryId] = useState(null);

  // The hash is the single source of truth, so #achievements can be linked.
  useEffect(() => {
    if (window.location.hash.replace("#", "") !== tabFromHash()) {
      window.history.replaceState(null, "", `#${tabFromHash()}`);
    }

    const onHashChange = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goToTab = useCallback((id) => {
    if (!TAB_IDS.includes(id)) return;
    if (window.location.hash.replace("#", "") === id) setTab(id);
    else window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openGallery = useCallback((id) => {
    if (galleries[id]) setOpenGalleryId(id);
  }, []);

  const closeGallery = useCallback(() => setOpenGalleryId(null), []);

  const panelProps = { onOpenGallery: openGallery, onGoToTab: goToTab };

  let panel = null;
  if (tab === "bio") panel = <BioPanel {...panelProps} />;
  else if (tab === "journey") panel = <JourneyPanel {...panelProps} />;
  else if (tab === "projects") panel = <ProjectsPanel {...panelProps} />;
  else if (tab === "skills") panel = <SkillsPanel {...panelProps} />;
  else if (tab === "achievements") panel = <AchievementsPanel {...panelProps} />;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-hm-canvas lg:p-5">
        <AmbientBackdrop />

        {/* The shell. Opaque on purpose: the backdrop must never sit under text. */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden bg-hm-canvas lg:h-[calc(100vh-2.5rem)] lg:min-h-0 lg:flex-row lg:rounded-[24px] lg:border lg:border-hm-line lg:shadow-lift">
          <TabRail active={tab} onChange={goToTab} />

          <main className="relative flex-1 overflow-hidden pt-14 lg:pt-0">
            <div className="hm-scroll h-full overflow-y-auto px-5 py-8 pb-28 sm:px-8 lg:px-14 lg:py-14 lg:pb-14">
              <div className="mx-auto w-full max-w-[1080px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {panel}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </main>
        </div>

        <GalleryModal
          item={openGalleryId ? galleries[openGalleryId] : null}
          onClose={closeGallery}
        />
      </div>
    </MotionConfig>
  );
}
