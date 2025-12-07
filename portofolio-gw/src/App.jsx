import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code,
  Trophy,
  MapPin,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  History,
  BookOpen,
  Instagram,
  Linkedin,
  Github,
  Play,
  Pause,
  Volume2,
  Music,
  Zap,
  FolderGit2, // Icon untuk Menu Project
  ExternalLink, // Icon untuk link project
} from "lucide-react";

import fotoProfil from "./assets/profile.jpeg";
import bg1 from "./assets/bg/teman.jpeg";
import bg2 from "./assets/bg/helpmate bimble.jpeg";
import bg3 from "./assets/bg/gestitalkmoment.jpeg";
import bg4 from "./assets/bg/fp moment.jpeg";
import bg5 from "./assets/bg/fl moment2.jpeg";
import bg6 from "./assets/bg/fl moment3.jpeg";
import bg7 from "./assets/bg/fl moment4.jpeg";
import bg8 from "./assets/bg/fl moment5.jpeg";
import bg9 from "./assets/bg/fl moment 6.jpeg";
import bg10 from "./assets/bg/fl moment7.jpeg";
import bg11 from "./assets/bg/fl moment8.jpeg";
import bg12 from "./assets/bg/fl moment9.jpeg";

import prestasi1 from "./assets/prestasi/samsung-sft2025.jpeg";
import prestasi2 from "./assets/prestasi/Samsung-SIC25.jpeg";

import imgWork1 from "./assets/LifePath/helpmate bimble.jpeg";
import imgUnivPeng1 from "./assets/LifePath/fl moment2.jpeg";
import imgUnivPeng2 from "./assets/LifePath/fp moment.jpeg";
import imgUniv from "./assets/LifePath/gestitalkmoment.jpeg";
import imgSma from "./assets/LifePath/sma.jpeg";

import laguSaya from "./assets/cascade-breathe-future-garage-412839.mp3";

import project1 from "./assets/project/GistiTalk.jpeg";
import project2 from "./assets/project/portofolio.jpeg";
import project3 from "./assets/project/Tubris.jpg";
import project4 from "./assets/project/GistiTalkIOT.jpeg";

const bgImages = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
];

// --- DATA SKILLS  ---
const skillsData = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  // --- TAMBAHAN BARU ---
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Arduino",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  // ---------------------
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

// --- DATA PROJECT  ---
const projectData = [
  {
    id: 1,
    title: "GestiTalk App",
    category: "AI & Mobile Dev",
    image: project1,
    desc: "Aplikasi penerjemah bahasa isyarat berbasis AI untuk membantu komunikasi teman Tuli.",
    tech: ["Python", "HTML,CSS,JS", "Git-Hub,Vercel", "HuggingFace"],
    link: "https://gisti-talk-sft-2025.vercel.app/",
  },
  {
    id: 2,
    title: "Portofolio",
    category: "Web Development",
    image: project2,
    desc: "Website portofolio pribadi",
    tech: ["React JS", "Tailwind", "Git-Hub,Vercel"],
    link: "https://kelvin-leandi.vercel.app/",
  },
  {
    id: 3,
    title: "TUBRIS",
    category: "AI & Mobile Dev",
    image: project3,
    desc: "Aplikasi pendeteksi penyakit TBC berbasis AI dengan foto X-RAY untuk membantu dokter mendiagnosis awal.",
    tech: ["Python", "HTML,CSS,JS", "Git-Hub,Vercel", "HuggingFace"],
    link: "http://tubris.vercel.app/",
  },
  {
    id: 4,
    title: "GistiTalk IOT",
    category: "AI & IOT",
    image: project4,
    desc: "Device penerjemah alfabet bahasa isyarat berbasis AI yang diintegrasikan dengan IOT.",
    tech: ["Python", "Arduino"],
    link: "#",
  },
];

