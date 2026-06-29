import { useState } from "react";

import StepIndicator from "../../components/report/StepIndicator";
import NavigationButtons from "../../components/report/NavigationButtons";

import ImageUploader from "../../components/report/ImageUploader";
import CatInfoForm from "../../components/report/CatInfoForm";
import LostLocationForm from "../../components/report/LostLocationForm";
import ReviewSubmit from "../../components/report/ReviewSubmit";

export default function ReportLostCat() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-slate-800">
          Report Lost Cat
        </h1>

        <p className="text-slate-500 mt-2">
          Help us reunite your furry friend with their family ❤️
        </p>

        <div className="mt-12">

          <StepIndicator currentStep={currentStep} />

        </div>

        <div className="mt-14 min-h-[420px]">

          {currentStep === 1 && <ImageUploader />}

          {currentStep === 2 && <CatInfoForm />}

          {currentStep === 3 && <LostLocationForm />}

          {currentStep === 4 && <ReviewSubmit />}

        </div>

        <NavigationButtons
          currentStep={currentStep}
          nextStep={nextStep}
          previousStep={previousStep}
        />

      </div>

    </div>
  );
}