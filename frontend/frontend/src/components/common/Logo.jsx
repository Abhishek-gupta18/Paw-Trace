import { PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
        <PawPrint className="w-6 h-6 text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          PawTrace
        </h1>

        <p className="text-xs text-slate-500 -mt-1">
          AI Lost Cat Finder
        </p>
      </div>
    </Link>
  );
};

export default Logo;