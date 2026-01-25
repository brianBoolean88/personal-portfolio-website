import Image from "next/image";

export default function YouTubeShowcase() {
  const channelUrl = "https://www.youtube.com/@harplume";
  const videoId = "5dF5_L_PmWs";

  return (
    <section className="mt-12 px-6 flex justify-center items-start gap-12 flex-col lg:flex-row max-w-7xl mx-auto">

      {/* YouTube Logo with glow and particles */}
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-visible flex items-center justify-center"
      >
        {/* Rotating gradient ring */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 via-pink-500 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-spin-slow"></span>
        
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full animate-ping border-4 border-red-500 opacity-30"></span>
        <span className="absolute inset-0 rounded-full animate-pulse border-4 border-red-600 opacity-50 animation-delay-300"></span>
        
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-red-600 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></span>

        {/* Logo container */}
        <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Image
            src="/images/YoutubeIcon.png"
            alt="YouTube Logo"
            width={192}
            height={192}
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain group-hover:brightness-110 transition-all duration-300"
          />
        </div>
      </a>

      {/* Video Embed with decorative frame */}
      <div className="mt-8 relative flex-1 w-full min-w-0">
        
        {/* Animated corner accents */}
        <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-red-500 rounded-tl-2xl animate-pulse"></div>
        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-pink-500 rounded-tr-2xl animate-pulse animation-delay-150"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-pink-500 rounded-bl-2xl animate-pulse animation-delay-300"></div>
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-red-500 rounded-br-2xl animate-pulse animation-delay-450"></div>

        {/* Rotating gradient border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-500 via-purple-500 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient-rotate"></div>
        
        {/* Glowing particles */}
        <div className="absolute -inset-4 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-float-1 blur-sm"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float-2 blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-float-3 blur-sm"></div>
          <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float-4 blur-sm"></div>
        </div>

        {/* Main video container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-red-500/50 hover:ring-4 hover:ring-red-400 transition-all duration-300 group bg-black">
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
          
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="My YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-scan"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-rotate {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(20px, -30px) scale(1.5); opacity: 1; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-30px, 20px) scale(1.3); opacity: 1; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(25px, 25px) scale(1.4); opacity: 1; }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(-20px, -20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-rotate { 
          animation: gradient-rotate 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 8s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 5s ease-in-out infinite; }
        .animate-scan { animation: scan 8s linear infinite; }
        
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-450 { animation-delay: 450ms; }
      `}</style>

    </section>
  );
}