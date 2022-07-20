import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Slide } from "@mui/material";
import { Close } from "@mui/icons-material";
import { animateScroll, Link } from "react-scroll";
import UpdateScrollPosition from "../../Hooks/UpdateScrollPosition";
import logo from "../../images/balchhiLogo.jpg"
import "./style.css";

const drawerWidth = "100%";
const navItems = ["Home", "Facilities", "About Us", "Contact"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  let scrollPosition = UpdateScrollPosition();
  console.log(scrollPosition);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setChecked((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", padding: 0 }}>
      <List style={{ padding: 0 }}>
        {navItems.map((item, i) => (
          <ListItem key={i} style={{ borderBottom: "1px solid #0002" }}>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{ transition: "all .5s ease-in-out" }}>
      <AppBar
        component="nav"
        style={{
          zIndex: 1400,
          color: "#000",
          background: "transparent",
          borderBottom: "1px solid #0002",
          boxShadow: "none",
        }}
        ref={containerRef}
        position="fixed"
        disablepadding={true}
        className={`${scrollPosition > 30 && "Shadow"}`}
        id="Home"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            style={{ color: "#000" }}
          >
            {!checked ? <MenuItem /> : <Close />}
          </IconButton>
          <Link to="/" style={{ width: "5rem", cursor: "pointer" }}>
            <img
              src={logo}
              alt="logo"
              style={{ borderRadius: "50%", width: "100%" }}
            />
          </Link>
          <Box sx={{ display: { xs: "none", sm: "flex", gap: "50px" } }}>
            {navItems.map((item, i) => (
              <Link
                key={i}
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: scrollPosition > 30 ? "#000" : "#000",
                  fontWeight:scrollPosition > 30 ? "bold" : "normal"
                }}
                className={`${
                  item === "Home" && scrollPosition < 627
                    ? "active"
                    : item === "Facilities" &&
                      scrollPosition >= 627 &&
                      scrollPosition < 1500
                    ? "active"
                    : item === "About Us" &&
                      scrollPosition > 1500 &&
                      scrollPosition < 2400
                    ? "active"
                    : item === "Contact" && scrollPosition > 2400 && "active"
                }`}
                to={item === "Home" ? "" : item}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={item == "Home" && animateScroll.scrollToTop}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Button
            style={{ background: "orangered", color: "#fff" }}
            sx={{
              display: { xs: "none", sm: "block", md: "block", lg: "block" },
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Slide direction="down" in={checked} container={containerRef.current}>
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
                height: "35vh",
                marginTop: "85px",
                fill: (theme) => theme.palette.common.white,
                stroke: (theme) => theme.palette.divider,
                strokeWidth: 1,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Slide>
      </Box>
    </Box>
  );
}
