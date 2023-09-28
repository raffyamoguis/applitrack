import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  sortType: "Ascending" | "Descending";
};

type Action = {
  changeSort: () => void;
};

const initialState: State = {
  sortType: "Descending",
};

export const useApplicationSort = createWithEqualityFn<State & Action>()(
  (set, get) => ({
    ...initialState,
    changeSort: () => {
      if (get().sortType === "Ascending") set({ sortType: "Descending" });
      else if (get().sortType === "Descending") set({ sortType: "Ascending" });
    },
  }),
  shallow
);
