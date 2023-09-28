import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  selectedFilter: string;
};

type Action = {
  setFilter: (filter: string) => void;
};

const initialState: State = {
  selectedFilter: "No filter",
};

export const useApplicationFilter = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setFilter: (filter: string) => set({ selectedFilter: filter }),
  }),
  shallow
);
