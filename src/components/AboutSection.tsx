"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useState } from "react";

function TiltCard({ children, className = "", index }: { children: React.ReactNode; className?: string; index: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Tilt
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    const xPct = localX / width - 0.5;
    const yPct = localY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Spotlight
    mouseX.set(localX);
    mouseY.set(localY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] overflow-hidden transition-shadow duration-500 ${className}`}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div
        style={{ transform: "translateZ(80px)" }}
        className="absolute -top-4 -right-4 text-[160px] leading-none font-black text-white/[0.02] group-hover:text-blue-500/[0.08] transition-colors duration-500 pointer-events-none select-none z-0 tracking-tighter drop-shadow-2xl"
      >
        {index}
      </div>
      <div className="relative z-10 h-full flex flex-col p-10 md:p-12" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-32 pb-16 px-6 overflow-hidden perspective-[1000px]">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Where Curiosity Meets <br className="hidden md:block" />
              <span className="text-blue-400">Structured Engineering</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-light">
              CSIS is a student-driven technology community that helps aspiring developers learn, grow, and build real-world software solutions. We support students throughout their journey, from understanding the basics to creating impactful and scalable technology projects
            </p>
          </div>
        </div>

        {/* 3D Tilt Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">

          {/* Mission Card */}
          <TiltCard index="01" className="min-h-[420px]">
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">
              OUR MISSION
            </h3>
            <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              To provide students with opportunities to learn, collaborate, and build real-world projects through workshops, events, research, and hands-on experiences. CSIS is committed to fostering technical excellence, creativity, teamwork, and continuous growth in a supportive and inclusive environment.            </p>
          </TiltCard>

          {/* Vision Card */}
          <TiltCard index="02" className="min-h-[420px]">
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">
              OUR VISION
            </h3>
            <div className="w-16 h-1 bg-purple-500 mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              To create a supportive and collaborative community where students explore technology, share knowledge, and grow together while developing the skills, expertise, and confidence needed to solve real-world challenges and contribute to a better digital future.            </p>
          </TiltCard>

        </div>

        {/* Objectives Section - Expanding Accordion */}
        <div className="w-full mt-12">
          <div className="text-center mb-12 flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Our Core Objectives
            </h3>
            <p className="text-gray-400 font-light text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              CSIS provides a platform where ideas grow, skills develop, and people work together to create meaningful technology solutions            </p>
            <div className="w-32 h-1 bg-white rounded-full" />
          </div>

          <ExpandingObjectives />
        </div>

      </div>
    </section>
  );
}

const objectivesData = [
  {
    id: "01",
    title: "Skill Development",
    desc: "Provide students with opportunities to learn new technologies, strengthen their technical skills, and stay updated with industry trends through workshops, training sessions, technical events, and hands-on experiences. We aim to create a culture of continuous learning that helps students build confidence, expand their knowledge, and prepare for future academic and professional challenges.",
    color: "from-blue-600/40 to-cyan-600/40",
    border: "border-cyan-500/30",
    textGlow: "text-cyan-300",
    icon: "/images/3d-icons/3d_student_laptop_1782308688143.png"
  },
  {
    id: "02",
    title: "Project Development",
    desc: "Motivate students to transform their ideas into practical solutions by working on real-world projects, participating in hackathons, competitions, research activities, and collaborative initiatives. Through project-based learning and creative problem-solving, we help students gain valuable experience, develop critical thinking skills, and create meaningful technological solutions.",
    color: "from-purple-600/40 to-pink-600/40",
    border: "border-pink-500/30",
    textGlow: "text-pink-300",
    icon: "/images/3d-icons/3d_project_blocks_1782308700481.png"
  },
  {
    id: "03",
    title: "Collaboration & Teamwork",
    desc: "Create an inclusive and supportive environment where students can connect, share knowledge, exchange ideas, and learn from one another. By encouraging teamwork, mentorship, networking, and active participation in community activities, we aim to foster personal growth, professional development, and lasting relationships that extend beyond the classroom.",
    color: "from-emerald-600/40 to-teal-600/40",
    border: "border-teal-500/30",
    textGlow: "text-teal-300",
    icon: "/images/3d-icons/3d_network_handshake_1782307985064.png"
  }
];

function ExpandingObjectives() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 h-[750px] sm:h-[650px] lg:h-[420px]">
      {objectivesData.map((obj, i) => {
        const isActive = active === i;
        return (
          <motion.div
            key={obj.id}
            onHoverStart={() => setActive(i)}
            onClick={() => setActive(i)}
            animate={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ type: "spring", stiffness: 600, damping: 40 }}
            className={`relative rounded-[2rem] overflow-hidden cursor-pointer border ${obj.border} bg-[#050505] backdrop-blur-xl group transition-all duration-300 hover:border-white/30`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} opacity-10 group-hover:opacity-30 transition-opacity duration-300`} />

            {/* Big Number Background */}
            <div className={`absolute -bottom-4 -right-4 text-[120px] font-black opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-300 tracking-tighter ${isActive ? "scale-110" : ""}`}>
              {obj.id}
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 lg:p-8">

              {/* Collapsed Title (Vertical on Desktop, Horizontal on Mobile) */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h4 className="text-base sm:text-lg lg:-rotate-90 lg:whitespace-nowrap font-bold text-white/40 tracking-widest uppercase transition-colors group-hover:text-white/80 text-center lg:text-left">
                    {obj.title}
                  </h4>
                </div>
              )}

              {/* Active Content */}
              <motion.div
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                transition={{ duration: 0.2, delay: isActive ? 0.05 : 0 }}
                className={`${isActive ? "pointer-events-auto absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8" : "pointer-events-none opacity-0 absolute"}`}
              >
                <div className={`text-sm lg:text-base font-mono mb-3 ${obj.textGlow}`}>
                  // OBJECTIVE {obj.id}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight leading-none">
                  {obj.title}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 shrink-0 relative drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mix-blend-screen opacity-90 transition-transform duration-500 hover:scale-110">
                    <Image src={obj.icon} alt={obj.title} fill className="object-contain" />
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-xl">
                    {obj.desc}
                  </p>
                </div>
              </motion.div>


            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
