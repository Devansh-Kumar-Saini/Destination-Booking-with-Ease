import React, { useRef, useEffect } from "react";
import { destinations } from "../data/Destinations";

const Destinations: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const originalChildren = Array.from(scrollContainer.children);
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    let animationFrame: number;
    let scrollSpeed = 4; // Increased speed (px per frame)

    const animate = () => {
      if (!scrollContainer || isPaused.current) return;
      scrollContainer.scrollLeft += scrollSpeed; // Change to += for rightward movement

      // When scrolled past the end, reset to the start
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners
    scrollContainer.addEventListener("mouseenter", () => { isPaused.current = true; });
    scrollContainer.addEventListener("mouseleave", () => { isPaused.current = false; animate(); });

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        const total = scrollContainer.children.length;
        for (let i = total - 1; i >= destinations.length; i--) {
          scrollContainer.removeChild(scrollContainer.children[i]);
        }
      }
      // Clean up event listeners
      scrollContainer.removeEventListener("mouseenter", () => { isPaused.current = true; });
      scrollContainer.removeEventListener("mouseleave", () => { isPaused.current = false; animate(); });
    };
  }, []);

  return (
    <section id="destinations" className="bg-[#cdd7cd] py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Popular Destinations
      </h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-8 px-8 pb-4 hide-scrollbar scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {destinations.map((dest, idx) => (
          <div
            key={dest.id + "-" + idx}
            className="flex-shrink-0 w-80 rounded-3xl bg-white shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {dest.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-lg">
          Press{" "}
          <span className="bg-blue-500 text-white px-2 py-1 rounded mx-1">C</span>
          to view recent work
        </span>
      </div>
    </section>
  );
};

export default Destinations;