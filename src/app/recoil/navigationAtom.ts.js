// "use client";
// import { atom } from "recoil";

// export const activeNavItemState = atom({
//   key: "activeNavItem", // Unique key
//   default: 1, // Default to the first item
// });
import { atom, selector } from "recoil";

const LOCAL_STORAGE_KEY = "activeNavItem"; // Key for local storage

const getActiveNavItemFromLocalStorage = () => {
  try {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValue ? parseInt(storedValue, 10) : null;
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
};

export const activeNavItemState = atom({
  key: "activeNavItem",
  default: getActiveNavItemFromLocalStorage() || 1, // Load from local storage
});

// Selector to persist changes to local storage
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
