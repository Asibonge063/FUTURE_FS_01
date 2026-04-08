import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoveQuestion = () => {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [escaped, setEscaped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.random() * (rect.width - 120);
    const y = Math.random() * (rect.height - 50);
    setNoPos({ x, y });
    setEscaped(true);
  };

  // Floating hearts background
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 16 + Math.random() * 24,
  }));

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #ec407a 100%)",
      }}
    >
      {/* Floating hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute pointer-events-none select-none"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            animation: `floatUp ${h.duration}s ease-in-out ${h.delay}s infinite`,
            opacity: 0.5,
          }}
        >
          💕
        </span>
      ))}

      <div className="relative z-10 text-center px-6">
        <div className="text-6xl mb-6 animate-bounce">💖</div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#880e4f", fontFamily: "'Inter', sans-serif" }}
        >
          Do you still love me?
        </h1>
        <p className="text-lg mb-10" style={{ color: "#ad1457" }}>
          Choose wisely... 😏
        </p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => navigate("/love/yes")}
            className="px-10 py-4 text-xl font-bold rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #e91e63, #f44336)",
              color: "white",
              border: "none",
            }}
          >
            Yes 💗
          </button>

          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="px-10 py-4 text-xl font-bold rounded-full shadow-lg cursor-pointer transition-all"
            style={{
              background: escaped ? "transparent" : "#9e9e9e",
              color: escaped ? "transparent" : "white",
              border: escaped ? "none" : "none",
              position: escaped ? "absolute" : "relative",
              left: escaped ? `${noPos.x}px` : undefined,
              top: escaped ? `${noPos.y}px` : undefined,
              zIndex: 20,
            }}
          >
            No 💔
          </button>
        </div>

        {escaped && (
          <p className="mt-6 text-sm animate-pulse" style={{ color: "#c2185b" }}>
            Haha, you can't click No! 😜
          </p>
        )}
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoveQuestion;
