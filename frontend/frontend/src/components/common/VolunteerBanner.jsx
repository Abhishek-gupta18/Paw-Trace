

export default function VolunteerBanner() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80'
  ];

  return (
    <div className="bg-orange-50/60 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-orange-100/50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-orange-200">
          🧡
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">Together, we can bring every lost cat back home.</p>
          <p className="text-xs font-bold text-orange-500 mt-0.5">Be a hero. Be a volunteer.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Avatar Stack */}
        <div className="flex -space-x-2.5">
          {avatars.map((url, index) => (
            <img key={index} src={url} alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          ))}
          <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-600">
            +350
          </div>
        </div>

        <button className="bg-[#148348] hover:bg-[#0f6b3a] text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm">
          <span>💚</span> Join Our Volunteer Network
        </button>
      </div>
    </div>
  );
}