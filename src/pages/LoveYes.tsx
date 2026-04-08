import { useNavigate } from "react-router-dom";

const LoveYes = () => {
  const navigate = useNavigate();

  const kisses = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2.5 + Math.random() * 4,
    size: 20 + Math.random() * 30,
    emoji: ["💋", "😘", "❤️", "💕", "💖", "💗"][Math.floor(Math.random() * 6)],
  }));

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 25%, #f06292 50%, #e91e63 75%, #c2185b 100%)",
      }}
    >
      {/* Floating kisses */}
      {kisses.map((k) => (
        <span
          key={k.id}
          className="absolute pointer-events-none select-none"
          style={{
            left: `${k.left}%`,
            bottom: "-50px",
            fontSize: `${k.size}px`,
            animation: `kissFloat ${k.duration}s ease-in-out ${k.delay}s infinite`,
          }}
        >
          {k.emoji}
        </span>
      ))}

      <div className="relative z-10 text-center px-6">
        <div className="text-7xl mb-6" style={{ animation: "pulse 1.5s ease-in-out infinite" }}>
          💋
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: "white", textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
        >
          I knew it! 🥰
        </h1>
        <p
          className="text-xl md:text-2xl mb-2"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          You make my heart so happy! 💖
        </p>
        <p
          className="text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          I love you more than words can say 💕
        </p>

        <button
          onClick={() => navigate("/love")}
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.25)",
            color: "white",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        >
          Say it again 💗
        </button>
      </div>

      <style>{`
        @keyframes kissFloat {
          0% { transform: translateY(0) scale(0.5) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(1.2) rotate(360deg); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default LoveYes;
