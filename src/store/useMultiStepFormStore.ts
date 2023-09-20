import { ReactElement } from "react";
import { create } from "zustand";

interface MultiStepFormState {
  currentStepIndex: number;
  animationDirection: "left" | "right";
  components: ReactElement[];
}

interface MultiStepFormActions {
  setCurrentStepIndex: (index: number) => void;
  next: () => void;
  back: () => void;
  goTo: (index: number) => void;
  setSteps: (steps: ReactElement[]) => void;
}

export type MultiStepFormStore = MultiStepFormState & MultiStepFormActions;

const useMultiStepFormStore = create<MultiStepFormStore>((set) => ({
  currentStepIndex: 0,
  animationDirection: "right",
  components: [],
  setCurrentStepIndex: (index) => set({ currentStepIndex: index }),
  next: () =>
    set((state) => ({
      currentStepIndex: Math.min(
        state.currentStepIndex + 1,
        state.components.length - 1,
      ),
      animationDirection: "right",
    })),
  back: () =>
    set((state) => ({
      currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      animationDirection: "left",
    })),
  goTo: (index) => set({ currentStepIndex: index, animationDirection: "left" }),
  setSteps: (steps) => set({ components: steps }),
}));

export const isLastStep = (): boolean => {
  const { currentStepIndex, components } = useMultiStepFormStore.getState();
  return currentStepIndex === components.length - 1;
};

export default useMultiStepFormStore;
