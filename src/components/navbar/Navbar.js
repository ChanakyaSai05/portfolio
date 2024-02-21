import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Tab, Tabs, Typography } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import "./Navbar.css";
import About from "../about/About";
import Home from "../home/Home";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

function Navbar({ homeRef, aboutRef, skillsRef, expRef, contactRef,value, setValue }) {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleChange = (event, newValue) => {
    if (newValue == 1) {
      // homeRef.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (newValue == 2) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (newValue == 3) {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (newValue == 4) {
      expRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (newValue == 5) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <p className="my">my</p>
        <p className="portfolio">Portfolio</p>
        <p className="dot">.</p>
      </div>

      <div className="tabs">
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            variant="scrollable"
            aria-label="forced scroll tabs example"
            textColor="white"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "red",
              },
            }}
          >
            <Tab value="1" label="HOME" />
            <Tab value="2" label="ABOUT" />
            <Tab value="3" label="SKILLS" />
            <Tab value="4" label="EXPERIENCE" />
            <Tab value="5" label="CONTACT" />
          </Tabs>
        </TabContext>
      </div>
    </div>
  );
}

export default Navbar;
