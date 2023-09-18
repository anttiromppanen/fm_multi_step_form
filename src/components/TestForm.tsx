import { Form, Formik, FormikProps } from "formik";
import { ReactNode, Ref } from "react";

interface Props {
  innerRef: Ref<FormikProps<object>> | undefined,
  initialValues: object,
  children: ReactNode,
}

function TestForm({ innerRef, initialValues, children }: Props) {
  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form>{children}</Form>
    </Formik>
  );
}

export default TestForm;
