import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function CountUp({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();
                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        setCount(Math.floor(progress * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>+{count}</span>;
}

export default function Hero({ darkMode }) {
    const stats = [
        { value: 24, label: "MONTHS OF EXPERIENCE" },
        { value: 46, label: "PROJECTS COMPLETED" },
        { value: 20, label: "WORLDWIDE CLIENTS" },
    ];

    return (
        <section className={`min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            <div className="mb-8 overflow-hidden">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}
                >
                    Software
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}
                >
                    Engineer
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className={`text-sm sm:text-base max-w-md leading-relaxed mb-16 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
            </motion.p>

            <div className="flex flex-row gap-10 sm:gap-16">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <span className={`text-4xl sm:text-5xl font-black ${darkMode ? "text-white" : "text-black"}`}>
                            <CountUp target={stat.value} />
                        </span>
                        <span className={`text-xs mt-1 leading-tight ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}