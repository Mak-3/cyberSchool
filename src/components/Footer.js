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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
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
                support@cyberschool.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 sm:flex-row">
        <p className="text-sm text-gray-200">
          © Copyright 2024 Company. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
