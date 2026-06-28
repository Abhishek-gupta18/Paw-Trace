import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

export default function VolunteerBannerDashboard() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white shadow-xl">

      {/* Decorative Circles */}

      <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-10">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 mb-5 backdrop-blur">

            <HeartHandshake size={18} />

            <span className="text-sm font-semibold">
              Community Heroes
            </span>

          </div>

          <h2 className="text-4xl font-bold leading-tight">

            Become a Volunteer and
            <br />

            Help Reunite Lost Cats ❤️

          </h2>

          <p className="mt-5 text-orange-50 text-lg leading-8">

            Join hundreds of compassionate volunteers who help
            locate lost cats using AI-powered technology,
            community collaboration, and real-time reports.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-orange-500 transition hover:scale-105">

              Become a Volunteer

              <ArrowRight size={20} />

            </button>

            <button className="rounded-2xl border border-white/40 px-6 py-4 font-semibold transition hover:bg-white/10">

              Learn More

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex items-center justify-center">

          {/* Glow */}

          <div className="absolute h-60 w-60 rounded-full bg-white/20 blur-3xl"></div>

          {/* Illustration Card */}

          <div className="relative rounded-3xl bg-white/15 p-8 backdrop-blur-md border border-white/20 shadow-2xl">

            <div className="flex justify-center">

              <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center">

                <ShieldCheck
                  size={60}
                  className="text-orange-500"
                />

              </div>

            </div>

            <h3 className="mt-6 text-center text-2xl font-bold">

              Trusted Volunteers

            </h3>

            <p className="mt-3 text-center text-orange-100">

              Verified members helping reunite
              families every day.

            </p>

            <div className="mt-6 flex justify-center gap-8">

              <div className="text-center">

                <h4 className="text-3xl font-bold">
                  400+
                </h4>

                <p className="text-sm text-orange-100">
                  Volunteers
                </p>

              </div>

              <div className="text-center">

                <h4 className="text-3xl font-bold">
                  1.2K+
                </h4>

                <p className="text-sm text-orange-100">
                  Cats Saved
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}