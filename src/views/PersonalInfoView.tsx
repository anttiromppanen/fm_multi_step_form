import { FormikProps } from "formik";
import { Ref } from "react";

import StyledInput from "../components/StyledInput";
import ViewFactory from "./ViewFactory";
import useSubscription from "../store/useSubscription";

interface Props {
  formRef: Ref<FormikProps<object>> | undefined;
}

function FormChildren() {
  return (
    <>
      <StyledInput
        label="Name"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <StyledInput
        label="Email Address"
        name="email"
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <StyledInput
        label="Phone Number"
        name="phoneNumber"
        id="phoneNumber"
        type="tel"
        placeholder="e.g. +1 234 456 890"
      />
    </>
  );
}

function PersonalInfoView({ formRef }: Props) {
  const subscriptionState = useSubscription((state) => state.fields);
  const { name, email, phoneNumber } = subscriptionState;

  return (
    <ViewFactory
      formRef={formRef}
      heading="Personal info"
      text="Please provide your name, email address, and phone number"
      initialValues={{ name, email, phoneNumber }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default PersonalInfoView;
