import { Ref } from "react";
import { FormikProps } from "formik";
import StyledInput from "../components/StyledInput";
import ViewFactory from "./ViewFactory";

interface Props {
  formRef: Ref<FormikProps<object>> | undefined,
}

function FormChildren() {
  return (
    <>
      <StyledInput
        isError={false}
        label="Name"
        name="name"
        setIsError={() => {}}
        placeholder="e.g. Stephen King"
      />
      <StyledInput
        isError={false}
        label="Email Address"
        name="email"
        type="email"
        setIsError={() => {}}
        placeholder="e.g. stephenking@lorem.com"
      />
      <StyledInput
        isError={false}
        label="Phone Number"
        name="phoneNumber"
        setIsError={() => {}}
        placeholder="john@acme.com"
      />
    </>
  );
}

function PersonalInfoView({ formRef }: Props) {
  return (
    <ViewFactory
      formRef={formRef}
      heading="Personal info"
      text="Please provide your name, email address, and phone number"
      initialValues={{ name: "", email: "", phoneNumber: "" }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default PersonalInfoView;
