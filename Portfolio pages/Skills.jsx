import { motion } from "motion/react";
import { useState } from "react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "Node.js",
  "Next.js",
  "MongoDB",
  "MySQL",
];

const developmentSkills = [
  "UI/UX Design",
  "Responsive Web Design",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "REST API Integration",
  "Database Management",
  "Git & GitHub",
  "Animated Websites",
];


// ======================================================
// SKILL CARD
// ======================================================

const SkillCard = ({
  skill,
  index,
  total,
  isSkillsVisible,
}) => {

  // ==================================================
  // FIND COLUMN
  // ==================================================

  const column = index % 3;

  const columnItems = [];

  for (let i = column; i < total; i += 3) {
    columnItems.push(i);
  }

  const positionInColumn = columnItems.indexOf(index);

  // ==================================================
  // LAST CARD FIRST
  // ==================================================

  const reverseIndex =
    columnItems.length - 1 - positionInColumn;

  // ==================================================
  // STAGGER
  // ==================================================

  const delay = reverseIndex * 0.08;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-100vh",
        x: 0,
        scale: 0.92,
        rotate: 0,
      }}

      animate={
        isSkillsVisible
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: 0,
            }
          : {
              opacity: 0,
              y: "-100vh",
              x: 0,
              scale: 0.92,
              rotate: 0,
            }
      }

      transition={{
        duration: 1.5,
        delay: isSkillsVisible ? delay : 0,
        ease: [0.22, 0.8, 0.36, 1],
      }}

      whileHover={{
        y: -9,
        scale: 1.05,
        rotate: 0,
        transition: {
          duration: 0.08,
          ease: "easeOut",
        },
      }}

      className="
        group
        relative
        flex
        min-h-[50px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-yellow-400/45
        bg-[#0a0a0a]/75
        px-3
        py-2.5
        backdrop-blur-xl
        shadow-[0_0_18px_rgba(250,204,21,0.08)]
        transition-all
        duration-100
        hover:border-yellow-400
        hover:bg-yellow-400/[0.05]
        hover:shadow-[0_0_30px_rgba(250,204,21,0.18)]
        sm:min-h-[56px]
        sm:px-4
        sm:py-2.5
      "
    >

      {/* INNER GOLDEN GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-7
          -top-7
          h-16
          w-16
          rounded-full
          bg-yellow-400/[0.06]
          blur-2xl
          transition-all
          duration-100
          group-hover:bg-yellow-400/[0.18]
        "
      />


      {/* ATTRACTIVE DIAMOND ICON */}

      <div
        className="
          absolute
          left-3
          flex
          h-5
          w-5
          items-center
          justify-center
          sm:left-4
        "
      >

        <span
          className="
            h-2
            w-2
            rotate-45
            rounded-[2px]
            border
            border-yellow-400/70
            bg-yellow-400/10
            shadow-[0_0_8px_rgba(250,204,21,0.45)]
            transition-all
            duration-100
            group-hover:scale-125
            group-hover:border-yellow-400
            group-hover:bg-yellow-400/20
            group-hover:shadow-[0_0_14px_rgba(250,204,21,0.8)]
          "
        />

      </div>


      {/* SKILL CONTENT */}

      <div className="relative flex items-center justify-center text-center">

        <span
          className="
            text-xs
            font-bold
            text-gray-200
            transition-colors
            duration-100
            group-hover:text-yellow-400
            sm:text-sm
          "
        >
          {skill}
        </span>

      </div>


      {/* RIGHT DOT */}

      <motion.span
        animate={{
          opacity: [0.25, 0.8, 0.25],
          scale: [0.8, 1.2, 0.8],
        }}

        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.1,
        }}

        className="
          absolute
          right-3
          h-1.5
          w-1.5
          rounded-full
          bg-yellow-400
          shadow-[0_0_8px_rgba(250,204,21,0.7)]
        "
      />


      {/* BOTTOM HOVER LINE */}

      <motion.div
        initial={{
          width: "0%",
        }}

        whileHover={{
          width: "100%",
        }}

        transition={{
          duration: 0.1,
        }}

        className="
          absolute
          bottom-0
          left-0
          h-[1px]
          bg-yellow-400
          shadow-[0_0_8px_rgba(250,204,21,0.7)]
        "
      />

    </motion.div>
  );
};


