import { TOGGLE_DARK_MODE } from "./appStateTypes";

const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};

export { toggleDarkMode };
