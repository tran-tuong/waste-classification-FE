import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-xl transition-all duration-300 ease-in-out
      bg-gradient-to-br from-green-900/40 via-green-500/40 to-green-800/40 hover:from-green-900 hover:via-green-500 hover:to-green-800
      hover:scale-110 hover:shadow-2xl hover:rotate-12
      text-white flex items-center justify-center w-14 h-14 lg:w-15 lg:h-15
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={28} strokeWidth={3} />
    </button>
  );
}