import { FormikProps } from "formik";
import { Ref } from "react";

import StyledCheckbox from "../components/StyledCheckbox";
import useSubscription from "../store/useSubscription";
import ViewFactory from "./ViewFactory";
import getPrices from "../services/prices";

function FormChildren() {
  const { addOns } = getPrices;

  return (
    <>
      <StyledCheckbox
        heading="Online service"
        text="Access to multiplayer games"
        id="onlineService"
        value="onlineService"
        price={addOns.onlineService}
      />
      <StyledCheckbox
        heading="Larger storage"
        text="Extra 1TB of cloud save"
        id="largerStorage"
        value="largerStorage"
        price={addOns.largerStorage}
      />
      <StyledCheckbox
        heading="Customizable profile"
        text="Custom theme on your profile"
        id="customizableProfile"
        value="customizableProfile"
        price={addOns.customizableProfile}
      />
    </>
  );
}

interface Props {
  formRef: Ref<FormikProps<object>> | undefined;
}

function AddOnsView({ formRef }: Props) {
  const { addOns } = useSubscription((state) => state.fields);

  return (
    <ViewFactory
      formRef={formRef}
      heading="Pick add-ons"
      text="Add-ons help enhance your gaming experience."
      initialValues={{ addOns }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default AddOnsView;
