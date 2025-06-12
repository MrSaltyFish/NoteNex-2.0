import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import InfoCard from "../components/InfoCard";
import InfoCardHolder from "../components/InfoCardHolder";
import LargeCardHolder from "../components/LargeCardHolder";
import { Link } from "react-router-dom";

const sampleData = [
  {
    imageSrc: "/images/ai.jpg",
    heading: "Unit 1: Compiler Design",
    tags: ["101", "Basics", "Compiler Design"],
    body: "Exploring how compiler design has reshaped history and coding.",
  },
  {
    imageSrc: "/images/blockchain.jpg",
    heading: "Unit 2: Compiler Design",
    tags: ["Lexing", "C++", "Compiler Design"],
    body: "An overview of how compilers operate in layers such as lexing, parsing, conversion to bytecode, AST.",
  },
];

const RequestFeature = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        {/* Main content */}
        <div className="p-8 mt-[64px] ml-[60px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-[500px_500px_350px] gap-x-8 mb-10">
            {/* <InfoCard />
            <InfoCard />
            <InfoCard /> */}
            <InfoCardHolder />
          </div>

          {/* Section heading */}
          <h2 className="text-lg font-semibold text-[#1F0033] mb-4">
            Recent PDFs
          </h2>

          {/* LinkCard row */}
          <div className="grid grid-cols-[500px_500px_350px] gap-x-8">
            {/* Large card that spans 2 columns */}
            <div className="col-span-2">
              <LargeCardHolder cards={sampleData} />
            </div>

            {/* Third column (reserved) */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFeature;
