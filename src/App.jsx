
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import AnimatedBackground from "../Componenets/AnimatedBackground";
import Welcome from "../Portfolio pages/Welcome";
import About from "../Portfolio pages/About";
import Skills from "../Portfolio pages/Skills";
import ExperienceCard from "../Portfolio pages/ExperienceCard";
import Projects from "../Portfolio pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // 5 pages:
  // 0 = Welcome
  // 1 = About
  // 2 = Skills
  // 3 = Experience
  // 4 = Projects

  const totalPages = 5;


  useEffect(() => {
    const handleKeyDown = (event) => {

      // ==========================================
      // ARROW UP
      // ==========================================

      if (event.key === "ArrowUp") {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
        return;
      }


      // ==========================================
      // ARROW DOWN
      // ==========================================

      if (event.key === "ArrowDown") {
        setCurrentPage((prev) =>
          Math.min(prev + 1, totalPages - 1)
        );
        return;
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  // ==========================================
  // CLICK → NEXT PAGE
  // ==========================================

  const handleClick = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages - 1)
    );
  };


  return (
    <main
      onClick={handleClick}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#050505]
      "
    >

      {/* ==========================================
          ANIMATED BACKGROUND
      ========================================== */}

      <AnimatedBackground />


      {/* ==========================================
          PAGE 01 — WELCOME
      ========================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-10
        "

        animate={{
          y: `${currentPage * -100}%`,
        }}

        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <Welcome />
      </motion.div>


      {/* ==========================================
          PAGE 02 — ABOUT
      ========================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-20
        "

        animate={{
          y: `${(1 - currentPage) * 100}%`,
        }}

        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <About />
      </motion.div>


      {/* ==========================================
          PAGE 03 — SKILLS
      ========================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-30
        "

        animate={{
          y: `${(2 - currentPage) * 100}%`,
        }}

        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <Skills />
      </motion.div>


      {/* ==========================================
          PAGE 04 — EXPERIENCE
      ========================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-40
        "

        animate={{
          y: `${(3 - currentPage) * 100}%`,
        }}

        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <ExperienceCard />
      </motion.div>


      {/* ==========================================
          PAGE 05 — PROJECTS
      ========================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-50
        "

        animate={{
          y: `${(4 - currentPage) * 100}%`,
        }}

        transition={{
          duration: 1.1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* <Projects /> */}
      </motion.div>

    </main>
  );
}

export default App;

