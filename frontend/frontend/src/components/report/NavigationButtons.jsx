export default function NavigationButtons({
  currentStep,
  nextStep,
  previousStep,
}) {
  return (
    <div className="flex justify-between mt-12">

      <button
        disabled={currentStep === 1}
        onClick={previousStep}
        className="px-8 py-3 rounded-xl border border-slate-300 font-semibold disabled:opacity-40"
      >
        Previous
      </button>

      <button
        onClick={nextStep}
        className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold"
      >
        {currentStep === 4 ? "Submit" : "Next"}
      </button>

    </div>
  );
}