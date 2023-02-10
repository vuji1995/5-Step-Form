import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  const [error, setError] = useState(false);
  const [onlineServices, setOnlineServices] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [costumizableProfile, setConstumizableProfile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planPrice, setPlanPrice] = useState(null);
  const [onlineServicesSelected, setOnlineServicesSelected] = useState(null);
  const [largerStorageSelected, setLargerStorageSelected] = useState(null);
  const [costumizableProfileSelected, setCostumizableProfileSelected] =
    useState(null);
  const [totalPrice, setTotalPrice] = useState("");

  const nextStep = () => {
    setStepNumber((prevState) => {
      return prevState + 1;
    });
  };

  const previousStep = () => {
    setStepNumber((prevState) => {
      return prevState - 1;
    });
  };

  const isEmailValid = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  function isValidPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/ /g, "");
    if (phoneNumber.length !== 9 && phoneNumber.length !== 10) {
      return false;
    }
    if (
      !["091", "092", "095", "097", "098", "099"].includes(
        phoneNumber.substring(0, 3)
      )
    ) {
      return false;
    }
    return true;
  }

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <Context.Provider
      value={{
        errorMsg,
        setErrorMsg,
        stepNumber,
        setStepNumber,
        nextStep,
        previousStep,
        isEmailValid,
        isValidPhoneNumber,
        error,
        setError,
        onlineServices,
        setOnlineServices,
        largerStorage,
        setLargerStorage,
        costumizableProfile,
        setConstumizableProfile,
        selectedPlan,
        setSelectedPlan,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
