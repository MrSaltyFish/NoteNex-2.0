import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const CalendarPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - fixed width */}
      <div className="w-[60px]">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header - fixed height */}
        <div className="h-[64px]">
          <Header />
        </div>

        {/* PDF Viewer takes the rest */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/pdfs/academic-calendar-3_5_7-25_26.pdf"
            className="w-full h-full border-t-2 border-[#1F0033]"
            title="Academic Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