// --- DATA LIFE PATH ---
const lifePathData = [
  {
    year: "2025 - Sekarang",
    title: "Partime Tutor",
    place: "HelpMate Bimble",
    desc: "Menjadi tutor MTK,IPA untuk anak SMP membantu mengembangkan soft-skill dan empati.",
    icon: <Briefcase size={20} />,
    color: "bg-blue-100 text-blue-600",
    image: imgWork1,
  },
  {
    year: "2025-2026",
    title: "Freshmen Partner B29",
    place: "Universitas Bina Nusantara",
    desc: "Mengasah empati dan kemampuan komunikasi interpersonal secara mendalam melalui pengalaman membimbing mahasiswa baru selama satu tahun penuh.",
    icon: <Briefcase size={20} />,
    color: "bg-blue-100 text-blue-600",
    image: imgUnivPeng2,
  },
  {
    year: "2025",
    title: "Freshmen Leader B29",
    place: "Universitas Bina Nusantara",
    desc: "Menumbuhkan kepercayaan diri dan skill public speaking dengan berpartisipasi pada masa orientasi mahasiswa baru serta memperluas jaringan relasi kampus.",
    icon: <Briefcase size={20} />,
    color: "bg-blue-100 text-blue-600",
    image: imgUnivPeng1,
  },
  {
    year: "2024 - Sekarang",
    title: "Kuliah",
    place: "Universitas Bina Nusantara",
    desc: "Mengambil jurusan Computer Science untuk mendalami bidang IT dan berhasil memenangkan beberapa lomba.",
    icon: <GraduationCap size={20} />,
    color: "bg-blue-100 text-blue-600",
    image: imgUniv,
  },
  {
    year: "2021 - 2024",
    title: "SMA",
    place: "SMA Negeri 1 Manggar, Belitung Timur",
    desc: "Mulai mengenal coding dan algoritma dasar dari OSN Informatika hingga tingkat provinsi.",
    icon: <BookOpen size={20} />,
    color: "bg-purple-100 text-purple-600",
    image: imgSma,
  },
];

const achievementData = [
  {
    id: 1,
    title: "Juara 3 Samsung Solve For Tomorrow 2025",
    event: "Samsung Solve For Tomorrow 2025",
    desc: "Mengembangkan inovasi 'GestiTalk', aplikasi penerjemah bahasa isyarat berbasis AI.",
    image: prestasi1,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Peserta Stage 4 Samsung Innovation Campus Batch 6",
    event: "Samsung Innovation Campus Batch 6",
    desc: "Mengembangkan inovasi 'GestiTalk', alat penerjemah alfabet bahasa isyarat berbasis AI diintegrasikan dengan IOT.",
    image: prestasi2,
    color: "bg-blue-100 text-blue-700",
  },
];

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

