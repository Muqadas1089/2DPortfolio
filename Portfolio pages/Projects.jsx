import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Apple Store",
    category: "E-Commerce Website",
    description:
      "A modern Apple-inspired e-commerce website with a clean interface, responsive layout and interactive user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Portfolio",
    category: "Creative Web Experience",
    description:
      "A premium animated portfolio designed to showcase development skills, experience and projects through interactive sections.",
    technologies: ["React", "Tailwind CSS", "Motion"],
  },
  {
    number: "03",
    title: "Business Website",
    category: "Full Stack Website",
    description:
      "A responsive business website focused on modern UI, smooth interactions, scalable structure and a professional experience.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

function Projects() {
  return (
    <section className="min-h-screen w-full px-6 py-14 sm:px-10 md:px-14 lg:px-20">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-9 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-yellow-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
            Projects
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
            A collection of projects built with modern technologies,
            interactive design and clean development practices.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                x: "100vw",
                rotate: 360,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                rotate: 0,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 1.35,
                delay: index * 0.12,
                ease: [0.22, 0.8, 0.36, 1],
              }}
              className="
                group
                relative
                h-[285px]
                overflow-hidden
                rounded-2xl
                border
                border-yellow-400/20
                bg-black/20
                p-5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400/60
                hover:shadow-[0_0_28px_rgba(250,204,21,0.12)]
                sm:h-[300px]
                sm:p-6
              "
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-yellow-400">
                  {project.number}
                </span>

                <span className="h-2.5 w-2.5 rotate-45 border border-yellow-400 bg-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              </div>

              {/* CONTENT */}
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-yellow-400/70">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* TECHNOLOGIES */}
              <div className="absolute bottom-6 left-5 flex flex-wrap gap-2 sm:left-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-yellow-400/20
                      px-3
                      py-1
                      text-[11px]
                      text-gray-300
                      transition-all
                      duration-200
                      group-hover:border-yellow-400/50
                      group-hover:text-yellow-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* HOVER LINE */}
              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  bg-yellow-400
                  shadow-[0_0_14px_rgba(250,204,21,0.9)]
                  transition-all
                  duration-300
                  group-hover:w-[65%]
                "
              />
            </motion.article>
          ))}
        </div>

        {/* BOTTOM SPACE / SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 text-center text-xs tracking-widest text-gray-500"
        >
          DESIGNED • DEVELOPED • ANIMATED
        </motion.p>
      </div>
    </section>
  );
}

export default Projects;