import React from 'react'

export default function Roadmap() {
  return (
    <section className="py-12 bg-[#EAE9FF] rounded-t-[60px] relative w-full -mt-14 sm:py-16 lg:py-20 lg:py-16 sm:pb-16">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold font-body1 text-black">
            Full Roadmap
          </h2>
        </div>

        <div className="mt-12 sm:px-16 lg:px-0">
          <div className="grid grid-cols-1 overflow-hidden border-2 border-slate-400 divide-y-2 divide-slate-400 lg:divide-y-0 lg:divide-x lg:grid-cols-3 rounded-xl">
            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-indigo-900 uppercase">
                Phase 1
              </p>
              <p className="mt-3 text-xl font-bold text-gray-800">Launch</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Launching Time{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Social Launch{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Giveways & Promos{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-indigo-900 uppercase">
                Phase 2
              </p>
              <p className="mt-3 text-xl font-bold text-gray-800">Investment</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Publish Whitepaper{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Website Launch{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Mega Advertisement{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-indigo-900 uppercase">
                Phase 3
              </p>
              <p className="mt-3 text-xl font-bold text-gray-800">Growing</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Opening Collections{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Influencer Marketing{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-indigo-400/70  rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Public Release{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
