"use client";

import "./output.css";
import { useState } from "react";

import CardItem from "@/components/CardItem";

import Link from "next/link";
import { portfolios } from "@/lib/portfolio";

const skills = [
  {
    name: "Languages",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$24",
    description: "The essentials to provide your best work for clients.",
    features: ["HTML", "Javascript", "CSS", "PHP", "Python", "SQL"],
    mostPopular: false,
  },
  {
    name: "Frameworks",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$32",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Laravel",
      "Codeigniter",
      "React.Js",
      "Next.Js",
      "Wordpress",
      "Bootstrap",
      "Tailwind",
    ],
    mostPopular: true,
  },
  {
    name: "Tools",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$48",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Bash",
      "Git & Github",
      "Gulp",
      "Webpack",
      "Postman",
      " Google Search Console",
    ],
    mostPopular: false,
  },
];

const experiences = [
  {
    title: "Gloditechs",
    items: [
      "Translate design mockups and wireframes into code using Next.Js.",
      "Collaborate with UI designer and backend developers for seamless integration of user interfaces.",
      "Integrate backend APIs with Next.js using server-side APIs (API routes) or client-side data fetching.",
    ],
    location: "Remote",
    position: "Frontend Developer",
    year: "June 2023 – May 2024",
  },
  {
    title: "Transtrack.id",
    items: [
      "Developed corporate website using Laravel and blog site using WordPress CMS.",
      "Work closely with digital marketing team to support the site requirements and UI design team for the site interface.",
      "Collaborated with team to create client site authentication between multiple systems.",
    ],
    location: "Jakarta, Indonesia",
    position: "Fullstack Developer",
    year: "July 2022 – Dec 2022",
  },
  {
    title: "iMMAP",
    items: [
      "Modified web page to optimize the page’s performance for faster loading and browsing.",
      "Analyzing and solving technical issues to optimize website performance, planning & executing strategies to boost website in term of SEO and ranking in search engine.",
      "Proposed and implemented website architecture to build Product Library website and integration with Microsoft 365.",
      "Collaborated with global communication team to support website content updates on daily basis.",
    ],
    location: "Remote",
    position: "Web Developer",
    year: "July 2019 – Dec 2022",
  },
  {
    title: "Telkomsel",
    items: [
      "Maintained finance website application for financial workflow in Sumatera area including developed new features",
      "Developed HR platform as tool to evaluate employee talents and identifying potential leader",
      "Support the internal business by developed dashboard website to increase productivity, streamline operations in some departments",
    ],
    location: "Medan, Indonesia",
    position: "IT Developer",
    year: "Feb 2017 – June 2019",
  },
];

export default function Example() {
  const [activeTab, setActiveTab] = useState(experiences[0].title);

  return (
    <div className="bg-slate-50">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:max-w-7xl md:grid-cols-3 py-32 sm:py-32 lg:py-38">
          <div className="col-span-2 mb-5">
            <h2 className="text-4xl tracking-tight text-black font-bold sm:text-6xl font-bold">
              👋 Hi, I’m Muharriana
            </h2>
            <p className="mt-6 text-md text-gray-60 py-9">
              Experienced professional specializing in web development,
              proficient in front-end and back-end technologies including HTML,
              CSS, JavaScript, and various frameworks. Proven track record of
              creating responsive and intuitive web applications, managing
              RESTful APIs, integrating external systems, and designing and
              implementing database schemas.
            </p>
            <div class="flex flex-wrap justify-between">
              <div class="text-sm text-slate-500 ">
                I’m looking for new opportunities
                <p className="py-10">
                  {" "}
                  <a href="#portfolio"> 👇 Check some projects</a>
                </p>
              </div>
              <div class="">
                <p className="text-slate-500 text-sm">Indonesia</p>
                <a
                  href="mailto:muharriana@gmail.com"
                  className="text-main-50 text-sm"
                >
                  muharriana@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            {" "}
            <img
              src="/images/Muhar_BW.webp"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills
          </h2>
          <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl drop-shadow-md sm:mt-10 lg:mx-0 lg:max-w-none p-8 xl:p-10">
            <div className="grid md:grid-cols-3 gap-4">
              {skills.map((skill, skillIdx) => (
                <div key={skill.id}>
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={skill.id}
                        className="text-main-50 font-bold"
                        // className={classNames(
                        //   skill.mostPopular
                        //     ? "text-indigo-600"
                        //     : "text-gray-900",
                        //   "text-lg font-semibold leading-8"
                        // )}
                      >
                        {skill.name}
                      </h3>
                    </div>
                    {/* <p className="mt-4 text-sm leading-6 text-gray-600">
                    {skill.description}
                  </p> */}

                    <ul
                      role="list"
                      className="space-y-6 mt-8 space-y-3 lg:space-y-2 text-sm leading-6 text-gray-600  dark:border-slate-800"
                    >
                      {skill.features.map((feature) => (
                        <li
                          key={feature}
                          //className="rounded-md bg-main-20 px-4 py-2  text-indigo-600"
                          className="text-indigo-600"
                        >
                          {/* <CheckIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        /> */}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            
            </div> */}
        </div>
        <div className="mx-auto max-w-7xl">
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Experiences
                </h2>
              </div>

              <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl drop-shadow-md sm:mt-10 lg:mx-0 lg:max-w-none p-8 xl:p-10">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="sm:w-full md:w-1/4 lg:w-1/4">
                    <div className="flex flex-col ">
                      {experiences.map((exp) => (
                        <button
                          key={exp.title}
                          className={`py-2 text-left ${
                            activeTab === exp.title
                              ? // ? "rounded-md bg-main-20 text-indigo-600"
                                "text-main-50"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                          onClick={() => setActiveTab(exp.title)}
                        >
                          {exp.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="sm:w-full lg:w-3/4 p-2 lg:col-span-2">
                    {experiences.map((exp) => (
                      <div
                        key={exp.title}
                        className={activeTab === exp.title ? "block" : "hidden"}
                      >
                        <h5 className="font-semibold text-slate-900 dark:text-slate-200">
                          {exp.position}{" "}
                          <span className="text-main-50 text-bold">
                            @{exp.title}
                          </span>
                        </h5>
                        <p className="text-slate-400 text-sm mb-8 lg:mb-3">
                          {exp.year}
                        </p>
                        <ul className="space-y-6 lg:space-y-2 pl-4 text-sm list-disc ">
                          {exp.items.map((item, key) => (
                            <li className="text-indigo-600" key={key}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-8 mx-auto bg-white" id="portfolio">
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
                Portfolio
              </h2>
            </div>
            <div className="bg-white text-center">
              <div className="mx-auto max-w-2xl  py-16 sm:py-24 lg:max-w-7xl ">
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                  {portfolios.slice(0, 3).map((portfolio, key) => (
                    <CardItem listitem={portfolio} key={key} />
                  ))}
                </div>
              </div>
              <Link
                href="/portfolio"
                className="flex-none font-['poppins'] rounded-full bg-main-50 px-3.5 py-2.5 text-md  text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
