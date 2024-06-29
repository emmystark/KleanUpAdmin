import Progress from "./Media/progress.png";
import Mobileprogress from "./Media/mobileprogress.png";
import Logo from "./Media/KleanUp.png";
import GenderSelector from "./Genderselector";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";

function Signup() {
  const myCustomColor = "#FAFAFA";
  const myCustomColor1 = "#3DA5EC";

  return (
    <>
      <div>
        <div className="flex lg:justify-center mt-16">
          <img
            className="h-8 w-24 relative right-[-12%] lg:right-0 lg:w-24 object-contain"
            src={Logo}
          />
        </div>
        <div className="relative left-12 lg:left-1/4 justify-center pt-9 w-3/4 ">
          <img
            className="h-12 w-2/3 object-contain lg:block hidden"
            src={Progress}
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
        <div className="relative right-12 lg:right-9">
          <div className="lg:flex lg:space-x-2  pt-20 ">
            <label className="lg:-mt-8 lg:top-0 -top-3 left-20 relative whitespace-nowrap  font-semibold">
              First name
            </label>
            <input
              type="text"
              placeholder="Piers"
              className="border-gray-200 rounded-md border-2 text-sm ml-20 lg:ml-0 placeholder-black w-5/6 lg:px-6 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />

            <label className="lg:-mt-8 lg:top-0 top-3 left-20 relative whitespace-nowrap  font-semibold">
              Last name
            </label>
            <input
              type="text"
              placeholder="Morgan"
              className="border-gray-200 rounded-md border-2 mt-7 lg:mt-0 text-sm ml-20 lg:ml-0 placeholder-black w-5/6 relative left-0 lg:-left-2 lg:px-6 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div>
          <label className="lg:-mt-8 lg:-top-11 top-3 left-20 relative whitespace-nowrap  font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="piersmorgan@gmail.com"
              className="border-gray-200 lg:mt-11 mt-7 lg:-ml-5 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div>
          <label className="lg:-mt-8 lg:-top-11 top-3 left-20 relative whitespace-nowrap  font-semibold">

              Date of birth
            </label>
            <input
              type="date"
              placeholder=""
              className="border-gray-200 lg:mt-11 mt-7 lg:-ml-3 ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
              style={{ backgroundColor: myCustomColor }}
            />
          </div>
          <div className="pt-2">
            <label className="top-1 left-20 relative whitespace-nowrap font-semibold">
              Gender
            </label>
            <GenderSelector />
          </div>
          <div className="mt-5 left-20 relative">
            <label className="font-semibold">
              Profile picture{" "}
              <span className="text-gray-600">( Optional )</span>
            </label>
            <FileUpload />
            <label className="relative top-3 font-semibold">National ID</label>
            <FileUpload />
          </div>
          <Link to="/PersonalDetails">
            <input
              type="submit"
              value="Next"
              className=" flex-1 text-white items-center my-40 top-40 border-gray-500 border-opacity-10 border-2 rounded-md ml-20 h-3/2 w-5/6 p-2 mt-12 cursor-pointer"
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
