import { motion } from "motion/react";

const Welcome = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden px-4">

      <motion.div
        className="relative flex flex-col items-center justify-center px-[5vw] py-[5vh]"
        initial={{
          opacity: 0,
          clipPath: "inset(-20% 100% -20% -10%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "inset(-20% -10% -20% -10%)",
        }}
        transition={{
          duration: 2.8,
          ease: [0.65, 0, 0.35, 1],
        }}
      >

        {/* WELCOME */}
        <h1
          className="
            select-none
            whitespace-nowrap
            text-center
            text-[clamp(6rem,17vw,15rem)]
            leading-[1.25]
            bg-gradient-to-b
            from-[#FFF4C4]
            via-[#F6C65B]
            to-[#C98A22]
            bg-clip-text
            text-transparent
          "
          style={{
            fontFamily: "'Great Vibes', cursive",
            filter:
              "drop-shadow(0 0 8px rgba(245,184,61,0.5)) drop-shadow(0 0 22px rgba(245,184,61,0.25))",
          }}
        >
          Welcome
        </h1>

        {/* SMALL HINT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
          className="
            mt-2
            select-none
            text-center
            text-xs
            tracking-[0.3em]
            text-yellow-400/50
            sm:text-sm
          "
        >
          CLICK ANYWHERE OR PRESS ANY KEY
        </motion.p>

      </motion.div>

    </section>
  );
};

export default Welcome;