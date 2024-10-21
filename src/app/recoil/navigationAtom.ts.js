import { atom, selector } from "recoil";

const LOCAL_STORAGE_KEY = "activeNavItem";

const getActiveNavItemFromLocalStorageOrDefault = () => {
  try {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedValue = storedValue ? parseInt(storedValue, 10) : null;
    return parsedValue !== null && parsedValue >= 0 ? parsedValue : 1;
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return 1;
  }
};

export const activeNavItemState = atom({
  key: "activeNavItem",
  default: getActiveNavItemFromLocalStorageOrDefault(),
});

export const activeNavItemPersistState = selector({
  key: "activeNavItemPersist",
  get: ({ get }) => get(activeNavItemState),
  set: ({ set }, newValue) => {
    set(activeNavItemState, newValue);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, newValue.toString());
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },
});
