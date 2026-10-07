
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ExperienceCard() {
  const word = "EXPERIENCE";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, displayText.length + 1));
      }, 180);
    } 
    else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } 
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, displayText.length - 1));
      }, 110);
    } 
    else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 700);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);


  const developerText = "FULL STACK WEB DEVELOPER";


  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent px-6">

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.5em] text-white/40 md:text-sm"
        >
          My Professional Journey
        </motion.p>


        {/* EXPERIENCE TYPING */}
        <div className="flex h-[90px] items-center justify-center md:h-[130px]">

          <h1
            className="min-w-[320px] whitespace-nowrap text-5xl font-black uppercase tracking-[0.12em] md:min-w-[700px] md:text-8xl"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(250, 204, 21, 0.95)",
              textShadow:
                "0 0 12px rgba(250, 204, 21, 0.35), 0 0 40px rgba(250, 204, 21, 0.15)",
            }}
          >
            {displayText}

            {/* Cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="ml-2 inline-block h-[55px] w-[2px] translate-y-1 bg-yellow-400 md:h-[90px]"
            />
          </h1>

        </div>


        {/* GOLDEN LINE */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "180px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-7 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />


        {/* 3+ YEARS EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center"
        >

          <span
            className="text-6xl font-black text-yellow-400 md:text-8xl"
            style={{
              textShadow:
                "0 0 15px rgba(250, 204, 21, 0.25)",
            }}
          >
            3+
          </span>

          <span className="ml-4 text-lg font-medium uppercase tracking-[0.3em] text-white/60 md:text-2xl">
            Years Experience
          </span>

        </motion.div>


        {/* FULL STACK WEB DEVELOPER */}
        {/* 100PX GAP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-[100px]"
        >

          {/* JUMPING HEADING */}
          <div className="relative">

            <div className="flex max-w-[1100px] flex-wrap items-center justify-center">

              {developerText.split("").map((letter, index) => {

                if (letter === " ") {
                  return (
                    <span
                      key={index}
                      className="w-[9px] md:w-[17px]"
                    />
                  );
                }

                const isGolden =
                  index >= developerText.indexOf("WEB");

                return (
                  <motion.span
                    key={`${letter}-${index}`}

                    animate={{
                      y: [0, -22, 0, 8, 0],
                      rotate: [0, -5, 5, -2, 0],
                      scale: [1, 1.08, 1, 1.03, 1],
                    }}

                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: [0.22, 0.61, 0.36, 1],
                      delay: index * 0.12,
                    }}

                    className={`
                      inline-block
                      text-2xl
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      md:text-4xl

                      ${
                        isGolden
                          ? "text-yellow-400"
                          : "text-white"
                      }
                    `}

                    style={{
                      textShadow: isGolden
                        ? "0 0 12px rgba(250,204,21,0.45), 0 0 25px rgba(250,204,21,0.15)"
                        : "0 0 10px rgba(255,255,255,0.15)",
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}

            </div>


            {/* DECORATIVE LINE */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "120px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 1.3,
              }}
              className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />

          </div>


          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 md:text-base"
          >
I create modern and interactive websites with creative designs, smooth animations and powerful functionality, turning ideas into engaging digital experiences.

          </motion.p>

        </motion.div>


        {/* OUTER RING */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute h-[360px] w-[360px] rounded-full border border-yellow-400/[0.07] md:h-[600px] md:w-[600px]"
        />


        {/* INNER RING */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute h-[280px] w-[280px] rounded-full border border-yellow-400/[0.05] md:h-[460px] md:w-[460px]"
        />

      </div>

    </section>
  );
}

export default ExperienceCard;

