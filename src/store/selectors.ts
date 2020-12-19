import { selector } from "recoil";
import { formState } from "./atoms";

const getFormState = selector({
  key: "getFormState",
  get: ({ get }) => {
    return get(formState);
  },
});

export { getFormState };
