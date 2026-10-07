import { motion } from "motion/react";
import img1 from "./img1.jpg";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "Node.js",
  "Next.js",
  "MongoDB",
  "MySQL",
];

const About = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20 text-white">

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="z-10 text-center lg:text-left"
        >

          {/* ABOUT ME */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400"
          >
            About Me
          </motion.p>


          {/* MAIN HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="text-5xl font-bold leading-tight sm:text-6xl"
          >
            Hi, I'm{" "}

            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(250,204,21,0)",
                  "0 0 18px rgba(250,204,21,0.7)",
                  "0 0 0px rgba(250,204,21,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-yellow-400"
            >
              Muqadas Umar
            </motion.span>
          </motion.h1>


          {/* PROFESSION */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="mt-5 text-2xl font-semibold text-gray-300"
          >
            Full Stack Developer
          </motion.h2>


          {/* FIRST PARAGRAPH */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I am a passionate Full Stack Developer who loves turning ideas
            into beautiful, interactive and functional digital experiences.
            I work with modern web technologies to build responsive,
            user-friendly and visually engaging applications.
          </motion.p>


          {/* SECOND PARAGRAPH */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="mt-4 max-w-xl text-base leading-8 text-gray-500 sm:text-lg"
          >
            I have designed and developed many beautiful projects, always
            focusing on clean design, smooth animations and a great user
            experience.
          </motion.p>


          {/* ================= EXPLORE BUTTON ================= */}

          <motion.button
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}

            animate={{
              y: [0, -4, 0],
            }}

            whileHover={{
              scale: 1.07,
              boxShadow:
                "0 0 30px rgba(250,204,21,0.45)",
            }}

            whileTap={{
              scale: 0.95,
            }}

            transition={{
              opacity: {
                duration: 0.7,
                delay: 0.6,
              },

              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },

              scale: {
                duration: 0.3,
              },
            }}

            className="
              mt-8
              h-14
              w-52
              rounded-full
              border-2
              border-yellow-400
              bg-transparent
              px-8
              text-sm
              font-semibold
              tracking-wide
              text-yellow-400
              shadow-[0_0_15px_rgba(250,204,21,0.12)]
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:text-black
            "
          >
            Explore My Work
          </motion.button>

        </motion.div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="relative flex min-h-[500px] items-center justify-center">


          {/* OUTER GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              bg-yellow-400/10
              blur-3xl
              sm:h-[370px]
              sm:w-[370px]
            "
          />


          {/* ================= IMAGE CIRCLE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            animate={{
              y: [0, -10, 0],
            }}

            transition={{
              opacity: {
                duration: 0.8,
              },

              scale: {
                duration: 0.8,
              },

              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}

            viewport={{ once: true }}

            className="
              relative
              z-20
              flex
              h-64
              w-64
              items-center
              justify-center
              rounded-full
              border-2
              border-yellow-400
              p-2
              shadow-[0_0_40px_rgba(250,204,21,0.25)]
              sm:h-80
              sm:w-80
            "
          >

            <div
              className="
                h-full
                w-full
                overflow-hidden
                rounded-full
                border
                border-yellow-400/30
              "
            >

              {/* IMAGE */}

              <img
                src={img1}
                alt="Muqadas Umar"
                className="h-full w-full object-cover"
              />

            </div>

          </motion.div>


          {/* ================= SKILL BUBBLES ================= */}

          {skills.map((skill, index) => {

            const positions = [
              "top-[8%] left-[28%]",
              "top-[12%] right-[28%]",
              "top-[27%] left-[8%]",
              "top-[30%] right-[8%]",
              "top-[48%] left-[2%]",
              "bottom-[22%] left-[15%]",
              "bottom-[10%] left-[32%]",
              "bottom-[8%] right-[28%]",
              "top-[20%] left-[18%]",
              "bottom-[30%] right-[12%]",
              "top-[45%] right-[2%]",
            ];


            return (

              <motion.div
                key={skill}

                initial={{
                  opacity: 0,
                  scale: 0,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                animate={{
                  y: [0, -8, 0],
                  x: [
                    0,
                    index % 2 === 0 ? 4 : -4,
                    0,
                  ],
                }}

                transition={{

                  opacity: {
                    duration: 0.5,
                    delay: index * 0.08,
                  },

                  scale: {
                    duration: 0.5,
                    delay: index * 0.08,
                  },

                  y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  },

                  x: {
                    duration: 4 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  },

                }}

                viewport={{
                  once: true,
                }}

                className={`absolute ${positions[index]} z-30`}
              >

                {/* BUBBLE */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    boxShadow:
                      "0 0 25px rgba(250,204,21,0.5)",
                  }}

                  className="
                    flex
                    h-10
                    min-w-[90px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/50
                    bg-black/75
                    px-4
                    text-xs
                    font-medium
                    text-gray-200
                    shadow-[0_0_15px_rgba(250,204,21,0.1)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-yellow-400
                    hover:text-yellow-400
                    sm:h-11
                    sm:min-w-[105px]
                    sm:px-5
                    sm:text-sm
                  "
                >
                  {skill}
                </motion.div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
};

export default About;