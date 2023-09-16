import { Field } from "formik";

import arcadeIcon from "../assets/images/icon-arcade.svg";
import ViewFactory from "./ViewFactory";

function FormChildren() {
  return (
    <>
      <div className="bg-userInputRadioBG flex rounded-lg p-4">
        <img src={arcadeIcon} alt="Arcade icon" />
        <div>
          <label>
            <input type="radio" id="arcade" name="plan" value="arcade" />
            Arcade
          </label>
          <p>$9/mo</p>
        </div>
      </div>
      <div className="bg-userInputRadioBG flex rounded-lg p-4">
        <img src={arcadeIcon} alt="Arcade icon" />
        <div>
          <label>
            <input type="radio" id="advanced" name="plan" value="advanced" />
            Advanced
          </label>
          <p>$9/mo</p>
        </div>
      </div>
      <div />
    </>
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
