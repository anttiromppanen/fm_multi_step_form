/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    label: string;
    isError: boolean;
    showError?: boolean;
    setIsError: (arg0: boolean) => void;
  };

function StyledInput({
  label,
  showError,
  isError,
  setIsError,
  ...props
}: StyledInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="w-full">
      <label htmlFor={props.id || props.name}>
        <div className="mb-1 sm:mb-3">
          <p
            className={`text-xs font-bold text-userMarineBlue ${
              (meta.touched && meta.error) || (isError && "!text-userLightRed")
            }`}
          >
            {label}
          </p>
        </div>
      </label>
      <input
        onKeyUp={() => isError && setIsError && setIsError(false)}
        className={`hover:border-userPurple focus:outline-userPurple text-md w-full rounded-md border border-userLightGrey px-4 py-2 sm:px-6 sm:py-4 sm:text-3xl ${
          (meta.touched && meta.error) ||
          (isError && "!border-userLightRed !outline-userLightRed")
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="text-userLightRed mt-2 text-xs">{meta.error}</p>
      )}
      {isError && showError && (
        <p className="text-userLightRed mt-2 text-xs">Must be a valid date</p>
      )}
    </div>
  );
}

export default StyledInput;
