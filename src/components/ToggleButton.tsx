import { Dispatch, SetStateAction } from "react";

interface Props {
  toggleEnabled: boolean;
  setToggleEnabled: Dispatch<SetStateAction<boolean>>;
}

function ToggleButton({ toggleEnabled, setToggleEnabled }: Props) {

    return (
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <label 
            className="inline-flex relative items-center mr-5 cursor-pointer" 
            htmlFor="plan-toggle"
          >
            <input
              id="plan-toggle"
              type="checkbox"
              className="sr-only peer"
              checked={toggleEnabled}
              readOnly
            />
            <button
              type="button"
              aria-label="Yearly or monthly plan toggle"
              onClick={() => {
                  setToggleEnabled(!toggleEnabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            />
          </label>
        </div>
      </div>
    );
}

export default ToggleButton;