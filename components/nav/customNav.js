import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Switch } from "@mui/material";
import { toggleDarkMode } from "../../redux/appState/appStateActions";

import { useDispatch, useSelector } from "react-redux";

const CustomNav = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.appState);
  const { darkMode } = state;
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        Dark mode <Switch onClick={handleToggleDarkMode} checked={darkMode} lable="Dark mode" />
      </Toolbar>
    </AppBar>
  );
};

export default CustomNav;
