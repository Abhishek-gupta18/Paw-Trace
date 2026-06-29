import {
  Cat,
  MapPin,
 
  Phone,
  Mail,
  BadgeDollarSign,
  CheckCircle2,
  Pencil,
} from "lucide-react";

export default function ReviewSubmit() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">

          <CheckCircle2 className="text-green-500" />

          Review Your Report

        </h2>

        <p className="text-slate-500 mt-2">

          Please verify all information before submitting.

        </p>

      </div>

      {/* Images */}

      <div className="bg-white rounded-3xl border p-6">

        <div className="flex justify-between items-center mb-5">

          <h3 className="text-xl font-bold">
            Uploaded Images
          </h3>

          <button className="flex items-center gap-2 text-orange-500 font-semibold">

            <Pencil size={18} />

            Edit

          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="h-52 bg-slate-100 rounded-2xl"></div>

          <div className="h-52 bg-slate-100 rounded-2xl"></div>

          <div className="h-52 bg-slate-100 rounded-2xl"></div>

        </div>

      </div>

      {/* Cat Information */}

      <div className="bg-white rounded-3xl border p-6">

        <div className="flex justify-between">

          <h3 className="text-xl font-bold flex items-center gap-2">

            <Cat className="text-orange-500"/>

            Cat Information

          </h3>

          <button className="text-orange-500 flex items-center gap-2">

            <Pencil size={18}/>

            Edit

          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <Info title="Name" value="Luna"/>

          <Info title="Breed" value="Persian"/>

          <Info title="Color" value="White"/>

          <Info title="Gender" value="Female"/>

          <Info title="Age" value="2 Years"/>

          <Info title="Eye Color" value="Green"/>

        </div>

        <div className="mt-6">

          <h4 className="font-semibold">

            Special Marks

          </h4>

          <p className="text-slate-500 mt-2">

            White patch near left eye.

          </p>

        </div>

      </div>

      {/* Lost Location */}

      <div className="bg-white rounded-3xl border p-6">

        <div className="flex justify-between">

          <h3 className="text-xl font-bold flex items-center gap-2">

            <MapPin className="text-orange-500"/>

            Last Seen Location

          </h3>

          <button className="text-orange-500 flex items-center gap-2">

            <Pencil size={18}/>

            Edit

          </button>

        </div>

        {/* Mini Map */}

        <div className="mt-6 h-64 bg-slate-100 rounded-2xl flex items-center justify-center">

          Leaflet Mini Map

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <Info title="Date" value="15 June 2026"/>

          <Info title="Time" value="7:30 PM"/>

          <Info title="Address" value="Sector 18, Noida"/>

          <Info title="Landmark" value="Near Metro Station"/>

        </div>

      </div>

      {/* Contact */}

      <div className="bg-white rounded-3xl border p-6">

        <h3 className="text-xl font-bold">

          Contact Details

        </h3>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <Info
            icon={<Phone size={18}/>}
            title="Phone"
            value="+91 9876543210"
          />

          <Info
            icon={<Mail size={18}/>}
            title="Email"
            value="owner@email.com"
          />

          <Info
            icon={<BadgeDollarSign size={18}/>}
            title="Reward"
            value="₹5000"
          />

        </div>

      </div>

      {/* AI Score */}

      <div className="bg-orange-50 rounded-3xl border border-orange-200 p-6">

        <h3 className="font-bold text-xl">

          AI Report Completeness

        </h3>

        <div className="mt-5 w-full bg-orange-200 rounded-full h-4">

          <div className="bg-orange-500 h-4 rounded-full w-[95%]"></div>

        </div>

        <p className="mt-3 font-semibold text-orange-600">

          95% Complete

        </p>

        <p className="text-sm text-slate-600 mt-2">

          Great! Your report contains enough details for AI facial matching.

        </p>

      </div>

      {/* Submit */}

      <button className="w-full py-5 bg-orange-500 hover:bg-orange-600 rounded-2xl text-white text-lg font-bold transition">

        🚀 Submit Lost Cat Report

      </button>

    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div>

      <div className="flex items-center gap-2 text-slate-600">

        {icon}

        <span className="font-semibold">

          {title}

        </span>

      </div>

      <p className="mt-2 text-lg font-bold text-slate-800">

        {value}

      </p>

    </div>
  );
}