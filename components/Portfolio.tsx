"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Cloud,
  GitBranch,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-medium tracking-tight">Arbin Sapkota</span>
          <button
            onClick={() => setDark(!dark)}
            className="text-sm text-slate-400 hover:text-slate-200 transition"
          >
            {dark ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-6"
          >
            DevOps & Cloud Engineer
          </motion.h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Designing secure, scalable cloud infrastructure and automated CI/CD pipelines on AWS.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="/Arbin_Sapkota_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            >
              <Download size={16} /> Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Skills</h2>

        <div className="space-y-8">
          <Skill name="AWS Cloud" level={90} />
          <Skill name="Docker & Containers" level={85} />
          <Skill name="CI/CD Pipelines" level={80} />
          <Skill name="Linux & Nginx" level={88} />
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-12">Experience</h2>

          <div className="space-y-12">
            <Timeline
              year="2025"
              title="DevOps Engineer"
              desc="Built CI/CD pipelines, Dockerized applications, managed AWS infrastructure with high availability and security."
            />
            <Timeline
              year="2023"
              title="Cloud Engineer"
              desc="Managed EC2 hosting, WordPress migrations, monitoring, backups, and IAM security best practices."
            />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          DevOps Architecture
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Diagram icon={<Cloud />} title="AWS" desc="VPC, EC2, S3, IAM, Security Groups" />
          <Diagram icon={<GitBranch />} title="CI/CD" desc="GitHub Actions, automated deployments" />
          <Diagram icon={<Shield />} title="Security" desc="IAM policies, SSL, monitoring & logging" />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-slate-800 py-24 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight mb-6">
          Contact
        </h2>

        <div className="flex justify-center gap-8 text-slate-400">
          <a href="mailto:arbin@example.com" className="hover:text-slate-200 transition">
            <Mail />
          </a>
          <a
            href="https://github.com/Arbinsapkota"
            className="hover:text-slate-200 transition"
          >
            <Github />
          </a>
          <a href="#" className="hover:text-slate-200 transition">
            <Linkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Arbin Sapkota
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */

function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-slate-300">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8 }}
          className="h-full bg-blue-600 rounded-full"
        />
      </div>
    </div>
  );
}

