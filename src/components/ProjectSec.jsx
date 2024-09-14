import netflix from "../assets/image/netflix.webp";
import gosala from "../assets/image/gosala.webp";
import Constraction from "../assets/image/Constraction.webp";
import BookStore from "../assets/image/BookStore.webp";
import RestApi from "../assets/image/RestApi.webp";
import Caffe from "../assets/image/Caffe.webp";
import Expenses from "../assets/image/Expenses.webp";
import google_gemini from "../assets/image/googlegemini.png";
import collage_site from "../assets/image/collagesite.png";

function ProjectSec() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#47c0e8] sm:border-b-2 border-[#1788ae] mt-5">
          Latest Works
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#e65580] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://gleaming-sundae-df77e0.netlify.app/"
            target="_blank"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={google_gemini}
                alt="googlegemini"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#e65580] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Google Gemini
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#e65580] font-bold text-2xl md:text-4xl">
              Google Gemini
            </h3>
            <span className="text-[#e65580] text-base md:text-lg">
              (Search Engine)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #api
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#7896dd] font-bold text-2xl md:text-4xl">
              Collage Site
            </h3>
            <span className="text-[#7896dd] text-base md:text-lg">
              ( Education For a Better World)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #form submision
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#7896dd] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://dazzling-vacherin-1fd7ae.netlify.app/"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={collage_site}
                alt="collage-site"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#7896dd] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Collage Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://glittery-swan-4ae8bf.netlify.app"
            target="_blank"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={netflix}
                alt="netflix"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Netflix
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Netflix Clone
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">
              (Unlimited movies, TV shows)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ceff78] font-bold text-2xl md:text-4xl">
              Goshala
            </h3>
            <span className="text-[#ceff78] text-base md:text-lg">
              (SSBK Datta Dhaama Goshala)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ceff78] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://goshala.netlify.app"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={gosala}
                alt="gosala"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ceff78] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Goshala
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#b31004] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://gkconstruction.netlify.app"
            target="_blank"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Constraction}
                alt="Constraction"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#b31004] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Consturction
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#b31004] font-bold text-2xl md:text-4xl">
              Constraction
            </h3>
            <span className="text-[#b31004] text-base md:text-lg">
              (All Home Design)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#dd4808] font-bold text-2xl md:text-4xl">
              Bookstore
            </h3>
            <span className="text-[#dd4808] text-base md:text-lg">
              (Reading and Consulting)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#dd4808] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://sainibook.netlify.app"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={BookStore}
                alt="BookStore"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#dd4808] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Bookstore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#4864eb] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://all-country-rest-api.netlify.app"
            target="_blank"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={RestApi}
                alt="RestApi"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#4864eb] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                RestApi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#4864eb] font-bold text-2xl md:text-4xl">
              RestApi
            </h3>
            <span className="text-[#4864eb] text-base md:text-lg">
              (All Country Data)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#78e856] font-bold text-2xl md:text-4xl">
              Caffe Shop
            </h3>
            <span className="text-[#78e856] text-base md:text-lg">
              (Enjoy Caffee)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#78e856] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://my-caffee.netlify.app"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Caffe}
                alt="Caffe"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#78e856] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Caffe Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#1788ae] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://expenses-tracker-by-gokul.netlify.app"
            target="_blank"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Expenses}
                alt="Expenses"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#1788ae] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Expenses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#1788ae] font-bold text-2xl md:text-4xl">
              Expenses
            </h3>
            <span className="text-[#1788ae] text-base md:text-lg">
              (Add All Bill Data)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
          What my clients are saying?
        </h2>
      </section>
    </>
  );
}

export default ProjectSec;
