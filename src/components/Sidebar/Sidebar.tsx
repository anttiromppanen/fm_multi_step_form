import { isLastStep } from "../../store/useMultiStepFormStore";

interface SidebarItemProps {
  value: number;
  text: string;
  currentStepIndex: number;
}

function SidebarItem({ value, text, currentStepIndex }: SidebarItemProps) {
  const setActiveItem = () => {
    const styles = " border-0 bg-userLightBlue !text-userMarineBlue";
    if (value === currentStepIndex + 1) return styles;
    if (value === currentStepIndex && isLastStep()) return styles;
    return null;
  };

  return (
    <div className="flex select-none items-center gap-x-4">
      <div
        className={`
        flex h-8 w-8 items-center justify-center rounded-full 
        border border-userMagnolia text-sm font-bold text-userMagnolia 
        transition-all duration-300 ${setActiveItem()}`}
      >
        {value}
      </div>
      <div className="hidden flex-col md:flex">
        <p className="text-sm text-userCoolGrey">STEP {value}</p>
        <p className="font-medium text-userMagnolia">{text}</p>
      </div>
    </div>
  );
}

interface SidebarProps {
  currentStepIndex: number;
}

function Sidebar({ currentStepIndex }: SidebarProps) {
  return (
    <div
      className="
      row-span-1 h-full w-full
      bg-sidebarMobile bg-cover bg-center bg-no-repeat
      md:row-span-2 md:rounded-xl md:bg-sidebarDesktop md:pl-7 md:pt-10
      "
    >
      <div className="flex h-24 items-center justify-center gap-x-4 gap-y-6 md:h-full md:flex-col md:items-start md:justify-start">
        <SidebarItem
          value={1}
          currentStepIndex={currentStepIndex}
          text="YOUR INFO"
        />
        <SidebarItem
          value={2}
          currentStepIndex={currentStepIndex}
          text="SELECT PLAN"
        />
        <SidebarItem
          value={3}
          currentStepIndex={currentStepIndex}
          text="ADD-ONS"
        />
        <SidebarItem
          value={4}
          currentStepIndex={currentStepIndex}
          text="SUMMARY"
        />
      </div>
    </div>
  );
}

export default Sidebar;
