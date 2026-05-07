import { useState, useEffect } from 'react';
import Sidenav from '../src/assets/components/Sidenav';
import Header from '../src/assets/components/Header';
import Thoughts from '../src/assets/components/ThoughtsExt';
import Contact from '../src/assets/components/Contact';

export default function ThoughtsPage() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") setDarkMode(false);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
    <div className={`flex flex-col md:flex-row md:h-screen md:overflow-hidden ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

        {/* header on mobile */}
        <div className={`md:hidden w-full ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Sidenav darkMode={darkMode} />

        <main className={`flex-1 overflow-y-auto ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>
            <div className="hidden md:block">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <Thoughts darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </main>

    </div>
);
}