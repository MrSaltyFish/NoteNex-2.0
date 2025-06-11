import { Link } from "react-router-dom";

const sidebarLinks = [
  { title: "Homepage", icon: "/icons/home.png", route: "/" },
  { title: "PDFs", icon: "/icons/pdf-file.png", route: "/pdfs" },
  { title: "Recent Notices", icon: "/icons/notice.png", route: "/notices" },
  {
    title: "Question Papers",
    icon: "/icons/question.png",
    route: "/questions",
  },
  {
    title: "Academic Calendar",
    icon: "/icons/calendar.png",
    route: "/calendar",
  },
  { title: "Syllabus", icon: "/icons/syllabus.png", route: "/syllabus" },
  { title: "Subjects", icon: "/icons/book.png", route: "/subjects" },
];

const Sidebar = () => {
  return (
    <aside
      className="
        fixed top-[64px] left-0
        h-[calc(100vh-64px)]
        w-[60px] hover:w-[250px]
        bg-[#FEFEFE] text-[#1F0033]
        transition-all duration-300 ease-in-out
        overflow-hidden z-40 shadow-md
        group
      "
    >
      <nav className="flex flex-col">
        {sidebarLinks.map((link) => (
          <Link
            key={link.title}
            to={link.route}
            className="
              flex items-center w-full h-[60px]
              px-4 hover:bg-[#f0f0f0] transition-colors
            "
          >
            <div className="min-w-[40px] min-h-[40px] p-2 rounded flex items-center justify-center">
              <div className="w-[40px] h-[40px] p-2 rounded flex items-center justify-center flex-shrink-0">
                <img
                  src={link.icon}
                  alt={link.title}
                  className="w-[24px] h-[24px] object-contain"
                />
              </div>
            </div>
            <span
              className="
                ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100
                transition-opacity duration-300 text-base font-medium
              "
            >
              {link.title}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
