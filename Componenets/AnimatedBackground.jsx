import { motion } from "motion/react";

const sparks = [
  { left: "8%", top: "18%", size: 5, delay: 0 },
  { left: "18%", top: "72%", size: 4, delay: 1.2 },
  { left: "28%", top: "30%", size: 5, delay: 0.5 },
  { left: "39%", top: "82%", size: 4, delay: 1.8 },
  { left: "48%", top: "16%", size: 5, delay: 0.8 },
  { left: "58%", top: "62%", size: 4, delay: 1.5 },
  { left: "67%", top: "26%", size: 5, delay: 0.3 },
  { left: "76%", top: "78%", size: 4, delay: 2 },
  { left: "86%", top: "42%", size: 5, delay: 1 },
  { left: "93%", top: "16%", size: 4, delay: 0.2 },
  


  // Extra Sparkles
  { left: "13%", top: "45%", size: 4, delay: 0.7 },
  { left: "23%", top: "88%", size: 5, delay: 2.2 },
  { left: "34%", top: "12%", size: 4, delay: 1.4 },
  { left: "43%", top: "48%", size: 5, delay: 0.4 },
  { left: "53%", top: "90%", size: 4, delay: 2.5 },
  { left: "63%", top: "76%", size: 5, delay: 1.7 },
  { left: "72%", top: "10%", size: 4, delay: 0.9 },
  { left: "82%", top: "55%", size: 5, delay: 1.9 },
  { left: "89%", top: "82%", size: 4, delay: 0.6 },
  { left: "97%", top: "65%", size: 5, delay: 2.3 },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">

      {/* Very Soft Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.025] blur-[140px]" />

      {/* Premium Star Sparkles */}
      {sparks.map((spark, index) => (
        <motion.span
          key={index}
          className="absolute"
          style={{
            left: spark.left,
            top: spark.top,
            width: `${spark.size * 2}px`,
            height: `${spark.size * 2}px`,
            background: "rgba(251, 191, 36, 0.9)",
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            filter:
              "drop-shadow(0 0 3px rgba(251,191,36,0.7)) drop-shadow(0 0 7px rgba(251,191,36,0.35))",
          }}
          animate={{
            opacity: [0.2, 1, 0.35, 1, 0.2],
            scale: [0.7, 1.35, 0.9, 1.25, 0.7],
            rotate: [0, 45, 90, 45, 0],
          }}
          transition={{
            duration: 3.8 + index * 0.2,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Very Soft Moving Golden Glow */}
      <motion.div
        className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-amber-400/[0.015] blur-[120px]"
        animate={{
          x: [0, 160, 40, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
};

export default AnimatedBackground;