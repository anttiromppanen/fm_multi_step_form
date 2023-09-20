import { FormikProps } from "formik";
import { ReactNode, Ref } from "react";
import TestForm from "../components/TestForm";

interface Props {
  formRef: Ref<FormikProps<object>> | undefined;
  heading: string;
  text: string;
  initialValues: object;
  children: ReactNode;
}

function ViewFactory({
  formRef,
  heading,
  text,
  initialValues,
  children,
}: Props) {
  return (
    <>
      <h1 className="select-none text-2xl font-bold text-userMarineBlue md:text-4xl">
        {heading}
      </h1>
      <p className="mb-5 mt-2 select-none text-userCoolGrey md:mb-10 md:text-lg">
        {text}
      </p>
      <TestForm innerRef={formRef} initialValues={initialValues}>
        <div className="flex flex-col gap-y-3">{children}</div>
      </TestForm>
    </>
  );
}

export default ViewFactory;
