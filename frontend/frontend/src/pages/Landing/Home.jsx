
import { PawPrint, MapPin, Cat,Users,Bot,FileText } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import StatCard from '../../components/common/StatCard';
import VolunteerBanner from '../../components/common/VolunteerBanner';

export default function Home() {
 const statsData = [
  {
    icon: <Cat className="w-8 h-8 text-orange-500" />,
    count: "1200+",
    label: "Cats Reunited",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    count: "400+",
    label: "Volunteers",
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-500" />,
    count: "96%",
    label: "AI Accuracy",
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-500" />,
    count: "1500+",
    label: "Reports",
  },
];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-slate-800 antialiased selection:bg-orange-100 selection:text-orange-600">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center pt-4">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100/70 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-orange-600 uppercase">
              <span>✨ AI Powered</span>
              <span className="text-orange-200">•</span>
              <span>Community Driven</span>
              <span className="text-orange-200">•</span>
              <span>Fast Reunions</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.1]">
              Helping Lost Cats <br />
              Find <span className="text-orange-500">Their Way Home</span>
            </h1>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
              PawTrace uses AI vision, real-time location tracking and a network of caring volunteers to help lost cats reunite with their families.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2">
                <PawPrint className="w-4 h-4 fill-white text-white" /> Report Lost Cat
              </button>
              <button className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-2xl shadow-sm transition-all flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 fill-emerald-100" /> View Community Map
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {statsData.map((stat, idx) => (
                <StatCard key={idx} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Section Reference to Image Asset */}
          <div className="lg:col-span-7 flex justify-center relative">
            <img 
              src="/homeBack.png" 
              alt="PawTrace App Interface Dashboard Graphic" 
              className="w-full max-w-[680px] h-auto object-contain drop-shadow-md rounded-2xl"
            />
          </div>
        </div>

        {/* Lower Banner Section */}
        <div className="mt-16">
          <VolunteerBanner />
        </div>
      </main>
    </div>
  );
}