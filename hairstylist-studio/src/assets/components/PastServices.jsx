import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const images = [
  `${BASE}images/avenue.webp`,
  `${BASE}images/avenue6.webp`,
  `${BASE}images/avenue2.webp`,
  `${BASE}images/avenue3.webp`,
  `${BASE}images/avenue4.webp`,
  `${BASE}images/avenue5.webp`,
  `${BASE}images/avenue7.webp`,
  `${BASE}images/avenue8.webp`,
  `${BASE}images/avenue9.webp`,
  `${BASE}images/avenue10.webp`,
  `${BASE}images/avenue11.webp`,
  `${BASE}images/avenue12.webp`,
];

export default function CarouselSection({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`text-center py-6 ${darkMode ? "bg-black" : "bg-gray-100"}`}>
        <h1 className="text-3xl font-bold text-center text-pink-500">Customer's Cam</h1>
      </div>
      <section
        className={`w-full px-4 md:px-10 py-16 transition-colors duration-300 ${
          darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10">

          {/* Carousel */}
          <div
            className="w-full md:w-3/5 flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ height: "500px" }}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                transition: "transform 0.6s ease-in-out",
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="h-full flex-shrink-0"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover object-center"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/5 flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold">Where Every Hair Tells a Story</h2>
            <p className="text-base leading-relaxed opacity-80">
              At our studio, we believe that great hair is more than just a style —
              it's an expression of who you are. Our skilled stylists bring years of
              experience and a passion for precision to every appointment, whether
              you're after a bold new look or a classic trim.
            </p>
            <p className="text-base leading-relaxed opacity-80">
              We use only the finest products to nourish and protect your hair,
              ensuring every visit leaves you feeling confident and refreshed.
              From cuts and colours to treatments and styling, we offer a full
              range of services tailored to your unique needs.
            </p>
            <p className="text-base leading-relaxed opacity-80">
              Step into a space where creativity meets care. Your hair deserves
              nothing less than the best — and that's exactly what we deliver,
              every single time.
            </p>
          </div>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-pink-500 w-4"
                  : darkMode
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </section>
    </>
  );
}