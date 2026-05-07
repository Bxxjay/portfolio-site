import { motion } from "framer-motion";

export default function About({ darkMode }) {
    return (
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-10 max-w-4xl">

                {/* text side — from left */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col gap-6"
                >
                    <div>
                        <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}>
                            About
                        </h1>
                        <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}>
                            Me
                        </h1>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed max-w-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        I'm Bolaji, a frontend engineer based in Nigeria. I build clean,
                        responsive web experiences using React, Tailwind CSS, and modern
                        JavaScript. I care deeply about design details, performance, and
                        creating interfaces that feel intuitive to use.
                    </p>

                    <p className={`text-sm sm:text-base leading-relaxed max-w-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        I'm currently open to remote frontend roles and freelance projects.
                        If you have something interesting, let's build it together.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        
                        <a    href="/bxxjay.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors duration-200"
                        >
                            View CV
                        </a>
                        
                        <a    href="/bxxjay.pdf"
                            download
                            className={`px-6 py-3 text-sm font-bold rounded-xl border transition-colors duration-200
                                ${darkMode
                                    ? "border-white/20 text-white hover:bg-white/10"
                                    : "border-black/20 text-black hover:bg-black/10"
                                }`}
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* image side — from right */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                >
                    <div className={`w-64 h-72 rounded-2xl overflow-hidden ${darkMode ? "bg-[#2a2a2a]" : "bg-[#e0e0e0]"}`}>
                        <img
                            src="/images/bxxjay.jpeg"
                            alt="Bolaji"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}