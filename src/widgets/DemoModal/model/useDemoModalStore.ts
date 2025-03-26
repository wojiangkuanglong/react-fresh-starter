import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
  visible: boolean;
}

interface Action {
  setVisible: (value: boolean) => void;
  clear: () => void;
}

const initialState: State = {
  visible: false,
};

export const useDemoModalStore = create(
  immer<State & Action>((set) => ({
    ...initialState,
    setVisible: (visible) => set({ visible }),
    clear: () => set(initialState),
  })),
);
