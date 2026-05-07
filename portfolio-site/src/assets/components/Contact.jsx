import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello Bolaji! I just filled your contact form.

*Name:* ${form.firstName} ${form.lastName}
*Phone:* ${form.number}
*Email:* ${form.email}
*Budget:* ${form.budget}
*Message:* ${form.message}`;

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/2348XXXXXXXXX?text=${encoded}`, "_blank");
    };

    const inputClass = `w-full px-4 py-3 rounded-xl outline-none transition-colors duration-200 text-sm
        ${darkMode
            ? "bg-[#2a2a2a] text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
            : "bg-[#e8e8e8] text-black placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
        }`;

    const labelClass = `block text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`;

    return (
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}>
                    Get In
                </h1>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}>
                    Touch
                </h1>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 max-w-2xl"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className={labelClass}>First Name</label>
                        <input type="text" name="firstName" placeholder="Your First Name" value={form.firstName} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div className="flex-1">
                        <label className={labelClass}>Last Name</label>
                        <input type="text" name="lastName" placeholder="Your Last Name" value={form.lastName} onChange={handleChange} required className={inputClass} />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className={labelClass}>Phone Number</label>
                        <input type="tel" name="number" placeholder="+234 000 000 0000" value={form.number} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div className="flex-1">
                        <label className={labelClass}>Email</label>
                        <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required className={inputClass} />
                    </div>
                </div>

                <div>
                    <label className={labelClass}>Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange} required className={`${inputClass} cursor-pointer`}>
                        <option value="" disabled>Select your budget...</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                        <option value="Let's discuss">Let's discuss</option>
                    </select>
                </div>

                <div>
                    <label className={labelClass}>Message</label>
                    <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors duration-200">
                    Submit
                </button>
            </motion.form>

        </section>
    );
}