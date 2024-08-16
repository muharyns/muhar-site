import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl  lg:py-14 lg:px-8">
      <div className=" flex flex-col md:flex-row justify-between flex px-6 pt-14 lg:px-8 justify-between">
        <p className="text-slate-400 text-md font-['poppins']">
          Your feedback is welcome 👍🏻
        </p>
        <div className="flex flex-col gap-4">
          {" "}
          <a
            href="mailto:muharriana@gmail.com"
            target="_blank"
            className="text-slate-400 text-md font-['poppins']"
          >
            muharriana@gmail.com
          </a>
          <div className="flex flex-row gap-4 justify-start md:justify-end">
            <Link
              href="https://www.instagram.com/muharrinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke='var(--token-99be4c51-2148-4ccc-a429-a8c0492daafc, rgb(119, 126, 144)) /* {"name":"Gray"} */'
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                // style="width: 100%; height: 100%;"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/muharriana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke='var(--token-99be4c51-2148-4ccc-a429-a8c0492daafc, rgb(119, 126, 144)) /* {"name":"Gray"} */'
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                // style="width: 100%; height: 100%;"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              href="https://github.com/muharyns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke='var(--token-99be4c51-2148-4ccc-a429-a8c0492daafc, rgb(119, 126, 144)) /* {"name":"Gray"} */'
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                // style="width: 100%; height: 100%;"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
