import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiBox,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#00205B]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <FiBox className="w-8 h-8 text-deep-purple-accent-400" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-400 uppercase">
                CyberSchool
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-400">
                AI training for cybersecurity professionals. From machine
                learning, deep learning, agentic AI, and LLMs,etc. we help
                cybersecurity professionals to automate, predict, and secure
                businesses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide text-gray-400">About</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/cyberschool/#about"
                    className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About CyberSchool
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/cyberschool/#work-with-us"
                    className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Work with Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold tracking-wide text-gray-400 mb-4">
                Follow Us
              </p>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="text-gray-200 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="text-gray-200 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="text-gray-200 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram className="h-6 w-6" />
                </a>

                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="text-gray-200 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiYoutube className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="text-gray-200 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="h-6 w-6" />
                </a>
                <div></div>
              </div>
            </div>

            <div>
              <p className="font-semibold tracking-wide text-gray-400">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-gray-200">
                  <FiPhone className="mr-2 h-5 w-5" />
                  +91 12345 67890
                </li>
                <li className="flex items-center text-gray-200">
                  <FiMail className="mr-2 h-5 w-5" />
                  info@londoncyberschool.ai
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 border-t border-gray-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-y-4 text-sm text-white">
            {/* Left links */}
            <div className="flex justify-between md:justify-start gap-6 flex-wrap text-sm">
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <p className="text-sm">© London Business School 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
