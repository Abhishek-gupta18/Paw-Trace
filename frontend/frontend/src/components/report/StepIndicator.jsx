import {
  Camera,
  Cat,
  MapPin,
  FileCheck,
} from "lucide-react";

const steps = [
  {
    title: "Images",
    icon: Camera,
  },
  {
    title: "Cat Info",
    icon: Cat,
  },
  {
    title: "Location",
    icon: MapPin,
  },
  {
    title: "Review",
    icon: FileCheck,
  },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-between w-full">

      {steps.map((step, index) => {
        const Icon = step.icon;

        const active = index + 1 <= currentStep;

        return (
          <div
            key={index}
            className="flex items-center flex-1"
          >
            <div className="flex flex-col items-center">

              <div
                className={`
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-slate-100 text-slate-400"
                  }
                `}
              >
                <Icon size={24} />
              </div>

              <span
                className={`
                  mt-3
                  text-sm
                  font-semibold

                  ${
                    active
                      ? "text-orange-500"
                      : "text-slate-400"
                  }
                `}
              >
                {step.title}
              </span>

            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1
                  h-1
                  mx-4
                  rounded-full

                  ${
                    currentStep > index + 1
                      ? "bg-orange-500"
                      : "bg-slate-200"
                  }
                `}
              />
            )}

          </div>
        );
      })}
    </div>
  );
}