// ======================================================
// SKILLS PAGE
// ======================================================

const Skills = () => {

  const [isSkillsVisible, setIsSkillsVisible] =
    useState(false);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-visible
        px-5
        py-12
        text-white
        sm:px-8
      "
    >

      {/* ==================================================
          SKILLS SECTION TRIGGER
      ================================================== */}

      <motion.div
        onViewportEnter={() => {
          setIsSkillsVisible(true);
        }}

        onViewportLeave={() => {
          setIsSkillsVisible(false);
        }}

        viewport={{
          amount: 0.25,
        }}

        className="
          pointer-events-none
          absolute
          inset-0
        "
      />


      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          justify-center
          overflow-visible
        "
      >


        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}

          animate={{
            opacity: isSkillsVisible ? 1 : 0,
            y: isSkillsVisible ? 0 : -30,
          }}

          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}

          className="mb-8 text-center"
        >

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.5em]
              text-yellow-400
              sm:text-xs
            "
          >
            My Expertise
          </p>


          <h1
            className="
              mt-2
              text-3xl
              font-bold
              sm:text-4xl
              lg:text-5xl
            "
          >
            Skills{" "}

            <span className="text-yellow-400">
              & Technologies
            </span>

          </h1>


          <p
            className="
              mx-auto
              mt-5
              mb-5
              max-w-2xl
              px-2
              text-xs
              leading-5
              text-gray-500
              sm:text-sm
            "
          >
            The technologies and skills I use to create beautiful,
            responsive and interactive digital experiences.
          </p>

        </motion.div>


        {/* ==================================================
            TECHNOLOGIES
        ================================================== */}

        <div className="mb-8 overflow-visible">

          <div
            className="
              mb-5
              mt-5
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-gray-500
                sm:text-xs
              "
            >
              Technologies
            </span>

            <div className="h-px flex-1 bg-yellow-400/10" />

          </div>


          <div
            className="
              grid
              grid-cols-2
              gap-2.5
              overflow-visible
              md:grid-cols-3
            "
          >

            {technologies.map((skill, index) => (

              <SkillCard
                key={skill}
                skill={skill}
                index={index}
                total={technologies.length}
                isSkillsVisible={isSkillsVisible}
              />

            ))}

          </div>

        </div>


        {/* ==================================================
            DEVELOPMENT SKILLS
        ================================================== */}

        <div className="overflow-visible">

          <div
            className="
              mb-5
              mt-5
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-gray-500
                sm:text-xs
              "
            >
              Development Skills
            </span>

            <div className="h-px flex-1 bg-yellow-400/10" />

          </div>


          <div
            className="
              grid
              grid-cols-2
              gap-2.5
              overflow-visible
              md:grid-cols-3
            "
          >

            {developmentSkills.map((skill, index) => (

              <SkillCard
                key={skill}
                skill={skill}
                index={index}
                total={developmentSkills.length}
                isSkillsVisible={isSkillsVisible}
              />

            ))}

          </div>

        </div>


        {/* ==================================================
            BOTTOM AREA
            FIXED LOWER POSITION
        ================================================== */}

        <div
          className="
            mt-12
            mb-5
            flex
            w-full
            justify-center
          "
        >

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: isSkillsVisible ? 1 : 0,
              y: isSkillsVisible ? 0 : 15,

              textShadow: isSkillsVisible
                ? [
                    "0 0 4px rgba(250,204,21,0.25)",
                    "0 0 12px rgba(250,204,21,0.8), 0 0 25px rgba(250,204,21,0.35)",
                    "0 0 5px rgba(250,204,21,0.3)",
                    "0 0 12px rgba(250,204,21,0.8), 0 0 25px rgba(250,204,21,0.35)",
                    "0 0 4px rgba(250,204,21,0.25)",
                  ]
                : "0 0 0px rgba(250,204,21,0)",
            }}

            transition={{
              opacity: {
                duration: 0.5,
              },

              y: {
                duration: 0.5,
                ease: "easeOut",
              },

              textShadow: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}

            className="
              text-center
              text-[10px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-yellow-400
              sm:text-xs
            "
          >
            Building • Learning • Creating
          </motion.p>

        </div>

      </div>

    </section>
  );
};

export default Skills;