// --- KOMPONEN MUSIC PLAYER ---
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [volume, setVolume] = useState(0.8);

  const audioRef = useRef(null);

  const audioSrc = laguSaya;

  const trackLink =
    "https://pixabay.com/music/beats-cascade-breathe-future-garage-412839/";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const curr = audio.currentTime;
      const dur = audio.duration;
      if (dur) {
        setProgress((curr / dur) * 100);

        const formatTime = (time) => {
          const min = Math.floor(time / 60);
          const sec = Math.floor(time % 60);
          return `${min}:${sec < 10 ? "0" + sec : sec}`;
        };

        setCurrentTime(formatTime(curr));
        setDuration(formatTime(dur));
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    audio.volume = volume;

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newTime = percentage * audio.duration;
    audio.currentTime = newTime;
  };

  return (
    <div className="w-full max-w-[280px] mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg text-gray-800 relative z-20">
      <audio ref={audioRef} src={audioSrc} />

      <style>{`
        .bar {
          width: 3px;
          background: linear-gradient(to top, #3b82f6, #8b5cf6);
          border-radius: 9999px;
          animation: equalizer 1s ease-in-out infinite;
        }
        .paused .bar {
          animation-play-state: paused;
          height: 3px !important;
          transition: height 0.3s ease;
        }
        @keyframes equalizer {
          0%, 100% { height: 6px; }
          50% { height: 100%; }
        }
        .bar:nth-child(1) { animation-duration: 0.8s; height: 10px; }
        .bar:nth-child(2) { animation-duration: 1.1s; height: 16px; }
        .bar:nth-child(3) { animation-duration: 0.9s; height: 12px; }
        .bar:nth-child(4) { animation-duration: 1.3s; height: 20px; }
        .bar:nth-child(5) { animation-duration: 0.7s; height: 10px; }
      `}</style>

      {/* Header Info */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <Music size={14} className="text-white" />
          </div>
          <div className="text-left overflow-hidden">
            <h3 className="text-xs font-bold leading-tight truncate w-32">
              Cascade Breathe (Future Garage)
            </h3>
            <p className="text-[10px] text-gray-500">NverAvetyanMusic</p>
          </div>
        </div>

        {/* Visualizer */}
        <div
          className={`flex items-end gap-0.5 h-6 ${isPlaying ? "" : "paused"}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="w-full bg-gray-200 rounded-full h-1 mb-1 cursor-pointer group relative"
        onClick={handleSeek}
      >
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full group-hover:h-1.5 transition-all duration-300 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
        </div>
      </div>

      {/* Time */}
      <div className="flex justify-between text-[9px] text-gray-500 font-mono mb-2">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-1">
        {/* Volume */}
        <div className="flex items-center gap-1 w-1/3 group">
          <Volume2 size={12} className="text-gray-500" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-12 h-1 accent-blue-600 bg-gray-200 rounded-lg appearance-none cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Play Button */}
        <div className="w-1/3 flex justify-center">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition shadow-md hover:bg-blue-700"
          >
            {isPlaying ? (
              <Pause size={14} fill="currentColor" />
            ) : (
              <Play size={14} fill="currentColor" className="ml-0.5" />
            )}
          </button>
        </div>

        {/* Link Button (ke Halaman Pixabay/Spotify) */}
        <div className="w-1/3 flex justify-end">
          <a
            href={trackLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-green-600 transition transform hover:scale-110"
            title="Listen on Pixabay"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN TIMELINE LIFE PATH ---
const LifePathTimeline = () => {
  return (
    <div className="h-full w-full overflow-y-auto pr-2 custom-scrollbar relative">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 pt-2">
        Perjalanan
      </h2>

      <div className="relative border-l-2 border-gray-300 ml-3 md:ml-4 space-y-8 pb-10">
        {lifePathData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-8 ml-6 relative group"
          >
            <span
              className={`absolute -left-[33px] md:-left-[37px] flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-white ${item.color} z-10`}
            >
              {item.icon}
            </span>
            <div className="p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl shadow-sm hover:bg-white hover:shadow-md transition-all flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="mb-1 text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {item.place}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- KOMPONEN PROJECT ---
const ProjectsContent = () => {
  return (
    <div className="h-full w-full overflow-y-auto pr-2 custom-scrollbar pb-24 md:pb-0">
      {/* --- BAGIAN INI YANG DIPERBAIKI --- */}
      {/* Disamakan dengan LifePath: Hapus 'sticky', 'bg-white', ubah text size jadi fix 'text-3xl' */}
      <h2 className="text-3xl font-bold mb-8 text-gray-900 pt-2">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* ... (Isi card tetap sama) ... */}
            <div className="h-40 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <span className="text-white text-xs font-bold bg-blue-600/80 px-2 py-1 rounded-md backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- KOMPONEN CAROUSEL PRESTASI ---
const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % achievementData.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + achievementData.length) % achievementData.length
    );

  return (
    <div className="h-full flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-0 md:px-2">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 drop-shadow-sm">
        Jejak Langkah
      </h2>
      <div className="relative w-full h-[380px] md:h-[420px] group">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all hover:scale-125 drop-shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft size={40} strokeWidth={2.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all hover:scale-125 drop-shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight size={40} strokeWidth={2.5} />
        </button>
        <div className="w-full h-full relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={achievementData[currentIndex].image}
                  alt={achievementData[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 h-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full pt-20 pb-6 px-6 md:px-8 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        achievementData[currentIndex].color.split(" ")[0]
                      } animate-pulse`}
                    ></span>
                    <span className="text-xs font-bold text-white/90 tracking-widest uppercase drop-shadow-sm">
                      {achievementData[currentIndex].event}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight drop-shadow-md">
                    {achievementData[currentIndex].title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                    {achievementData[currentIndex].desc}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 shadow-sm">
                {currentIndex + 1} / {achievementData.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        {achievementData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-blue-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- KOMPONEN KONTEN BIOGRAFI BARU (DENGAN TYPEWRITER & DOWNLOAD CV) ---
const BioContent = () => {
  const [greeting, setGreeting] = useState("Halo");
  const typedName = useTypewriter(" Kelvin L.", 150);
  const typedDesc = useTypewriter(
    " Seorang manusia yang belajar dan bekerja untuk menikmati hidup.",
    50
  );

  // Logic Ucapan Waktu
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi");
    else if (hour < 15) setGreeting("Selamat Siang");
    else if (hour < 18) setGreeting("Selamat Sore");
    else setGreeting("Selamat Malam");
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 h-full overflow-y-auto md:overflow-visible p-2">
      {/* Kolom Kiri: Foto Profil & Music Player */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="relative group">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-[5px] border-white/50 shadow-2xl relative z-10">
            <img
              src={fotoProfil}
              alt="Kelvin Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute top-4 -right-2 w-full h-full bg-blue-500 rounded-full -z-0 opacity-20 blur-md group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
        </div>

        {/* PLAYER MUSIK */}
        <MusicPlayer />
      </div>

      {/* Kolom Kanan: Teks */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
          {greeting}, Saya <br />
          <span className="text-blue-700 min-h-[60px] inline-block">
            {typedName}
            <span className="animate-ping ml-1">|</span>
          </span>
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base font-medium min-h-[48px]">
          {typedDesc}
        </p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white/50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <MapPin size={14} /> Indonesia
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-100/80 px-4 py-2 rounded-full border border-blue-200 animate-pulse shadow-sm">
            <GraduationCap size={14} /> Sedang belajar
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-green-800 bg-green-100/80 px-4 py-2 rounded-full border border-green-200 animate-pulse shadow-sm">
            <Briefcase size={14} /> Open for Work
          </div>
        </div>

        {/* --- TOMBOL DOWNLOAD CV (BARU) --- */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/Kelvin-Leandi-CV.pdf"
            download="Kelvin Leandi CV.pdf"
            className="group relative px-6 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all active:scale-95 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download CV <Briefcase size={18} />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/20"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    id: "bio",
    label: "Bio",
    icon: <User size={20} />,
    content: <BioContent />,
  },
  {
    id: "path",
    label: "Journey",
    icon: <History size={20} />,
    content: <LifePathTimeline />,
  },
  {
    id: "projects",
    label: "Project",
    icon: <FolderGit2 size={20} />,
    content: <ProjectsContent />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Code size={20} />,
    content: (
      <div className="h-full flex flex-col justify-center max-w-3xl mx-auto pb-24 md:pb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 text-center">
          Tech Stack
        </h2>
        <p className="text-gray-600 mb-8 text-sm text-center">
          Alat tempur yang saya gunakan sehari-hari.
        </p>

        {/* --- GRID LOGO SKILLS --- */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 mb-2 drop-shadow-sm group-hover:drop-shadow-md transition-all"
              />
              <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-blue-600">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "achievements",
    label: "Prestasi",
    icon: <Trophy size={20} />,
    content: <AchievementsCarousel />,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // CONTAINER UTAMA
    <div className="relative min-h-screen md:h-screen flex items-start md:items-center justify-center font-sans text-gray-800 p-0 md:p-4 overflow-hidden bg-gray-900">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="popLayout">
          {bgImages.length > 0 && (
            <motion.img
              key={bgIndex}
              src={bgImages[bgIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover blur-md brightness-[0.4]"
            />
          )}
        </AnimatePresence>
      </div>

      {/* CARD UTAMA */}
      <div className="relative z-10 w-full min-h-screen md:min-h-0 md:h-[600px] md:w-[950px] bg-white/90 md:bg-white/85 backdrop-blur-xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border-none md:border border-white/20">
        {/* --- DESKTOP SIDEBAR (Hidden on Mobile) --- */}
        <nav className="hidden md:flex w-72 bg-white/40 border-r border-gray-200/50 flex-col justify-between p-8 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="font-black text-2xl tracking-tighter text-gray-900">
              KELVIN.
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? "bg-black/90 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-white/60 hover:text-black"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-bold text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href="https://www.instagram.com/ka_el_jee"
              target="_blank"
              className="p-2 rounded-full bg-white/50 hover:bg-white hover:text-pink-600 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-leandi-9529772a7/"
              target="_blank"
              className="p-2 rounded-full bg-white/50 hover:bg-white hover:text-blue-700 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/KAELGOGO"
              target="_blank"
              className="p-2 rounded-full bg-white/50 hover:bg-white hover:text-black transition"
            >
              <Github size={18} />
            </a>
          </div>
        </nav>

        {/* --- MOBILE TOP HEADER (FIXED di ATAS) --- */}
        <div className="md:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-30 px-6 py-4 flex justify-between items-center border-b border-gray-200/50 shadow-sm">
          <div className="font-black text-xl tracking-tighter text-gray-900 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div> KELVIN.
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/ka_el_jee"
              target="_blank"
              className="text-gray-500 hover:text-pink-600 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-leandi-9529772a7/"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/KAELGOGO"
              target="_blank"
              className="text-gray-500 hover:text-black transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        {/* Padding atas 24 (96px) biar gak ketutup Header, Padding bawah 24 (96px) biar gak ketutup Navigasi */}
        <main className="flex-1 relative bg-transparent p-6 pt-24 pb-24 md:p-12 md:pt-12 md:pb-12 overflow-hidden flex flex-col h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {activeContent.content}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* --- MOBILE BOTTOM NAVIGATION (FIXED di BAWAH) --- */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 flex justify-around items-center py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 w-full ${
                activeTab === tab.id
                  ? "text-blue-600 scale-105 font-bold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.icon}
              <span className="text-[10px] mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
