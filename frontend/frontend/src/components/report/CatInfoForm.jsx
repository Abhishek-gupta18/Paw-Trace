import { Cat } from "lucide-react";

export default function CatInfoForm() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Cat className="text-orange-500" />
          Cat Information
        </h2>

        <p className="text-slate-500 mt-2">
          Tell us about your furry friend.
        </p>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Cat Name */}

        <div>

          <label className="font-semibold text-slate-700">
            Cat Name
          </label>

          <input
            type="text"
            placeholder="e.g. Luna"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

        </div>

        {/* Breed */}

        <div>

          <label className="font-semibold text-slate-700">
            Breed
          </label>

          <select className="mt-2 w-full rounded-xl border border-slate-300 p-3">

            <option>Select Breed</option>

            <option>Persian</option>

            <option>Siamese</option>

            <option>Maine Coon</option>

            <option>British Shorthair</option>

            <option>Ragdoll</option>

            <option>Bengal</option>

            <option>Indian Billi</option>

            <option>Mixed</option>

          </select>

        </div>

        {/* Color */}

        <div>

          <label className="font-semibold text-slate-700">
            Coat Color
          </label>

          <input
            type="text"
            placeholder="Orange / White"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3"
          />

        </div>

        {/* Gender */}

        <div>

          <label className="font-semibold text-slate-700">
            Gender
          </label>

          <select className="mt-2 w-full rounded-xl border border-slate-300 p-3">

            <option>Select Gender</option>

            <option>Male</option>

            <option>Female</option>

          </select>

        </div>

        {/* Age */}

        <div>

          <label className="font-semibold text-slate-700">
            Approximate Age
          </label>

          <input
            type="number"
            placeholder="2 Years"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3"
          />

        </div>

        {/* Weight */}

        <div>

          <label className="font-semibold text-slate-700">
            Weight (Optional)
          </label>

          <input
            type="text"
            placeholder="4.5 kg"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3"
          />

        </div>

        {/* Eye Color */}

        <div>

          <label className="font-semibold text-slate-700">
            Eye Color
          </label>

          <input
            type="text"
            placeholder="Green"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3"
          />

        </div>

        {/* Microchip */}

        <div>

          <label className="font-semibold text-slate-700">
            Microchip ID (Optional)
          </label>

          <input
            type="text"
            placeholder="ABC12345"
            className="mt-2 w-full rounded-xl border border-slate-300 p-3"
          />

        </div>

      </div>

      {/* Special Marks */}

      <div>

        <label className="font-semibold text-slate-700">
          Special Marks / Features
        </label>

        <textarea
          rows="4"
          placeholder="White spot near left eye, broken tail..."
          className="mt-2 w-full rounded-xl border border-slate-300 p-4 resize-none"
        />

      </div>

      {/* Temperament */}

      <div>

        <label className="font-semibold text-slate-700">
          Temperament
        </label>

        <div className="flex flex-wrap gap-3 mt-4">

          {[
            "Friendly",
            "Shy",
            "Aggressive",
            "Playful",
            "Nervous",
          ].map((item) => (

            <button
              key={item}
              type="button"
              className="px-5 py-2 rounded-full border border-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Indoor Outdoor */}

      <div>

        <label className="font-semibold text-slate-700">
          Lifestyle
        </label>

        <div className="flex gap-8 mt-4">

          <label className="flex items-center gap-2">

            <input type="radio" name="life" />

            Indoor

          </label>

          <label className="flex items-center gap-2">

            <input type="radio" name="life" />

            Outdoor

          </label>

          <label className="flex items-center gap-2">

            <input type="radio" name="life" />

            Both

          </label>

        </div>

      </div>

    </div>
  );
}