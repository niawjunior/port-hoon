import { atom, RecoilState } from "recoil";

interface IForm {
  available: string;
  avg: string;
  market: string;
  symbol: string;
}

interface IFormState {
  key: string;
  default: IForm[];
}

const formState = atom({
  key: "formState",
  default: [],
});

export { formState };
