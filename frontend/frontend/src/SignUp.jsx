import  { useState, useEffect, useRef } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const canvasRef = useRef(null);

  // HTML5 Canvas implementation to draw the standing cat safely
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    // Points directly to public/pawtrace_standing_cat.png
    img.src = '/pawtrace_standing_cat.png'; 

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate scaling metrics to properly center the standing cat asset
      const targetWidth = 180;
      const targetHeight = 150;
      const x = (canvas.width - targetWidth) / 2;
      const y = (canvas.height - targetHeight) / 2;

      ctx.drawImage(img, x, y, targetWidth, targetHeight);
    };
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreeTerms) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    console.log('Signing up to PawTrace:', { name, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F1EA] p-0 sm:p-6">
      {/* Container Frame - behaves as an edge-to-edge mobile app on phone screens, and centers on laptops */}
      <div className="w-full max-w-md min-h-screen sm:min-h-0 bg-[#F9C334] sm:rounded-[48px] px-8 pt-10 pb-8 shadow-xl relative flex flex-col justify-between sm:justify-start items-center overflow-y-auto">
        
        {/* Brand Header */}
        <div className="w-full flex flex-col items-center mt-2 mb-1">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-black text-white tracking-tight uppercase font-sans">
              PawTrace
            </h1>
            <span className="text-3xl filter drop-shadow">🐾</span>
          </div>
          <p className="text-[#210F21] text-sm font-extrabold mt-3 tracking-wide">
            App for every cat owner
          </p>
        </div>

        {/* Dynamic Canvas Container for the standing cat */}
        <div className="w-full flex justify-center my-1 max-h-[160px]">
          <canvas 
            ref={canvasRef} 
            width={340} 
            height={160}
            className="w-full max-w-[340px] h-[160px] object-contain"
          />
        </div>

        {/* White Rounded Card Layout mirroring your UI template mockup */}
        <div className="w-full bg-[#F5F3EC] rounded-[32px] p-6 shadow-md mt-2">
          <form onSubmit={handleSignUp} className="w-full space-y-3">
            
            {/* Name Input */}
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-5 py-3.5 bg-[#210F21] text-white placeholder-neutral-400 rounded-full border-none outline-none focus:ring-2 focus:ring-[#F9C334]/50 transition-all text-sm shadow-inner"
              />
            </div>

            {/* Create Password Input */}
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                className="w-full px-5 py-3.5 bg-[#210F21] text-white placeholder-neutral-400 rounded-full border-none outline-none focus:ring-2 focus:ring-[#F9C334]/50 transition-all text-sm shadow-inner"
              />
            </div>

            {/* Verify Password Input */}
            <div>
              <input
                type="password"
                required
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
                placeholder="Verify Password"
                className="w-full px-5 py-3.5 bg-[#210F21] text-white placeholder-neutral-400 rounded-full border-none outline-none focus:ring-2 focus:ring-[#F9C334]/50 transition-all text-sm shadow-inner"
              />
            </div>

            {/* Terms of Service Checkbox */}
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-bold text-[#210F21]">
              <input 
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="rounded border-none bg-[#210F21] text-white focus:ring-0 w-4 h-4 cursor-pointer"
              />
              <label htmlFor="terms" className="cursor-pointer select-none">
                I agree to the Terms of Service
              </label>
            </div>

            {/* Main CTA Trigger Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#210F21] hover:bg-[#331833] text-white font-extrabold rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-150 transform active:scale-[0.99] mt-4 text-sm"
            >
              Get Started ➔
            </button>
          </form>

          {/* Third Party OAuth Divider */}
          <div className="w-full flex flex-col items-center mt-5">
            <div className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#210F21]/40 mb-3">
              <div className="h-[1px] bg-[#210F21]/15 flex-1"></div>
              Or Sign Up With
              <div className="h-[1px] bg-[#210F21]/15 flex-1"></div>
            </div>

            {/* Social Icons matching mockups */}
            <div className="flex items-center gap-4 mb-2">
              <button type="button" className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md font-black text-blue-600 text-sm hover:scale-105 transition-transform">f</button>
              <button type="button" className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md font-black text-red-500 text-sm hover:scale-105 transition-transform">G</button>
              <button type="button" className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-sm hover:scale-105 transition-transform">📸</button>
            </div>
          </div>
        </div>

        {/* Bottom Route Alternate Links */}
        <div className="text-center mt-auto sm:mt-4 space-y-1">
          <p className="text-sm text-[#210F21] font-bold">
            Already have an account?{' '}
            <a href="#login" className="font-black underline text-[#210F21]">
              Sign In
            </a>
          </p>
          <a href="#privacy" className="block text-xs font-bold text-[#210F21]/60 underline hover:text-[#210F21]">
            Privacy Policy
          </a>
        </div>

      </div>
    </div>
  );
};

export default SignUp;