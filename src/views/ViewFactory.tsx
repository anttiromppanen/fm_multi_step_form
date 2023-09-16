import TestForm from "../components/TestForm";
import StyledInput from "../components/StyledInput";

function FormChildren() {
  return (
    <>
      <StyledInput
        isError={false}
        label="firstName"
        name="firstName"
        setIsError={() => {}}
        placeholder="John"
      />
      <StyledInput
        isError={false}
        label="lastName"
        name="lastName"
        setIsError={() => {}}
        placeholder="Doe"
      />
      <StyledInput
        isError={false}
        label="email"
        name="email"
        type="email"
        setIsError={() => {}}
        placeholder="john@acme.com"
      />
    </>
  );
}

function ViewFactory({ formRef, heading, text, initialValues, children }) {
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
