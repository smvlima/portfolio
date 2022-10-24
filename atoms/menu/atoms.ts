import { atom } from "recoil";

export const menuEnabledAtom = atom({
  key: "menuEnabled", // all the atoms in recoil have their unique key
  default: true, // this is the default value of an atom
});
