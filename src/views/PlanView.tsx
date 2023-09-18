import { Field } from "formik";
import { useState } from "react";

import arcadeIcon from "../assets/images/icon-arcade.svg";
import advacedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import StyledRadioInput from "../components/StyledRadioInput";
import ViewFactory from "./ViewFactory";
import ToggleButton from "../components/ToggleButton";

const toggleTextStyles = {
  active: "text-sm text-userMarineBlue font-bold",
  nonActive: "text-sm text-userCoolGrey font-normal",
}

function FormChildren() {
  const [active, setActive] = useState("arcade");
  const [toggleEnabled, setToggleEnabled] = useState(false);
  
  return (
    <div role="group" aria-labelledby="billing-plans" className="flex flex-col gap-y-4">
      <StyledRadioInput
        active={active}
        setActive={setActive}
        icon={arcadeIcon}
        toggleEnabled={toggleEnabled}
        name="plan"
        value="arcade"
        price={toggleEnabled ? "$90/yr" : "$9/mo"}
      />
      <StyledRadioInput
        active={active}
        setActive={setActive}
        icon={advacedIcon} 
        toggleEnabled={toggleEnabled}
        name="plan"
        value="advanced"
        price={toggleEnabled ? "$120/yr" : "$12/mo"}
      />
      <StyledRadioInput
        active={active}
        setActive={setActive}
        icon={proIcon} 
        toggleEnabled={toggleEnabled}
        name="plan"
        value="pro"
        price={toggleEnabled ? "$150/yr" : "$15/mo"}
      />
      <div className="flex justify-center">
        <p 
          className={`mr-5 ${!toggleEnabled ? toggleTextStyles.active : toggleTextStyles.nonActive}`}>
            Monthly
        </p>
        <ToggleButton toggleEnabled={toggleEnabled} setToggleEnabled={setToggleEnabled} />
        <p 
          className={toggleEnabled ? toggleTextStyles.active : toggleTextStyles.nonActive}>
            Yearly
        </p>
      </div>
    </div>
  );
}

function PlanView({ formRef }) {
  return (
    <ViewFactory
      formRef={formRef}
      heading="Select your plan"
      text="You have the option of monthly or yearly billing."
      initialValues={{ plan: "arcade" }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default PlanView;
