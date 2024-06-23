import { atom, selector } from "recoil";

const LOCAL_STORAGE_KEY = "activeNavItem";

// Helper function to get activeNavItem from local storage or default to 1
const getActiveNavItemFromLocalStorageOrDefault = () => {
  try {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    // Parse the value, ensuring it's a number and within the valid range
    const parsedValue = storedValue ? parseInt(storedValue, 10) : null;
    return parsedValue !== null && parsedValue >= 0 ? parsedValue : 1; // Default to 1 if invalid
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return 1; // Default to 1 on error
  }
};

export const activeNavItemState = atom({
  key: "activeNavItem",
  default: getActiveNavItemFromLocalStorageOrDefault(), // Use the helper function
});

// Selector for persistence (unchanged)
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
