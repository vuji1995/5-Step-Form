import { useState, useContext, useEffect } from "react";
import Context from "../Context/Context";
import IconArcade from "../assets/icon-arcade.svg";
import IconAdvanced from "../assets/icon-advanced.svg";
import IconPro from "../assets/icon-pro.svg";
import IconCheck from "../assets/checkmark.svg";
import IconThankYou from "../assets/icon-thank-you.svg";
import ImageMobile from "../assets/bg-sidebar-mobile.svg";
const Form = () => {
  const {
    stepNumber,
    nextStep,
    previousStep,
    onlineServices,
    setOnlineServices,
    largerStorage,
    setLargerStorage,
    costumizableProfile,
    setConstumizableProfile,
    selectedPlan,
    handlePlanClick,
    planPrice,
    setPlanPrice,
    onlineServicesSelected,
    setOnlineServicesSelected,
    largerStorageSelected,
    setLargerStorageSelected,
    costumizableProfileSelected,
    setCostumizableProfileSelected,
    totalPrice,
    setTotalPrice,
    isEmailValid,
    isValidPhoneNumber,
  } = useContext(Context);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [CheckBox, setAddCheckBox] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addCheckBox = () => {
    setAddCheckBox(true);
  };

  const checkInputs = () => {
    let error = false;
    if (inputs.name.length < 2) {
      setNameError(true);
      error = true;
    } else {
      setNameError(false);
    }

    if (!isEmailValid(inputs.email)) {
      setEmailError(true);
      error = true;
    } else {
      setEmailError(false);
    }

    if (!isValidPhoneNumber(inputs.phoneNumber)) {
      setPhoneError(true);
      error = true;
    } else {
      setPhoneError(false);
    }

    if (!error) {
      nextStep();
    }
  };

  const addOnlineServices = (e) => {
    setOnlineServices(!onlineServices);
    setOnlineServicesSelected(e.currentTarget.getAttribute("data-value"));
  };

  console.log(largerStorage, costumizableProfile, onlineServices);

  const addLargersStorage = (e) => {
    setLargerStorage(!largerStorage);
    setLargerStorageSelected(e.currentTarget.getAttribute("data-value"));
  };

  const addCostumProfile = (e) => {
    setConstumizableProfile(!costumizableProfile);
    setCostumizableProfileSelected(e.currentTarget.getAttribute("data-value"));
  };

  const handlePlanPrice = (e) => {
    setPlanPrice(e.currentTarget.getAttribute("data-value"));
  };

  useEffect(() => {
    let total = planPrice;
    console.log(selectedPlan);

    if (onlineServices) {
      total = Number(total) + Number(onlineServicesSelected);
    }
    if (largerStorage) {
      total = Number(total) + Number(largerStorageSelected);
    }
    if (costumizableProfile) {
      total = Number(total) + Number(costumizableProfileSelected);
    }
    setTotalPrice(total);
  }, [onlineServices, largerStorage, costumizableProfile, planPrice]);

  return (
    <div className="container flex flex-col items-center w-10/12  lg:justify-center bg-sky-50 lg:flex-row lg:px-5 lg:py-5 lg:bg-stone-50 h-3/4  lg:rounded-2xl md:w-4/6 sm:w-5/6 2xl:justify-start xl:w-1/2">
      {/*LEFT PART*/}
      <div
        className="left flex lg:flex-col w-full object-cover object-center lg:rounded-lg lg:w-48  lg:h-full bg-cover bg-center items-center justify-start lg:justify-around xl:w-72"
        style={{ backgroundImage: `url(${ImageMobile})` }}
      >
        <div className="step flex items-center justify-center xl:justify-start w-3/4 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <div className="stepLeft flex flex-col items-start justify-center">
            <div
              className="circle w-9 h-9 border-2 rounded-full flex justify-center items-center xl:mr-6"
              style={{
                backgroundColor: stepNumber === 1 ? "lightblue" : "",
              }}
            >
              <p
                className="font-bold text-white"
                style={{ color: stepNumber === 1 ? "black" : "" }}
              >
                1
              </p>
            </div>
          </div>
          <div className="stepRight hidden flex-col items-start justify-center xl:flex">
            <p className="text-white font-thin">STEP 1</p>
            <p className="font-bold text-white">YOUR INFO</p>
          </div>
        </div>
        <div className="step flex items-center justify-center xl:justify-start w-3/4 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <div className="stepLeft flex flex-col items-start justify-center">
            <div
              className="circle w-9 h-9 border-2 rounded-full flex justify-center items-center xl:mr-6"
              style={{
                backgroundColor: stepNumber === 2 ? "lightblue" : "",
              }}
            >
              <p
                className="font-bold text-white"
                style={{ color: stepNumber === 2 ? "black" : "" }}
              >
                2
              </p>
            </div>
          </div>
          <div className="stepRight hidden flex-col items-start justify-center xl:flex">
            <p className="text-white font-thin">STEP 2</p>
            <p className="font-bold text-white">SELECT PLAN</p>
          </div>
        </div>
        <div className="step flex items-center justify-center xl:justify-start w-3/4 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <div className="stepLeft flex flex-col items-start justify-center">
            <div
              className="circle w-9 h-9 border-2 rounded-full flex justify-center items-center xl:mr-6"
              style={{
                backgroundColor: stepNumber === 3 ? "lightblue" : "",
              }}
            >
              <p
                className="font-bold text-white"
                style={{ color: stepNumber === 3 ? "black" : "" }}
              >
                3
              </p>
            </div>
          </div>
          <div className="stepRight hidden flex-col items-start justify-center xl:flex">
            <p className="text-white font-thin">STEP 3</p>
            <p className="font-bold text-white">ADD-ONS</p>
          </div>
        </div>
        <div className="step flex items-center justify-center xl:justify-start w-3/4 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <div className="stepLeft flex flex-col items-start justify-center">
            <div
              className="circle w-9 h-9 border-2 rounded-full flex justify-center items-center xl:mr-6"
              style={{
                backgroundColor: stepNumber === 4 ? "lightblue" : "",
              }}
            >
              <p
                className="font-bold text-white"
                style={{ color: stepNumber === 4 ? "black" : "" }}
              >
                4
              </p>
            </div>
          </div>
          <div className="stepRight hidden flex-col items-start justify-center xl:flex">
            <p className="text-white font-thin">STEP 4</p>
            <p className="font-bold text-white">SUMMARY</p>
          </div>
        </div>
        <div className="step flex items-center justify-center xl:justify-start w-3/4 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <div className="stepLeft flex flex-col items-start justify-center">
            <div
              className="circle w-9 h-9 border-2 rounded-full flex justify-center items-center xl:mr-6"
              style={{
                backgroundColor: stepNumber === 5 ? "lightblue" : "",
              }}
            >
              <p
                className="font-bold text-white"
                style={{ color: stepNumber === 3 ? "black" : "" }}
              >
                5
              </p>
            </div>
          </div>
          <div className="stepRight hidden flex-col items-start justify-center xl:flex">
            <p className="text-white font-thin">STEP 5</p>
            <p className="font-bold text-white">FINISH</p>
          </div>
        </div>
      </div>
      {/* RIGHT PART*/}
      {/*  WINDOW 1*/}
      {stepNumber === 1 && (
        <>
          <div className="right flex flex-col px-4 py-5 bg-white  -mt-14 lg:mt-0 w-11/12 lg:w-2/3 lg:h-full lg:ml-8 lg:rounded-lg lg:p-7 xl:h-full xl:w-full rounded-md 2xl:mt-0 2xl:h-full 2xl:w-full">
            <h2 className=" text-blue-900  text-xl lg:text-4xl font-bold ">
              Personal Info
            </h2>
            <p className="lg:mt-4 mt-2 mb-2 lg:mb-8 text-gray-400  font-normal text-l">
              Please provide your name, email address and phone <br></br>{" "}
              number.
            </p>
            <div className="inputDiv flex flex-col">
              <div className="labelMessage flex w-full justify-between align-center">
                <label className="lg:mb-2 text-blue-900 font-normal text-sm lg:font-semibold">
                  Name
                </label>
                {nameError ? (
                  <p className="text-red-600 text-sm  lg:font-700">
                    Name is not valid!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                className="p-2 rounded-md border-gray-300 border lg:border-2 bg-transparent mb-5"
                placeholder="name"
                value={inputs.name}
                onChange={onChange}
                name="name"
              />
            </div>
            <div className="inputDiv flex flex-col">
              <div className="labelMessage flex w-full justify-between align-center">
                <label className="lg:mb-2 text-blue-900 font-normal text-sm lg:font-semibold">
                  Email address
                </label>
                {emailError ? (
                  <p className="text-red-600 text-sm  lg:font-700">
                    Email is not valid!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                className="p-2 rounded-md border-gray-300 border lg:border-2 bg-transparent mb-5"
                placeholder="johndoe@gmail.com"
                value={inputs.email}
                onChange={onChange}
                name="email"
              />
            </div>
            <div className="inputDiv flex flex-col">
              <div className="labelMessage flex w-full justify-between align-center">
                <label className="lg:mb-2 text-blue-900 font-normal text-sm lg:font-semibold">
                  Phone number
                </label>
                {phoneError ? (
                  <p className="text-red-600 text-sm  lg:font-700">
                    Enter 10 or 9 digits, Croatian mobile phone number!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                className="p-2 rounded-md border-gray-300 border lg:border-2 bg-transparent mb-5"
                placeholder="e.g + 091 4567891"
                value={inputs.phoneNumber}
                onChange={onChange}
                name="phoneNumber"
              />
            </div>
            <div className="flex justify-end lg:mt-4">
              <button
                className="lg:py-3 lg:px-5 py-1 px-2 bg-blue-900 text-white lg:font-bold text-base rounded-lg hover:bg-blue-500 "
                onClick={() => {
                  checkInputs();
                }}
              >
                Next stop
              </button>
            </div>
          </div>
        </>
      )}
      {/*  WINDOW 2*/}
      {stepNumber === 2 && (
        <>
          <div className="right flex flex-col px-4 py-5 bg-white  -mt-14 lg:mt-0 w-11/12 lg:w-2/3 lg:h-full lg:ml-8 lg:rounded-lg lg:p-7 xl:h-full xl:w-full rounded-md 2xl:mt-0 2xl:h-full 2xl:w-full">
            <h2 className=" text-blue-900 text-xl mt-4 lg:text-4xl font-bold">
              Select your plan
            </h2>
            <p className="mt-4 mb-8 text-gray-400 font-semibold text-l">
              You have the option of monthly or yearly billing.
            </p>
            <div className="options grid grid-row-3 lg:grid-cols-3 lg:gap-5">
              <div
                className={`flex lg:flex-col rounded-lg border border-indigo-800 lg:justify-center lg:items-center content-start mb-2 lg:p-4 p-2 hover:cursor-pointer ${
                  selectedPlan === "Arcade" ? "bg-blue-100" : ""
                }`}
                data-value="9"
                onClick={(e) => {
                  handlePlanClick("Arcade");
                  handlePlanPrice(e);
                }}
              >
                <img src={IconArcade} className="w-10 h-10" />
                <p className=" font-semibold text-indigo-800 ml-4 lg:ml-0 lg:mt-8 flex items-center justify-center">
                  Arcade
                </p>
                <p className="lg:font-semibold text-gray-500 ml-2  lg:ml-0 flex items-center justify-center">
                  9$/m
                </p>
              </div>
              <div
                className={`flex lg:flex-col rounded-lg border border-indigo-800 lg:justify-center lg:items-center content-start mb-2 lg:p-4 p-2 hover:cursor-pointer ${
                  selectedPlan === "Advanced" ? "bg-blue-100" : ""
                }`}
                data-value="12"
                onClick={(e) => {
                  handlePlanClick("Advanced");
                  handlePlanPrice(e);
                }}
              >
                <img src={IconAdvanced} className="w-10 h-10" />
                <p className="font-semibold text-indigo-800 ml-4 lg:ml-0 lg:mt-8 flex items-center justify-center">
                  Advanced
                </p>
                <p className="lg:font-semibold text-gray-500 ml-2 lg:ml-0 flex items-center justify-center">
                  12$/m
                </p>
              </div>
              <div
                className={`flex lg:flex-col rounded-lg border border-indigo-800 lg:justify-center lg:items-center content-start mb-2 lg:p-4 p-2 hover:cursor-pointer ${
                  selectedPlan === "Pro" ? "bg-blue-100" : ""
                }`}
                data-value="15"
                onClick={(e) => {
                  handlePlanClick("Pro");
                  handlePlanPrice(e);
                }}
              >
                <img src={IconPro} className="w-10 h-10" />
                <p className="font-semibold text-indigo-800 ml-4 lg:ml-0 lg:mt-8 flex items-center justify-center">
                  Pro
                </p>
                <p className="lg:font-semibold text-gray-500 ml-2 lg:ml-0 flex items-center justify-center">
                  15$/m
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4 lg:mt-14">
              <p
                className="lg:text-indigo-800 lg:font-bold font-semibold text-gray-500 rounded-lg hover:cursor-pointer"
                onClick={previousStep}
              >
                Go back
              </p>
              <button
                className="lg:py-3 lg:px-5 py-1 px-2 bg-blue-900 text-white lg:font-bold text-base rounded-lg hover:bg-blue-500"
                disabled={!selectedPlan}
                onClick={() => {
                  if (!selectedPlan) return;
                  nextStep();
                }}
              >
                Next stop
              </button>
            </div>
          </div>
        </>
      )}
      {/*  WINDOW 3*/}
      {stepNumber === 3 && (
        <>
          <div className="right flex flex-col px-4 sm:py-5 bg-white  -mt-14 lg:mt-0 w-11/12 lg:w-2/3 lg:h-full lg:ml-8 lg:rounded-lg lg:p-7 xl:h-full xl:w-full rounded-md 2xl:mt-0 2xl:h-full 2xl:w-full">
            <h2 className=" text-blue-900 text-xl mt-4 lg:text-4xl font-bold">
              Pick add-ons
            </h2>
            <p className="mt-4 mb-4 text-gray-400 font-semibold text-l">
              Add-ons help enhance your gaming expirence.
            </p>
            <div className="options grid grid-rows-3 gap-2 lg:gap-5">
              <div
                data-value={1}
                className="p-1 sm:p-3 rounded-lg border flex justify-between items-center hover:bg-slate-100 hover:cursor-pointer hover:border-violet-700"
                onClick={(e) => {
                  addOnlineServices(e);
                }}
              >
                <div className="leftaddOn flex justify-center items-center">
                  <div className="checkBox rounded-lg w-5 h-5 border mr-4">
                    {onlineServices && <img src={IconCheck} />}
                  </div>
                  <div className="addOnText">
                    <p className="font-semibold text-blue-900 font-sm">
                      Online services
                    </p>
                    <p className="text-gray-500 text-xs">
                      Access to multiplayer games
                    </p>
                  </div>
                </div>
                <div className="rightAddon">
                  <p className="text-violet-700 text-sm font-semibold">
                    +$1/mo
                  </p>
                </div>
              </div>
              <div
                data-value={2}
                className="p-1 sm:p-3 rounded-lg border flex justify-between items-center hover:bg-slate-100 hover:cursor-pointer hover:border-violet-700"
                onClick={(e) => {
                  addLargersStorage(e);
                }}
              >
                <div className="leftaddOn flex justify-center items-center">
                  <div className="checkBox rounded-lg w-5 h-5 border mr-4">
                    {largerStorage && <img src={IconCheck} />}
                  </div>
                  <div className="addOnText">
                    <p className="font-semibold text-blue-900 font-sm">
                      Larger storage
                    </p>
                    <p className="text-gray-500 text-xs">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                </div>
                <div className="rightAddon">
                  <p className="text-violet-700 text-sm font-semibold">
                    +$2/mo
                  </p>
                </div>
              </div>
              <div
                data-value={2}
                className="p-1 sm:p-3 rounded-lg border  flex justify-between items-center hover:bg-slate-100 hover:cursor-pointer hover:border-violet-700"
                onClick={(e) => {
                  addCostumProfile(e);
                }}
              >
                <div className="leftaddOn flex justify-center items-center">
                  <div className="checkBox rounded-lg w-5 h-5 border mr-4">
                    {costumizableProfile && <img src={IconCheck} />}
                  </div>
                  <div className="addOnText">
                    <p className="font-semibold text-blue-900 font-sm">
                      Costumizable profile
                    </p>
                    <p className="text-gray-500 text-xs">
                      Costum theme on your profile
                    </p>
                  </div>
                </div>
                <div></div>
                <div className="rightAddon">
                  <p className="text-violet-700 text-sm font-semibold">
                    +$2/mo
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:mt-14 mt-4 pb-5">
                <p
                  className=" lg:text-indigo-800 lg:font-bold font-semibold text-gray-500 rounded-lg hover:cursor-pointer"
                  onClick={previousStep}
                >
                  Go back
                </p>
                <button
                  className="lg:py-3 lg:px-5 py-1 px-2 bg-blue-900 text-white lg:font-bold text-base rounded-lg hover:bg-blue-500"
                  disabled={
                    largerStorage === "undefined" &&
                    costumizableProfile === "undefined" &&
                    onlineServices === "undefined"
                  }
                  onClick={() => {
                    if (
                      largerStorage !== false ||
                      costumizableProfile !== false ||
                      onlineServices !== false
                    ) {
                      nextStep();
                    }
                  }}
                >
                  Next stop
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/*  WINDOW 4*/}
      {stepNumber === 4 && (
        <>
          <div className="right flex flex-col px-4 py-5 bg-white  -mt-14 lg:mt-0 w-11/12 lg:w-2/3 lg:h-full lg:ml-8 lg:rounded-lg lg:p-7 xl:h-full xl:w-full rounded-md 2xl:mt-0 2xl:h-full 2xl:w-full">
            <h2 className=" text-blue-900 text-xl mt-4 lg:text-4xl font-bold">
              Finishing up
            </h2>
            <p className="mt-4 mb-4 text-gray-400 font-semibold text-l">
              Double check everything looks OK before continuing
            </p>
            <div className="services rounded-lg bg-sky-50 flex  p-4 flex-col">
              <div className="planVersion flex items-center justify-between w-full">
                <p className="planType text-blue-900 font-semibold">
                  {selectedPlan} (Monthly)
                </p>
                <p className="price text-blue-900 font-semibold">{`$${planPrice}/mo`}</p>
              </div>
              <div className="line w-full h-px bg-gray-300 mt-6"></div>
              <div
                className={`${
                  onlineServices
                    ? "onlineServices flex items-center justify-between w-full mt-4"
                    : "hidden"
                }`}
              >
                <p className="text-gray-500 font-semibold">Online services</p>
                <p className="text-blue-900 font-semibold">+$1/mo</p>
              </div>
              <div
                className={`${
                  largerStorage
                    ? "onlineServices flex items-center justify-between w-full mt-4"
                    : "hidden"
                }`}
              >
                <p className="text-gray-500 font-semibold">Larger storage</p>
                <p className="text-blue-900 font-semibold">+$2/mo</p>
              </div>
              <div
                className={`${
                  costumizableProfile
                    ? "onlineServices flex items-center justify-between w-full mt-4"
                    : "hidden"
                }`}
              >
                <p className="text-gray-500 font-semibold">
                  Costumizable profile
                </p>
                <p className="text-blue-900 font-semibold">+$2/mo</p>
              </div>
            </div>
            <div className="total flex w-full items-center justify-between p-4 mt-5">
              <p className="text-gray-500 font-semibold">Total (per month)</p>
              <p className="text-blue-900 font-bold text-xl">{`$${totalPrice}/mo`}</p>
            </div>
            <div className="flex justify-between lg:mt-14 mt-5">
              <p
                className="  lg:text-indigo-800 lg:font-bold font-semibold text-gray-500 rounded-lg hover:cursor-pointer"
                onClick={previousStep}
              >
                Go back
              </p>
              <button
                className="lg:py-3 lg:px-5 py-1 px-2 bg-blue-900 text-white lg:font-bold text-base rounded-lg hover:bg-blue-500"
                onClick={nextStep}
              >
                Next stop
              </button>
            </div>
          </div>
        </>
      )}
      {/*  WINDOW 5*/}
      {stepNumber === 5 && (
        <>
          <div className="right flex flex-col justify-center items-center text-center px-4 py-5 bg-white  -mt-14 lg:mt-0 w-11/12 lg:w-2/3 lg:h-full lg:ml-8 lg:rounded-lg lg:p-7 xl:h-full xl:w-full rounded-md 2xl:mt-0 2xl:h-full 2xl:w-full">
            <img
              src={IconThankYou}
              alt="thankYouIcon"
              className="mb-8 w-14 h-14 mt-10"
            />
            <h2 className=" text-blue-900 text-2xl font-bold">Thank you</h2>
            <p className="mt-4 mb-8 text-gray-400 font-semibold text-l">
              Thanks for confirming your subscription! We hope you have fun
              using out platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
