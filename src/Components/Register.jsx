import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const Register = () => {
  const [showPass, setShowPass] = useState("");
  return (
    <div className="">
      <div className="flex py-4 bg-gray-50 h-screen pt-24">
        <div className="w-[450px] bg-white shadow-md h-fit p-8 rounded-xl justify-center mx-auto ">
          <div className="">
            <div className="pt-4">
              <div className="">
                <input
                  type="text"
                  className="outline-none border px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans w-[80%]"
                  placeholder="Full Name"
                />
                <p className=" font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
              <div>
                <input
                  type="email"
                  className="outline-none px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans border w-[80%]"
                  placeholder="Email"
                />
                <p className="font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
              <div>
                <div className="flex items-center justify-end relative w-[80%]">
                  <input
                    type={showPass ? "text" : "Password"}
                    className="outline-none px-3 py-2 rounded-md text-sm text-primary font-normal font-Opensans border w-full justify-start"
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute mr-2 cursor-pointer"
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <p className="font-NunitoFont font-normal text-sm text-red-700 py-0.5">
                  error
                </p>
              </div>
              <button className="text-base font-Monrope font-medium text-primary bg-secandari px-5 py-1.5 rounded-2xl cursor-pointer hover:bg-secandari/90 duration-200 mt-4 w-[80%]">
                Register
              </button>
            </div>
            <div className="pt-6">
              <p className="text-base text-primary font-normal font-Monrope">Or, log in with</p>
              <div className="flex items-center gap-4 pt-5">
                <Link>
                  <FcGoogle className="text-2xl cursor-pointer" />
                </Link>
                <Link>
                  <BsFacebook className="text-2xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
