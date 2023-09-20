import { FormikProps } from "formik";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import FormContainer from "./components/FormContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import SubmitButton from "./components/SubmitButton";
import AddOnsView from "./views/AddOnsView";
import PersonalInfoView from "./views/PersonalInfoView";
import PlanView from "./views/PlanView";
import SummaryView from "./views/SummaryView";
import useMultiStepFormStore, {
  MultiStepFormStore,
  isLastStep,
} from "./store/useMultiStepFormStore";
import ConfirmationSuccess from "./views/ConfirmationSuccess";

function App() {
  const formRef = useRef<FormikProps<object>>(null);
  const {
    currentStepIndex,
    components,
    animationDirection,
    next,
    back,
    setSteps,
  }: MultiStepFormStore = useMultiStepFormStore();

  useEffect(() => {
    const steps = [
      <PersonalInfoView formRef={formRef} />,
      <PlanView formRef={formRef} />,
      <AddOnsView formRef={formRef} />,
      <SummaryView formRef={formRef} />,
      <ConfirmationSuccess />,
    ];

    setSteps(steps);
  }, [setSteps]);

  const handleSubmit = () => {
    if (formRef.current) {
      if (currentStepIndex === 0) {
        type FormValues = {
          name: string;
          email: string;
          phoneNumber: string;
        };

        const formik = formRef.current as FormikProps<FormValues>;

        formRef.current.handleSubmit();
        if (!formik.values.name) return;
        if (!formik.values.email) return;
        if (!formik.values.phoneNumber) return;
      }

      formRef.current.handleSubmit();
      next();
    }
  };

  const handleGoBack = () => {
    if (currentStepIndex > 0) {
      back();
    }
  };

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center md:h-screen">
      <FormContainer>
        <Sidebar currentStepIndex={currentStepIndex} />
        <div className="bg-userMagnolia pb-4 md:overflow-hidden md:bg-white md:pb-0">
          <motion.div
            key={currentStepIndex}
            animate={{ x: 0, opacity: 1 }}
            initial={
              animationDirection === "right"
                ? { x: 300, opacity: 0 }
                : { x: -300, opacity: 0 }
            }
            exit={
              animationDirection === "left"
                ? { x: -300, opacity: 0 }
                : { x: 300, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            className="
            mx-4 -mt-20 rounded-xl bg-white px-6 
            py-9 shadow-xl
            md:m-0 md:h-full md:w-full md:rounded-none md:px-24 md:shadow-none"
          >
            {components[currentStepIndex]}
          </motion.div>
        </div>
        {!isLastStep() && (
          <SubmitButton
            handleSubmit={handleSubmit}
            handleGoBack={handleGoBack}
            isLastStep={isLastStep()}
            currentStepIndex={currentStepIndex}
          />
        )}
      </FormContainer>
    </div>
  );
}

export default App;
