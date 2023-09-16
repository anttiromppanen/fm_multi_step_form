import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import FormContainer from "./components/FormContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import TestForm from "./components/TestForm";
import SubmitButton from "./components/SubmitButton";
import PersonalInfoView from "./views/PersonalInfoView";
import PlanView from "./views/PlanView";

function App() {
  const [isError, setIsError] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      setIsError(!isError);
      formRef.current.handleSubmit();
    }
  };

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center md:h-screen">
      <FormContainer>
        <Sidebar />
        <div className="bg-green-500 pb-4 md:overflow-scroll">
          <div
            className="
            mx-4 -mt-20 rounded-xl bg-white px-6 
            py-9 shadow-xl
            md:mt-0 md:overflow-hidden md:rounded-none"
          >
            {!isError ? (
              <PersonalInfoView formRef={formRef} />
            ) : (
              <PlanView formRef={formRef} />
            )}
          </div>
        </div>
        <SubmitButton handleSubmit={handleSubmit} />
      </FormContainer>
    </div>
  );
}

export default App;
