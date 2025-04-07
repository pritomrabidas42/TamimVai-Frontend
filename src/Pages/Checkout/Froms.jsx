import React from "react";

const Froms = () => {
  return (
    <div>
      <h3 className="text-2xl text-primary font-Popins font-semibold pb-4">
        {" "}
        Billing details
      </h3>
      <form>
        <div className="flex gap-7">
          <div>
            <h4 className="text-lg text-primary font-Raleway font-medium pb-2">
              First name
            </h4>
            <input
              type="text"
              className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full lg:w-52 xl:w-64"
            />
          </div>
          <div>
            <h4 className="text-lg text-primary font-Raleway font-medium pb-2">
              Last name
            </h4>
            <input
              type="text"
              className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full lg:w-52 xl:w-64"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Company name (optional)
          </h4>
          <input
            type="text"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Street address
          </h4>
          <input
            type="text"
            placeholder="House number & street name"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit,etc. (optional)"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full mt-3"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Town/City
          </h4>
          <input
            type="text"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            State/Country
          </h4>
          <input
            type="text"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Postcode / ZIP
          </h4>
          <input
            type="number"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Phone
          </h4>
          <input
            type="number"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
        <div>
          <h4 className="text-lg text-primary font-Raleway font-medium py-2">
            Email
          </h4>
          <input
            type="email"
            className="outline-none border-2 rounded-md px-5 py-3 text-sm text-primary font-Montserrat font-normal focus:border-secandari duration-200 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Froms;