function Timeline({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
      <span className="text-sm text-blue-500">{year}</span>
      <h3 className="text-lg font-medium mt-1">{title}</h3>
      <p className="text-slate-400 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function Diagram({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center hover:border-slate-600 transition">
      <div className="flex justify-center text-blue-500 mb-4">{icon}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
// "use client";

// import { motion, useInView } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Download,
//   Cloud,
//   GitBranch,
//   Shield,
//   Server,
//   Award,
//   Cpu,
//   Database,
//   GitPullRequest,
//   Code,
//   Terminal,
// } from "lucide-react";
// import { useEffect, useState, useRef } from "react";

// /* ===================== MAIN ===================== */

// export default function Portfolio() {
//   const [showMain, setShowMain] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowMain(true), 2600);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!showMain) return <TerminalIntro />;

//   return (
//     <div className="bg-slate-950 text-slate-100">
//       <Header />
//       <Hero />
//       <Stats />
//       <Skills />
//       <Projects />
//       <Certifications />
//       <Architecture />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// /* ===================== TERMINAL INTRO ===================== */

// function TerminalIntro() {
//   return (
//     <div className="h-screen bg-black text-green-400 font-mono flex items-center justify-center">
//       <motion.pre
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="text-sm md:text-base leading-relaxed"
//       >
// {`$ whoami
// arbin-sapkota

// $ role
// DevOps & Cloud Engineer

// $ skills
// AWS | Docker | CI/CD | Linux

// $ status
// READY_FOR_PRODUCTION █`}
//       </motion.pre>
//     </div>
//   );
// }

// /* ===================== HEADER ===================== */

// function Header() {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
//         <span className="font-medium">Arbin Sapkota</span>
//         <div className="flex gap-4 text-slate-400">
//           <a href="https://github.com/Arbinsapkota" className="hover:text-white transition-colors"><Github size={18} /></a>
//           <a href="https://linkedin.com/in/arbinsapkota" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* ===================== HERO ===================== */

// function Hero() {
//   return (
//     <section className="relative py-36 px-6 text-center">
//       <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-600/20" />

//       <motion.h1
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative text-5xl md:text-6xl font-semibold mb-6"
//       >
//         DevOps & Cloud Engineer
//       </motion.h1>

//       <p className="relative text-lg text-slate-400 max-w-2xl mx-auto">
//         Designing secure, scalable cloud infrastructure and automated CI/CD pipelines on AWS.
//       </p>

//       <div className="relative flex justify-center gap-4 mt-10">
//         <a
//           href="/resume.pdf"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 hover:scale-105"
//         >
//           <Download size={16} /> Download CV
//         </a>
//       </div>
//     </section>
//   );
// }

// /* ===================== STATS ===================== */

// function Stats() {
//   const stats = [
//     { value: 15, label: "Cloud Projects", suffix: "+" },
//     { value: 25, label: "CI/CD Pipelines", suffix: "+" },
//     { value: 99.9, label: "Uptime", suffix: "%" },
//     { value: 20, label: "AWS Services", suffix: "+" },
//   ];

//   return (
//     <section className="max-w-5xl mx-auto px-6 py-24">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
//         Key Stats
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {stats.map((stat, idx) => (
//           <StatPremium key={idx} stat={stat} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- PREMIUM SMALLER STAT CARD ---------------- */

// function StatPremium({ stat }: any) {
//   const { value, label, suffix } = stat;
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     const duration = 1500;
//     const increment = value / (duration / 30);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         start = value;
//         clearInterval(counter);
//       }
//       setCount(Number(start.toFixed(1)));
//     }, 30);

//     return () => clearInterval(counter);
//   }, [isInView, value]);

//   return (
//     <motion.div
//       ref={ref}
//       className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/80 p-6 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 border border-slate-700"
//       whileHover={{ scale: 1.03 }}
//     >
//       <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">
//         {count}
//         {suffix}
//       </div>
//       <div className="text-xs md:text-sm text-slate-400">{label}</div>
//     </motion.div>
//   );
// }

// /* ===================== SKILLS ===================== */
// function Skills() {
//   const skills = [
//     { title: "AWS Cloud", icon: <Cloud size={24} />, desc: ["VPC", "EC2", "S3", "IAM", "CloudWatch"] },
//     { title: "Containers", icon: <Server size={24} />, desc: ["Docker", "Compose", "ECR", "ECS"] },
//     { title: "CI/CD Pipeline", icon: <GitBranch size={24} />, desc: ["GitHub Actions", "Jenkins", "CodePipeline"] },
//     { title: "Security", icon: <Shield size={24} />, desc: ["IAM", "SSL", "WAF", "Secrets Manager"] },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24">
//       <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-400">
//         Core Expertise
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {skills.map((skill, idx) => (
//           <SkillCardPremium key={idx} skill={skill} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- PREMIUM STATIC SKILL CARD ---------------- */

// function SkillCardPremium({ skill }: any) {
//   return (
//     <div className="relative rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/80 p-8 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
      
//       <div className="flex items-center gap-3 mb-6 text-blue-400">
//         {skill.icon}
//         <h3 className="font-semibold text-xl md:text-2xl">{skill.title}</h3>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {skill.desc.map((item: string, idx: number) => (
//           <span
//             key={idx}
//             className="px-3 py-1 text-xs md:text-sm bg-blue-600/20 text-blue-300 rounded-full backdrop-blur-sm"
//           >
//             {item}
//           </span>
//         ))}
//       </div>

//     </div>
//   );
// }

// /* ===================== PROJECTS ===================== */

// function Projects() {
//   const projects = [
//     {
//       title: "CI/CD Pipeline for Microservices",
//       stack: ["GitHub Actions", "Docker", "AWS EC2"],
//       desc: "Automated build, test, and deployment pipelines for microservices architecture."
//     },
//     {
//       title: "High Availability WordPress on AWS",
//       stack: ["ALB", "EC2", "RDS", "CloudWatch"],
//       desc: "Designed fault-tolerant architecture with monitoring and auto-scaling capabilities."
//     },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24">
//       <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-400">
//         Featured Projects
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10">
//         {projects.map((project, idx) => (
//           <ProjectPremium key={idx} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- PREMIUM PROJECT CARD ---------------- */

// function ProjectPremium({ project }: any) {
//   return (
//     <div className="group relative rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/80 p-8 
//                     hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300">
      
//       <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{project.title}</h3>
      
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.stack.map((tech: string, idx: number) => (
//           <span 
//             key={idx} 
//             className="px-3 py-1 text-xs md:text-sm bg-blue-600/20 text-blue-300 rounded-full backdrop-blur-sm border border-blue-500/20"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <p className="text-sm md:text-base text-slate-400">{project.desc}</p>
//     </div>
//   );
// }

// /* ===================== ENHANCED CERTIFICATIONS ===================== */

// function Certifications() {
//   const certifications = [
//     {
//       name: "AWS Solutions Architect – Associate",
//       icon: <Cpu className="text-amber-500" size={28} />,
//       date: "2024",
//       badge: "Pro",
//       color: "from-amber-600/20 to-amber-800/10",
//       border: "border-amber-700/40"
//     },
//     {
//       name: "AWS DevOps Engineer – Professional",
//       icon: <GitPullRequest className="text-emerald-500" size={28} />,
//       date: "2024",
//       badge: "Expert",
//       color: "from-emerald-600/20 to-emerald-800/10",
//       border: "border-emerald-700/40"
//     },
//     {
//       name: "AWS Cloud Practitioner",
//       icon: <Cloud className="text-blue-500" size={28} />,
//       date: "2023",
//       badge: "Fundamental",
//       color: "from-blue-600/20 to-blue-800/10",
//       border: "border-blue-700/40"
//     },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
//           Certifications
//         </h2>
//         <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//           Validated expertise in AWS cloud architecture and DevOps methodologies
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         {certifications.map((cert, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <CertPremium cert={cert} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CertPremium({ cert }: any) {
//   return (
//     <div className={`group relative rounded-3xl border ${cert.border} bg-gradient-to-br ${cert.color} p-8 
//                     hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 h-full`}>
      
//       <div className="flex items-start justify-between mb-6">
//         <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm">
//           {cert.icon}
//         </div>
//         <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">
//           {cert.badge}
//         </span>
//       </div>

//       <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
//         {cert.name}
//       </h3>
      
//       <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
//         <span className="text-sm text-slate-400">{cert.date}</span>
//         <Award className="text-yellow-500/60" size={18} />
//       </div>

//       <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//     </div>
//   );
// }

// /* ===================== ENHANCED REFERENCE ARCHITECTURE ===================== */

// function Architecture() {
//   const architectureSteps = [
//     { icon: <Terminal />, title: "Developer Push", desc: "Git commit triggers pipeline" },
//     { icon: <Code />, title: "CI/CD Pipeline", desc: "Build, test, security scan" },
//     { icon: <Database />, title: "Container Registry", desc: "Docker images to ECR" },
//     { icon: <Cpu />, title: "Orchestration", desc: "ECS Fargate deployment" },
//     { icon: <Cloud />, title: "Monitoring", desc: "CloudWatch logs & metrics" },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
//           Reference Architecture
//         </h2>
//         <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//           End-to-end cloud-native application deployment pipeline
//         </p>
//       </div>

//       <div className="relative">
//         {/* Architecture Visualization */}
//         <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 md:p-12 mb-12 overflow-hidden">
//           {/* Decorative background elements */}
//           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />
          
//           <div className="relative z-10">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//               {architectureSteps.map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   viewport={{ once: true }}
//                   className="text-center"
//                 >
//                   <div className="p-4 bg-white/5 rounded-2xl border border-slate-700 mb-4 inline-block">
//                     <div className="text-blue-400">
//                       {step.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-semibold text-white mb-2">{step.title}</h3>
//                   <p className="text-sm text-slate-400">{step.desc}</p>
                  
//                   {/* Connector line */}
//                   {idx < architectureSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600/30 to-transparent" 
//                          style={{ left: `${(idx + 1) * 20}%` }} />
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Architecture Diagram */}
//             <div className="mt-12 p-6 bg-black/30 rounded-2xl border border-slate-800">
//               <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
// {`┌─────────────────────────────────────────────────────────────┐
// │                     CI/CD Pipeline Flow                       │
// ├─────────────────────────────────────────────────────────────┤
// │ Developer → GitHub → Build → Test → Scan → Deploy → Monitor  │
// │                                                             │
// │ Cloud Components:                                           │
// │  • VPC with Public/Private Subnets                         │
// │  • Application Load Balancer (ALB)                         │
// │  • ECS Fargate Containers (Auto-scaling)                   │
// │  • RDS PostgreSQL with Multi-AZ                            │
// │  • CloudFront + S3 for Static Assets                       │
// │  • CloudWatch Alarms & Logs                                │
// └─────────────────────────────────────────────────────────────┘`}
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ===================== ENHANCED CONTACT ===================== */

// function Contact() {
//   const contactMethods = [
//     {
//       icon: <Mail />,
//       platform: "Email",
//       value: "arbinsapkota30@gmail.com",
//       link: "mailto:arbinsapkota30@gmail.com",
//       color: "from-red-600/20 to-red-800/10",
//       border: "border-red-700/40"
//     },
//     {
//       icon: <Github />,
//       platform: "GitHub",
//       value: "Arbinsapkota",
//       link: "https://github.com/Arbinsapkota",
//       color: "from-slate-600/20 to-slate-800/10",
//       border: "border-slate-700/40"
//     },
//     {
//       icon: <Linkedin />,
//       platform: "LinkedIn",
//       value: "arbinsapkota",
//       link: "https://linkedin.com/in/arbinsapkota",
//       color: "from-blue-600/20 to-blue-800/10",
//       border: "border-blue-700/40"
//     },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      
//       <div className="relative max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
//             Let's Connect
//           </h2>
//           <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//             Open to discussing cloud architecture, automation, and DevOps opportunities
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {contactMethods.map((method, idx) => (
//             <motion.a
//               key={idx}
//               href={method.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               className={`block rounded-3xl border ${method.border} bg-gradient-to-br ${method.color} p-8 
//                          hover:shadow-2xl transform transition-all duration-300`}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm">
//                   <div className="text-white">
//                     {method.icon}
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-white text-lg">{method.platform}</h3>
//               </div>
//               <p className="text-slate-300 text-sm">{method.value}</p>
//               <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
//                 <span className="text-xs text-slate-400">Click to connect</span>
//                 <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                   ↗
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 mb-4">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//             <span className="text-sm text-blue-300">Available for opportunities</span>
//           </div>
//           <p className="text-slate-400 mb-8 max-w-md mx-auto">
//             Currently exploring full-time roles in DevOps, Cloud Engineering, and SRE positions
//           </p>
//           <a
//             href="mailto:arbinsapkota30@gmail.com"
//             className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 
//                      hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 hover:scale-105 text-lg font-medium"
//           >
//             <Mail size={20} />
//             Start a Conversation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ===================== FOOTER ===================== */

// function Footer() {
//   return (
//     <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
//       <div className="max-w-6xl mx-auto px-6">
//         <p className="mb-4">
//           Built with Next.js, Framer Motion, and Tailwind CSS
//         </p>
//         <p>
//           © {new Date().getFullYear()} Arbin Sapkota. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );