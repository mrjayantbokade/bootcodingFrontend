import {
  GraduationCap,
  Building,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SolutionItem {
  title: string;
  description: string;
  icon: JSX.Element;
  bg: string;
}

const SolutionPopup: React.FC = () => {
  const useCases: SolutionItem[] = [
    {
      title: "Learning & Development",
      description: "Scale skills with multilingual training videos.",
      icon: <GraduationCap size={18} />,
      bg: "bg-gradient-to-r from-transparent to-[#c7d2fe]/20",
    },
    // {
    //   title: "Sales Enablement",
    //   description: "Train your sales reps and help them close more deals.",
    //   icon: <Briefcase  size={18} />,
    //   bg: "bg-gradient-to-r from-transparent to-[#fde68a]/20",
    // },
    // {
    //     title: "Marketing",
    //     description: "Produce branded product videos in minutes.",
    //     icon: <Megaphone size={18} />,
    //     bg: "bg-gradient-to-r from-transparent to-[#fca5a5]/20",
    //   },
      {
        title: "Business Operations",
        description: "Deliver consistent updates with video templates.",
        icon: <Building size={18} />,
        bg: "bg-gradient-to-r from-transparent to-[#6ee7b7]/20",
      },
      {
        title: "Knowledge Management",
        description: "Turn your knowledge bases into engaging videos.",
        icon: <BookOpen size={18} />,
        bg: "bg-gradient-to-r from-transparent to-[#a5b4fc]/20",
      },
      {
        title: "IT & Cybersecurity",
        description: "Train employees on security and compliance with videos.",
        icon: <ShieldCheck size={18} />,
        bg: "bg-gradient-to-r from-transparent to-[#f87171]/20",
      },
   
  ];

  return (
    <div className="bg-gradient-to-r from-[#0e1228]   to-[#020f4e] w-fit rounded-2xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 px-4  border-r-2 border-slate-500/30 mt-5">
          <div className="bg-gradient-to-r from-slate-500/10 text-white p-3 rounded-xl">
            <h2 className="flex items-center text-lg font-semibold text-gray-400">
              <span className="mr-2 py-2 flex justify-center itce"><HeartHandshake size={24} /></span> Solutions
            </h2>
          </div>
        </div>

        {/* Grid Content */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 pt-5">
          {useCases.map((item, index) => (
            <div
              className="bg-[#0a1237]  border-[0.1px] border-blue-950/60 rounded-2xl overflow-hidden h-auto"
              key={index}
            >
              <div className={` px-4 py-3 opacity-80 h-1/3 ${item.bg}`}></div>
              <div>
                <div className=" relative  -top-5  ${item.bg}/10 border-2  border-slate-500/30 rounded-sm w-fit p-1  left-3 ">
                  <span className={`text-slate-300 `}>{item.icon}</span>
                </div>
                <h3 className="relative -top-4 left-3 text-md  font-semibold text-slate-300">
                  {item.title}
                </h3>
                <p className="relative -top-4 left-3 text-slate-400 text-xs font-normal pb-2 w-5/6 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Link to="/contact">
        <div className="flex justify-between font-black text-md tracking-wide items-center bg-white text-blue-950 p-3 rounded-b-xl mt-4">
          <p>Get A Free Trail Now | Book demo</p>
          <div className=" text-sm flex items-center gap-1">
            <button className=" text-blue-900  py-2    ">Get started</button>
            <p className="textblue-200  font-black cursor-pointer ">→</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SolutionPopup;
