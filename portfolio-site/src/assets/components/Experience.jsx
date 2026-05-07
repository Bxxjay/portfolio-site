export default function Experience({ darkMode }) {
     const projects = [
        {
            id: 1,
            name: "Motorola Solutions",
            description: "Internship as a Database Administrator, where I was responsible for managing and optimizing databases, ensuring data integrity, and supporting the development team with database-related tasks. I took on various projects, including database design, performance tuning, and data migration, which allowed me to gain hands-on experience in database management and administration.",
            date: "Jan 2025 - Jan 2026"
        },
        {
            id: 2,
            name: "Freelance Web Developer",
            description: "Built multiple websites for clients, including e-commerce platforms, portfolio sites, and business websites. I worked closely with clients to understand their requirements and delivered customized solutions using modern web technologies. This experience allowed me to develop strong skills in front-end and back-end development, as well as project management and client communication.",
            date: "Jan 2024 - Dec 2024"
        },
        {
            id: 3,
            name: "Emstill Solutions",
            description: "Worked as a Software Engineer at a FinTech company,Where i was responsible for developing and maintaining software applications that support financial services. I collaborated with cross-functional teams to design and implement new features, optimize existing code, and ensure the reliability and security of our applications. This role provided me with valuable experience in software development, problem-solving, and working in a fast-paced environment.",
            date: "July 2022 - Dec 2023"
        },
    ]
    
    
    return ( 
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            {/* heading */}
            <div className="mb-8">
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}>
                    3 YEARS OF 
                </h1>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}>
                    EXPERIENCE
                </h1>
            </div>

              {/* project list */}
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href= "#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-6 rounded-2xl p-4 transition-all duration-300 cursor-pointer
                            ${darkMode
                                ? "bg-[#1a1a1a] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-xl"
                                : "bg-white hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl"
                            }`}
                    >
                        {/* text */}
                        <div className="flex flex-col gap-1 flex-1">
                            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                                {project.name}
                            </h2>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {project.description}
                            </p>
                            <p className={`text-sm italic ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {project.date}
                            </p>
                        </div>

                        {/* arrow */}
                        <div className="flex-shrink-0 pr-2">
                            <svg
                                className="w-6 h-6 text-orange-500 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}