import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FormContainer({ children }: Props) {
  return (
    <div
      className="
        grid h-full w-full grid-cols-1
        grid-rows-[172px_1fr_auto] bg-userWhite md:h-[600px] md:w-[940px] md:grid-cols-[274px_1fr]
        md:grid-rows-[1fr_auto] md:rounded-2xl md:p-5"
    >
      {children}
    </div>
  );
}

export default FormContainer;
