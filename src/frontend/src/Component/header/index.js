import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "upload", path: "/upload" },
  { name: "User", path: "/user" },
  { name: "Medical", path: "/Medical" },
  { name: "File Transfer", path: "/filetransfer" },
  { name: "Meter", path: "/Meter" },

  // { name: "Meter", path: "/Meter" },
];

export const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ATHANASIA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <Link key={item} to={item.path} style={{ textDecoration: "none",color:"black" }}>
          <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
          </ListItem>
            </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { md: "flex", xs: "flex" } }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#f1f1f1", color: "black" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              pl: "60px",
              flexGrow: 1,
              display: { xs: "flex", sm: "block" },
            }}
          >
            ATHANASIA
          </Typography>
          <Box sx={{ pr: "60px", display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={item.name}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                    marginRight: "10px",
                    color: "black",
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
};
