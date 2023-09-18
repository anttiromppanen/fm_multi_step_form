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

function ViewFactory({ formRef, heading, text, initialValues, children }: Props) {
  return (
    <>
      <h1 className="text-xl font-bold text-userMarineBlue">{heading}</h1>
      <p className="my-4 text-userCoolGrey">{text}</p>
      <TestForm innerRef={formRef} initialValues={initialValues}>
        <div className="flex flex-col gap-y-3">{children}</div>
      </TestForm>
    </>
  );
}

export default ViewFactory;
