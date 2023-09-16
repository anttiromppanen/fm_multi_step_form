import { Field, Form, Formik, FormikHelpers, useFormik } from "formik";

function TestForm({ innerRef, initialValues, children }) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
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
