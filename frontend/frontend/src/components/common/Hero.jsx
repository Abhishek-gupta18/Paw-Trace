import {
  ArrowRight,
  MapPinned,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-emerald-50 py-20 overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">

              <Sparkles size={18} />

              AI Powered Cat Rescue Platform

            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-800">

              Helping Lost Cats

              <span className="text-orange-500">

                {" "}Find Their Way Home

              </span>

            </h1>

            <p className="text-slate-600 mt-8 text-lg leading-8">

              PawTrace combines AI Vision, community volunteers,
              and real-time mapping to reunite lost cats with
              their loving families faster than ever before.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <PrimaryButton>

                Report Lost Cat

                <ArrowRight className="inline ml-2 w-5 h-5" />

              </PrimaryButton>

              <SecondaryButton>

                <MapPinned className="inline mr-2 w-5 h-5" />

                View Community Map

              </SecondaryButton>

            </div>

            <div className="flex gap-12 mt-14">

              <div>

                <h2 className="text-3xl font-bold text-orange-500">
                  1200+
                </h2>

                <p className="text-slate-500">
                  Cats Reunited
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-orange-500">
                  400+
                </h2>

                <p className="text-slate-500">
                  Volunteers
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-orange-500">
                  96%
                </h2>

                <p className="text-slate-500">
                  AI Accuracy
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=900"
              alt="Cat"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />

            <div className="absolute -bottom-6 left-5 bg-white shadow-xl rounded-2xl p-4">

              <p className="font-semibold text-orange-500">
                AI Match Found
              </p>

              <p className="text-sm text-slate-500">
                96% Similarity
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;