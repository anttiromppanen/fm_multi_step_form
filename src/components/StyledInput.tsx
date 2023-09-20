/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    label: string;
  };

function StyledInput({ label, ...props }: StyledInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="w-full">
      <label htmlFor={props.id}>
        <div className="mb-1 flex justify-between sm:mb-1">
          <p
            className={`text-xs font-bold text-userMarineBlue md:text-base ${
              meta.touched && meta.error && "!text-userLightRed"
            }`}
          >
            {label}
          </p>
          {meta.touched && meta.error && (
            <p className="text-xs font-bold text-userStrawberryRed md:text-base">
              {meta.error}
            </p>
          )}
        </div>
      </label>
      <input
        className={`hover:border-userPurple focus:outline-userPurple text-md w-full rounded-md border border-userLightGrey px-4 py-2 sm:px-6 sm:py-2 sm:text-xl ${
          meta.touched &&
          meta.error &&
          "!border-userLightRed !outline-userLightRed"
        }`}
        {...field}
        {...props}
      />
    </div>
  );
}

export default StyledInput;
