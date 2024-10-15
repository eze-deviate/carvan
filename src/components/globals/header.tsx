import { icons } from "@/constants";
import SvgAtom from "../icons/svg-atom";
import { BellIcon } from "@radix-ui/react-icons";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="/assets/svgs/logo-with-text.svg"
          alt="Caravan logo"
          className="h-10 mr-2"
        />
        {/* <SvgAtom iconName={icons.iconWithText} /> */}
        {/* <span className="text-xl font-bold text-black">Caravan</span> */}
      </div>
      <nav className="flex space-x-6">
        <a href="/" className="text-black text-sm hover:text-blue-500">
          Home
        </a>
        <a href="/library" className="text-black text-sm hover:text-blue-500">
          My Library
        </a>
        <a
          href="/subscription"
          className="text-black text-sm hover:text-blue-500"
        >
          Subscription
        </a>
      </nav>
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <input
          type="text"
          placeholder="Search for books or quizzes"
          className="bg-transparent focus:outline-none text-sm w-64"
        />
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l4 4"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h16v16H4V4z"
            />
          </svg>
        </button>
        <button>
          <BellIcon className="h-5 w-5" />
        </button>
        <img
          src="/path-to-profile-image.jpg"
          alt="User profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
