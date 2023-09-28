import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  searchQuery: string;
};

type Action = {
  setSearchQuery: (query: string) => void;
};

const initialState: State = {
  searchQuery: "",
};

export const useApplicationSearch = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setSearchQuery: (query: string) => set({ searchQuery: query }),
  }),
  shallow
);
