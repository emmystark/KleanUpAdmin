import Contact from "./Media/contact.png";
import Logo from "./Media/KleanUp.png";
import Mobileprogress from "./Media/mobileprogress.png";
import EquipmentSelector from "./Equipmentselector";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";

function Signup() {
  const myCustomColor = "#FAFAFA";
  const myCustomColor1 = "#3DA5EC";

  return (
    <>
      <div className="">
        <div className="flex justify-center mt-16">
          <img
            className="h-8 w-24 relative right-[25%] lg:right-0 lg:w-24 lg:object-contain"
            src={Logo}
          />
        </div>
        <div className="relative left-12 lg:left-1/4 justify-center pt-9 w-3/4 ">
          <img
            className="h-12 w-2/3 object-contain lg:block hidden"
            src={Contact}
          />
          <img
            className="h-12 object-contain lg:hidden block"
            src={Mobileprogress}
          />
          <div className="lg:flex space-x-16 font-semibold hidden -ml-10">
            <p>Personal Details</p>
            <p className="left-2 relative">Contact information</p>
            <p className="right-2 relative">Professional information</p>
            <p>Banking history</p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 h-fit shadow-lg relative  lg:left-96 lg:ml-10 mt-10 -pb-20">
        <div className="relative lg:right-9 right-12">
          <div className="top-0  relative ">
            <label className="-mt-8 top-8 left-20 relative whitespace-nowrap font-semibold">
              Company name
            </label>
            <input
              type="number"
              placeholder="KleanUp inc."
              className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div className="-top-2  relative ">
            <label className="-mt-8 top-8 left-20 relative whitespace-nowrap font-semibold">
              Job title
            </label>
            <input
              type="text"
              placeholder="Cleaner"
              className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>

          <div className="flex ml-7 w-11/12">
            <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
              Start date
            </label>
            <input
              type="date"
              placeholder=""
              className="border-gray-200 mt-11 -ml-3 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />

            <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
              End date
            </label>
            <input
              type="date"
              placeholder=""
              className="border-gray-200 mt-11 -ml-3 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none relative left-2"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div className="top-0  relative ">
            <label className="-mt-8 top-7 left-20 relative whitespace-nowrap font-semibold">
              Responsibility
            </label>
            <textarea
              type="checkbox"
              placeholder="Lorem ipsum dolor sit amet consectetur. Diam sapien diam orci morbi at eget vel. Ac porttitor fames arcu ut lacus interdum elit diam adipiscing."
              className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm text-black w-5/6 px-10 pl-6 py-3 focus:outline-none h-32"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div className="top-0  relative ">
            <label className="-mt-8 top-7 left-20 relative whitespace-nowrap font-semibold">
              Responsibility for leaving (If applicaable)
            </label>
            <textarea
              type="checkbox"
              placeholder="Lorem ipsum dolor sit amet consectetur. Diam sapien diam orci morbi at eget vel. Ac porttitor fames arcu ut lacus interdum elit diam adipiscing."
              className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm text-black w-5/6 px-10 pl-6 py-3 focus:outline-none h-32"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div className="h-98">
            <h2 className="font-semibold left-20 relative mt-5 text-xl">
              References
            </h2>

            <div className="top-0  relative ">
              <label className="-mt-8 top-7 left-20 relative whitespace-nowrap font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Roland hughes"
                className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                style={{ backgroundColor: myCustomColor }}
              />
            </div>
            <div className="top-0  relative ">
              <label className="-mt-8 top-7 left-20 relative whitespace-nowrap font-semibold">
                Relation to applicant
              </label>
              <input
                type="text"
                placeholder="Work colleague"
                className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                style={{ backgroundColor: myCustomColor }}
              />
            </div>
            <div className="top-0  relative ">
              <label className="-mt-8 top-7 left-20 relative whitespace-nowrap font-semibold">
                Contact information
              </label>
              <input
                type="number"
                placeholder="+65 925 2735 0826"
                className="border-gray-200 mt-11 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                style={{ backgroundColor: myCustomColor }}
              />
            </div>
          </div>
          <div className="pt-2">
            <label className="top-1 left-20 relative whitespace-nowrap font-semibold">
              Equipment and supplies
            </label>
            <EquipmentSelector />
          </div>
          <div className="mt-5 left-20 relative">
            <label>Relevant certifications</label>
            <p className="text-sm  text-gray-500">
              Accepted certifications include
            </p>
            <FileUpload />
          </div>
          <Link to="/ProfessionalInfo">
            <input
              type="submit"
              value="Next"
              className=" flex-1 text-white items-center z-20 my-40 top-40 border-gray-500 border-opacity-10 border-2 rounded-md ml-20 h-3/2 w-5/6 p-2 mt-12 cursor-pointer"
              style={{ backgroundColor: myCustomColor1 }}
            />
          </Link>
        </div>
      </div>
      <div className="h-40 mt-20"></div>
    </>
  );
}

export default Signup;
