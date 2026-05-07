import { motion } from "framer-motion";

export default function ProjectsExt({ darkMode }) {
    const projects = [
        {
            id: 1,
            name: "Sneakers Store",
            description: "E-commerce Sneaker Store",
            image: "/images/paramount.png",
            link: "https://your-paramount-site.com",
        },
        {
            id: 2,
            name: "Hairstylist Studio",
            description: "Hairstylist Booking Platform",
            image: "/images/bnm.png",
            link: "https://bxxjay.github.io/REACT.JS/",
        },
        {
            id: 3,
            name: "AIHUB",
            description: "AI Aggregator Web App",
            image: "/images/aihub.png",
            link: "https://your-aihub-site.com",
        },
    ];

    return (
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            <div className="mb-8">
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}
                >
                    Recent
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}
                >
                    Projects
                </motion.h1>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className={`group flex items-center gap-3 sm:gap-6 rounded-2xl p-3 sm:p-4 transition-all duration-300 cursor-pointer
                            ${darkMode
                                ? "bg-[#1a1a1a] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-xl"
                                : "bg-white hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl"
                            }`}
                    >
                        <div className="flex-shrink-0 w-[100px] h-[75px] sm:w-[160px] sm:h-[110px] rounded-xl overflow-hidden bg-gray-800">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <h2 className={`text-lg sm:text-2xl font-bold leading-tight ${darkMode ? "text-white" : "text-black"}`}>
                                {project.name}
                            </h2>
                            <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {project.description}
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}