import * as React from "react";
import "../../assets/css/sidebar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Nav } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useContext, memo, Fragment } from "react";
import logo from "../../assets/logo.png";
import { Search } from "../../assets/styleJs/Search";
import { SearchIconWrapper } from "../../assets/styleJs/SearchIconWrapper";
import { NotifIconWrapper } from "../../assets/styleJs/NotifIconWrapper";
import { StyledInputBase } from "../../assets/styleJs/StyledInputBase";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { route } from "../../utils/data";


const drawerWidth = 270;

function Sidebar(props) {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuParam, setShowSubMenuParam] = useState(false);

  const [activeLink, setActiveLink] = useState("dashboard");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const currentPage = useSelector((state) => state.currentPage);

  const handleButtonClick = (pageName) => {
    store.dispatch({ type: "SET_CURRENT_PAGE", payload: pageName });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = useState(false);

  const drawer = (
    <div className="testt">
     
     <img src={logo} alt="logo" width="50%" style={{marginLeft:"50px"}} />

     <Nav
			as="div"
			className="flex-column">
			{route.map((item, index) => (
				<React.Fragment key={index}>
					{item.title === "Historiques et indicateurs" ? ( // Check if it's the "Historique" NavLink
						<>
							<NavLink
								to={item.url}
								className="nav-link"
								activeclassname="active"
								onClick={() => {
									handleLinkClick(item.handleLinkClick);
									handleButtonClick(item.handleButtonClick);
									setShowSubMenu(!showSubMenu); // Toggle sub-menu visibility on NavLink click
								}}>
								{item.title}
							</NavLink>
							{showSubMenu && ( // Render the sub-menu if showSubMenu is true
								<ul className="sub-menu">
									{item.children.map((subItem, subIndex) => (
										<li key={subIndex}>
											<NavLink
												to={subItem.url}
												className="nav-link2"
												activeclassname="active"
                        onClick={() => {
                          handleButtonClick(subItem.handleButtonClick);
                        }}>
												{subItem.title}
											</NavLink>
										</li>
									))}
								</ul>
							)}
						</>
					) : item.title === "Parametre" ? ( // Check if it's the "Historique" NavLink
          <>
            <NavLink
              to={item.url}
              className="nav-link"
              activeclassname="active"
              onClick={() => {
                handleLinkClick(item.handleLinkClick);
                handleButtonClick(item.handleButtonClick);
                setShowSubMenuParam(!showSubMenuParam); // Toggle sub-menu visibility on NavLink click
              }}>
              {item.title}
            </NavLink>
            {showSubMenuParam && ( // Render the sub-menu if showSubMenu is true
              <ul className="sub-menu">
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subItem.url}
                      className="nav-link2"
                      activeclassname="active"
                      onClick={() => {
                        handleButtonClick(subItem.handleButtonClick);
                      }}
                      >
                      {subItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) 
           : (
						<NavLink
							to={item.url}
							className="nav-link"
							activeclassname="active"
							onClick={() => {
								handleLinkClick(item.handleLinkClick);
								handleButtonClick(item.handleButtonClick);
							}}>
							{item.title}
						</NavLink>
					)}
				</React.Fragment>
			))}
		</Nav>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              fontWeight:"bold",
              color: "black",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              ml: "20px",
            }}
          >
           
          </Typography>
          <Search sx={{ marginRight: "20px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <NotifIconWrapper sx={{ marginRight: "20px" }}>
            <NotificationsNoneRoundedIcon />
          </NotifIconWrapper>
          <NotifIconWrapper>
            <AccountCircleRoundedIcon />
          </NotifIconWrapper>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth, xs: "none" }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

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
              bgcolor: "#18202c",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#18202c",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Typography component="div" paragraph>
          {props.children}
        </Typography>
      </Box>
    </Box>
  );
}
export default Sidebar;

