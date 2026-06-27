import  { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const canvasRef = useRef(null);

  // HTML5 Canvas implementation to draw and handle the cropped cat asset safely
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    // Points directly to public/cat.png where you stored watermarked_img_15324910130246782000.png
    img.src = '/cat.png'; 

    img.onload = () => {
      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Compute scaling parameters to properly center the cropped lying cat
      const targetWidth = 260;
      const targetHeight = 150;
      const x = (canvas.width - targetWidth) / 2;
      const y = (canvas.height - targetHeight) / 2;

      ctx.drawImage(img, x, y, targetWidth, targetHeight);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging into PawTrace with credentials:', { email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F1EA] p-0 sm:p-6">
      {/* Container Frame - behaves as an edge-to-edge mobile app on phone screens, and centers gracefully on laptops */}
      <div className="w-full max-w-md min-h-screen sm:min-h-0 bg-[#F9C334] sm:rounded-[48px] px-8 pt-12 pb-10 shadow-xl relative flex flex-col justify-between sm:justify-start items-center overflow-y-auto">
        
        {/* Brand Header */}
        <div className="w-full flex flex-col items-center mt-4 sm:mt-2 mb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-black text-white tracking-tight uppercase font-sans">
              PawTrace
            </h1>
            <span className="text-3xl filter drop-shadow">🐾</span>
          </div>
          <p className="text-[#210F21]/70 text-xs font-bold uppercase tracking-widest mt-1">
            AI Vision Cat Finder
          </p>
        </div>

        {/* Dynamic Canvas Container for the cropped cat asset */}
        <div className="w-full flex justify-center my-2 max-h-[170px]">
          <canvas 
            ref={canvasRef} 
            width={340} 
            height={170}
            className="w-full max-w-[340px] h-[170px] object-contain"
          />
        </div>

        {/* Input Form Fields Wrapper */}
        <form onSubmit={handleSubmit} className="w-full space-y-4 px-1">
          {/* Email Element */}
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-[#210F21] text-white placeholder-neutral-400 rounded-full border-none outline-none focus:ring-2 focus:ring-white/40 transition-all text-base shadow-lg"
            />
          </div>

          {/* Password Element */}
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-6 pr-12 py-4 bg-[#210F21] text-white placeholder-neutral-400 rounded-full border-none outline-none focus:ring-2 focus:ring-white/40 transition-all text-base shadow-lg"
            />
            <span className="absolute inset-y-0 right-5 flex items-center text-neutral-400 cursor-pointer hover:text-white transition">
              🔒
            </span>
          </div>

          {/* Form Action Adjustments */}
          <div className="flex items-center justify-between px-3 text-xs font-bold text-[#210F21]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                className="rounded border-none bg-[#210F21] text-white focus:ring-0 w-4 h-4 cursor-pointer"
              />
              Remember me
            </label>
            <a href="#forgot" className="hover:underline transition-all">
              Forgot Password?
            </a>
          </div>

          {/* Main Action Call Trigger Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#210F21] hover:bg-[#331833] text-white font-extrabold rounded-full shadow-xl flex items-center justify-center gap-2 transition-all duration-150 transform active:scale-[0.99] mt-8 text-base"
          >
            Log In 
            <span className="text-xl">➔</span>
          </button>
        </form>

        {/* Alternative OAuth Methods Block */}
        <div className="w-full flex flex-col items-center mt-6">
          <div className="w-full flex items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-[#210F21]/40 mb-4">
            <div className="h-[1.5px] bg-[#210F21]/15 flex-1"></div>
            Or Log In With
            <div className="h-[1.5px] bg-[#210F21]/15 flex-1"></div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button type="button" className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md font-black text-blue-600 text-lg hover:scale-105 active:scale-95 transition-transform">f</button>
            <button type="button" className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md font-black text-red-500 text-lg hover:scale-105 active:scale-95 transition-transform">G</button>
            <button type="button" className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md text-lg hover:scale-105 active:scale-95 transition-transform">📸</button>
          </div>
        </div>

        {/* Dynamic Route Alternator Link */}
        <p className="text-center text-sm text-[#210F21] font-semibold mt-auto sm:mt-2">
          Already have an account?{' '}
          <Link to="/signup" className="font-black hover:underline text-[#210F21]">
    Sign Up
  </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;