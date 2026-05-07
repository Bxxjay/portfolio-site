export default function Thoughts({ darkMode }) {
    const projects = [
        {
            id: 1,
            name: "The Law of Leaky Abstractions",
            description: "The idea that even though programming tools and systems are designed to hide complexity and make things easier, those hidden details eventually “leak” through when something goes wrong. Using TCP over unreliable IP as the main example, it shows how abstractions simplify software development but can never fully shield programmers from the underlying mechanics, meaning developers still need deep technical knowledge to debug failures, optimize performance, and truly understand how systems work.",
            link: "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
            date: "Nov 2002"
        },
        {
            id: 2,
            name: "Choose Boring Technology",
            description: "Software abstractions help simplify complex systems by hiding difficult underlying details, but they are never perfect, and when problems arise those hidden complexities eventually “leak” through, requiring engineers to understand the lower-level systems beneath the tools they use. At the same time, strong engineering decisions often come from choosing stable and well-understood technologies instead of constantly chasing new trends, since every new tool introduces additional complexity, operational overhead, and hidden risks. Long-term success in software engineering therefore depends not only on innovation, but also on restraint, reliability, and a deep understanding of the systems that abstractions attempt to simplify.",
            link: "https://mcfunley.com/choose-boring-technology",
            date: "Mar 2015"
        },
        {
            id: 3,
            name: "Teach Yourself Programming In Ten Years",
            description: "Programming mastery cannot be achieved in a few days or hours despite what many books and tutorials claim; true expertise takes years of deliberate practice, continuous learning, and real-world experience. Becoming a strong programmer requires building projects, learning from mistakes, collaborating with others, understanding how computers actually work, and constantly challenging yourself beyond your current skill level. Books and courses can provide a starting point, but real growth comes from long-term dedication, curiosity, and hands-on problem solving rather than chasing shortcuts or quick success promises.",
            link: "https://norvig.com/21-days.html",
            date: "Jan 2014"
        }
    ];



    return (
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            {/* heading */}
            <div className="mb-8">
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}>
                    Design
                </h1>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}>
                    Thoughts
                </h1>
            </div>

             <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
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