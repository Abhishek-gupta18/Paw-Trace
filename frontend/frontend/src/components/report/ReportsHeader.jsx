import { FileText } from "lucide-react";

export default function ReportsHeader() {
  return (
    <div className="mb-8">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

          <FileText
            size={30}
            className="text-orange-500"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold text-slate-800">

            Cat Reports

          </h1>

          <p className="text-slate-500 mt-1">

            View, search and manage all lost & found cat reports.

          </p>

        </div>

      </div>

    </div>
  );
}