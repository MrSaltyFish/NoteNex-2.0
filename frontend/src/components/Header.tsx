import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 px-8 py-4 z-50 bg-[#FEFEFE] text-[#1F0033] shadow-md">
      <div className="mx-auto flex justify-between items-center">
        {/* Left: Logo / Brand */}
        <div className="text-xl font-bold tracking-tight">NoteNex 🚀</div>

        {/* Right: Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/request-feature"
              className="hover:text-blue-400 transition-colors"
            >
              Request Feature
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
