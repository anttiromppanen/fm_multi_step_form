/* eslint-disable react/jsx-props-no-spreading */
import { Field, FieldHookConfig } from "formik";
import { ClassAttributes, Dispatch, InputHTMLAttributes, SetStateAction } from "react";

type StyledRadioInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    icon: string;
    active: string;
    toggleEnabled: boolean;
    price: string;
    setActive: Dispatch<SetStateAction<string>>
  }

function StyledRadioInput({ icon, active, toggleEnabled, price, setActive, ...props }: StyledRadioInputProps) {
  return (
      <label htmlFor={props.value}>
        <Field
          id={props.value}
          type="radio" 
          className="hidden" 
          onClick={() => setActive(props.value ? props.value.toString() : "arcade")}
          {...props}
        />
          <div className={`bg-userInputRadioBG items-center p-4 flex rounded-xl gap-x-4
            ${active === props.value && " outline-userMarineBlue outline outline-1"}`}
          >
            <div className={toggleEnabled ? "-mt-6" : "mt-0"}>
              <img src={icon} alt="Plan icon" />
            </div>
            <div>
              <h2 className="text-userMarineBlue font-bold">
                {props.value.charAt(0).toUpperCase() + props.value.slice(1)}
              </h2>
              <p className="text-userCoolGrey">{price}</p>
              { toggleEnabled && <p className="text-userMarineBlue text-sm">2 months free</p> }
            </div>
          </div>
      </label>
  );
}

export default StyledRadioInput;