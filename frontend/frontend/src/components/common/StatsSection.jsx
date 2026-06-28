import {
  Cat,
  Users,
  Bot,
  FileText,
} from "lucide-react";

import StatCard from "./StatcardSection";

export default function StatsSection() {
  const stats = [
    {
      title: "Active Reports",
      value: "127",
      icon: <Cat size={30} />,
      bgColor: "bg-orange-100",
      textColor: "text-orange-500",
      change: "+12 this week",
    },
    {
      title: "Volunteers Online",
      value: "58",
      icon: <Users size={30} />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      change: "+8 available now",
    },
    {
      title: "AI Match Accuracy",
      value: "96%",
      icon: <Bot size={30} />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      change: "+1.5% improvement",
    },
    {
      title: "Cats Reunited",
      value: "1,284",
      icon: <FileText size={30} />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      change: "+24 this month",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}

    </section>
  );
}