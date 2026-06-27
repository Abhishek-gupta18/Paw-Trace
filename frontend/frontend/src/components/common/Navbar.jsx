
import Logo from './Logo'; // Adjust the import path if your Logo file is named differently
import { Link } from 'react-router-dom';
export default function Navbar() {
  const links = ['Features', 'How It Works', 'Community', 'Volunteer', 'About Us', 'Contact'];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-50">
      {/* Integrated Custom Logo */}
      <Logo />

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
            className="text-[15px] font-semibold tracking-tight text-slate-800 hover:text-orange-500 transition-all duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link to="/login" className="px-5 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-all">
          Login
        </Link>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}