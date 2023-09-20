import { Form, Formik, FormikProps } from "formik";
import { ReactNode, Ref } from "react";
import * as Yup from "yup";

import useSubscription from "../store/useSubscription";

interface Props {
  innerRef: Ref<FormikProps<object>> | undefined;
  initialValues: object;
  children: ReactNode;
}

function TestForm({ innerRef, initialValues, children }: Props) {
  const updateFields = useSubscription((state) => state.updateFields);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("This field is required"),
  });

  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => updateFields(values)}
    >
      <Form autoComplete="off">{children}</Form>
    </Formik>
  );
}

export default TestForm;
